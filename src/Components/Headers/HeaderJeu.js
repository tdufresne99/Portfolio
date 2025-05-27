import { Link } from 'react-router-dom';

const HeaderJeu = () => {

    const onClickHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <header>
            <div>
                <div className='mt-3 text-green-700'>
                    <p >// Auteur: Thomas Dufresne.</p>
                    <p >// Étudiant au BAC en géine logiciel.</p>
                    <p className='mb-4'>// À la recherche d'un milieu de stage stimulant et formateur.</p>
                </div>
                <p className="mb-16 text-left"><span className='text-purple-300'>using </span><span className="text-cyan-200"><span className="text-emerald-400">ThomasDufresne</span><span className='text-white'>.</span>portfolio</span>;</p>
                <h2 className="mt-5 text-left text-2xl text-emerald-400"><span className='text-sky-700'>class </span><Link onClick={onClickHandler} to='/portfolio-jeux/projet' className='hover:bg-neutral-700 hover:underline'>MesProjets</Link> <span className="text-yellow-300">&#123;</span></h2>
                <nav className="">
                    <div className="max-w-lg">
                        <ul className="flex flex-wrap text-left mt-12 mb-24">
                            <li className="basis-auto mt-2 mr-20"><Link to='/portfolio-web/projet'><p><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">Web</span><span className="text-sky-700">()</span>;</p></Link></li>
                            <li className="basis-auto mt-2 mr-20"><a href="/cv/cv.pdf" target="_blank" rel="noreferrer"><p><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">CV</span><span className="text-sky-700">()</span>;</p></a></li>
                            <li className="basis-auto mt-2 mr-20"><a href="https://github.com/tdufresne99" target="_blank" rel="noreferrer"><p><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">GitHub</span><span className="text-sky-700">()</span>;</p></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderJeu;