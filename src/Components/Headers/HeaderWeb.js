import { Link } from 'react-router-dom';

const HeaderWeb = () => {

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
                <p className="mb-16 text-left text-purple-300">import <span className='text-yellow-300'>&#123; </span><span className="text-cyan-200">portfolio</span> <span className='text-yellow-300'>&#125;</span> from <span className='text-orange-300'>'thomas-dufresne'</span><span className='text-white'>;</span></p>
                <h2 className="mt-5 text-left text-2xl text-yellow-100"><span className='text-sky-700'>const </span><Link onClick={onClickHandler} to='/portfolio-web/projet' className='hover:bg-neutral-700 hover:underline'>MesProjets</Link> <span className='text-white'>= <span className='text-yellow-300'>() </span ><span className='text-sky-700'>=&gt;</span> </span><span className="text-yellow-300">&#123;</span></h2>
                <nav className="">
                    <div className="max-w-lg">
                        <ul className="flex flex-wrap text-left mt-12 mb-24">
                            <li className="basis-auto mt-2 mr-20"><Link to='/portfolio-jeux/projet'><p><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">JeuxVideo</span><span  className="text-purple-400">()</span>;</p></Link></li>
                            <li className="basis-auto mt-2 mr-20"><a href="/cv/cv.pdf" target="_blank" rel="noreferrer"><p><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">CV</span><span  className="text-purple-400">()</span>;</p></a></li>
                            <li className="basis-auto mt-2 mr-20"><a href="https://github.com/tdufresne99" target="_blank" rel="noreferrer"><p><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">GitHub</span><span  className="text-purple-400">()</span>;</p></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderWeb;