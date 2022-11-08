import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import HeaderJeu from '../Headers/HeaderJeu';

const LayoutJeu = () => {

    const navigate = useNavigate();
    const location = useLocation();

    if(location.pathname === '/portfolio-jeux') navigate('/portfolio-jeux/projet');

    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <HeaderJeu/>
            <main className="container mb-8">
                <div>
                    <Outlet/>
                    <button onClick={onClickHandler} className="mb-8"><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">RetourEnHaut</span><span className="text-sky-700">()</span>;<span className='text-green-700'> // Retourner en haut de la page.</span></button>
                    <h2 className='mb-5 text-2xl text-yellow-300'>&#125;</h2>
                </div>
            </main>
        </>
    );
};

export default LayoutJeu;