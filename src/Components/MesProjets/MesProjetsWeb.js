import { Link } from 'react-router-dom';
import UnProjetVignetteWeb from '../UnProjetVignette/UnProjetVignetteWeb';
import { Outlet } from 'react-router-dom';


const MesProjetsWeb = ({projets}) => {
    return (
        <div className="mt-8">
            <p class='mb-16 text-green-700'>// Ce portfolio est une application React qui utilise une base de données pour intégrer dynamiquement le contenu des différentes sections.</p>
            <ul className="flex flex-wrap text-center justify-between">
                {
                    projets.map((unProjet,i) => {
                        return (
                            <li key={unProjet.titre} className='mx-2 mb-20 text-left basis-1/2 min-w-[280px]'>
                                <a href={unProjet.lien} target={'_blank'}>
                                    <UnProjetVignetteWeb projet={unProjet}/>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    );
};

export default MesProjetsWeb;