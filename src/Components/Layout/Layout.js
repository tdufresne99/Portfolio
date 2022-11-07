import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const Layout = () => {
    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className='interface w-8/12 mx-[10%] mt-4 pt-4'>
			<Header/>
			<main className="container mb-8">
				<div>
					<Outlet/>
				</div>
			</main>
            <button onClick={onClickHandler} className="mb-8"><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">RetourEnHaut</span><span className="text-sky-700">()</span>;<span className='text-green-700'> // Retourner en haut de la page.</span></button>
            <h2 className='mb-5 text-2xl text-yellow-300'>&#125;</h2>
		</div>
    );
};

export default Layout;