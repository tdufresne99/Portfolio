import { Link } from 'react-router-dom';
import UnProjetVignette from '../UnProjetVignette/UnProjetVignette';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { Outlet } from 'react-router-dom';


const MesProjets = ({projets}) => {
    return (
        <div className="mt-12">
            <ul className="flex flex-wrap text-center justify-between">
                {
                    projets.map((unProjet,i) => {
                        return (
                            <li key={unProjet.titre} className='mx-2 mb-20 text-left basis-96'>
                                <Link to={'/portfolio/'+i}><UnProjetVignette projet={unProjet}/></Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    );
};

export default MesProjets;