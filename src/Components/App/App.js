import {RouterProvider, createBrowserRouter, Navigate} from 'react-router-dom';
import Layout from '../Layout/Layout';
import MesProjetsJeu from '../MesProjets/MesProjetsJeu';
import UnProjetJeu from '../UnProjet/UnProjetJeu';
import LayoutJeu from '../Layout/LayoutJeu';
import HeaderWeb from '../Layout/LayoutWeb';

import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import MesProjetsWeb from '../MesProjets/MesProjetsWeb';
import UnProjetWeb from '../UnProjet/UnProjetWeb';

function App() {

    const [lesProjetsJeu, setLesProjetsJeu] = useState([{titre: '', description: '', lien: ''}]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'projetsJeu'), (snapshot) => {
            setLesProjetsJeu(snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                };
            }));
        });
        return unsub;
    }, [])
    


    const [lesProjetsWeb, setLesProjetsWeb] = useState([{titre: '', description: '', lien: ''}]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'projetsWeb'), (snapshot) => {
            setLesProjetsWeb(snapshot.docs.map(doc => {
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
                    path: 'portfolio-jeux',
                    element: <LayoutJeu/>,
                    children: [
                        {
                            path: 'projet',
                            element: <MesProjetsJeu projets={lesProjetsJeu}/>,
                            children: [
                                {
                                    path: ':projetId',
                                    element: <UnProjetJeu  projets={lesProjetsJeu}/>
                                },
                            ],
                        }
                    ]
                },
                {
                    path: 'portfolio-web',
                    element: <HeaderWeb/>,
                    children: [
                        {
                            path: 'projet',
                            element: <MesProjetsWeb projets={lesProjetsWeb}/>,
                            children: [
                                {
                                    path: ':projetId',
                                    element: <UnProjetWeb  projets={lesProjetsWeb}/>
                                }
                            ],
                        }
                    ]
                },
                {
                    index: true,
                    element: <Navigate to='/portfolio-jeux' replace/>
                },
                {
                    path: '/jeu',
                    element: <Navigate to='/portfolio-jeux' replace/>
                },
                {
                    path: '/web',
                    element: <Navigate to='/portfolio-web/projet' replace/>
                }
            ],
        },
        {
            path: '*',
            element: <Navigate to='/portfolio-web' replace/>
        }
    ]
    return (
        <RouterProvider router={createBrowserRouter(routes)}/>
    );
};

export default App;
