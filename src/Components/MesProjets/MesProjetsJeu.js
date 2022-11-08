import { Link } from 'react-router-dom';
import UnProjetVignetteJeu from '../UnProjetVignette/UnProjetVignetteJeu';
import { Outlet } from 'react-router-dom';


const MesProjetsJeu = ({projets}) => {
    return (
        <div className="mt-12">
            <ul className="flex flex-wrap text-center justify-between">
                {
                    projets.map((unProjet,i) => {
                        return (
                            <li key={unProjet.titre} className='mx-2 mb-20 text-left basis-96'>
                                <Link to={'/portfolio-jeux/projet/'+i}><UnProjetVignetteJeu projet={unProjet}/></Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    );
};

export default MesProjetsJeu;