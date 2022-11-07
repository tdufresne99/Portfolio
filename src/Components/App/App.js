import {RouterProvider, createBrowserRouter, Navigate} from 'react-router-dom';
import Layout from '../Layout/Layout';
import MesProjets from '../MesProjets/MesProjets';
import UnProjet from '../UnProjet/UnProjet';

import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';

function App() {

    const [lesProjets, setLesProjets] = useState([{titre: '', description: '', lien: ''}]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'projetsJeu'), (snapshot) => {
            setLesProjets(snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                };
            }));
        });
        return unsub;
    }, [])

    const routes = [
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: 'portfolio',
                    element: <MesProjets projets={lesProjets}/>,
                    children: [
                        {
                            path: ':projetId',
                            element: <UnProjet  projets={lesProjets}/>
                        }
                    ],
                },
                {
                    index: true,
                    element: <Navigate to='/portfolio'/>
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to='/portfolio' replace/>
        }
    ]
    return (
        <RouterProvider router={createBrowserRouter(routes)}/>
    );
};

export default App;
