const UnProjetVignetteWeb = ({projet}) => {
    return (
        <div>
            <h2 className="mb-5 text-xl text-yellow-100 "><span className="text-sky-700">const </span><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">{projet.titre}</span><span className="text-purple-400"> <span className="text-white">=</span> () <span className="text-sky-700">=&gt;</span> &#123;</span></h2>
            <img src={"/img/" + projet.img} alt={projet.titre} className='p-4 border-4 border-green-700 border-dashed'></img>
            <p className="text-cyan-400 mt-4"><span className="text-sky-700">const </span>description <span className="text-white">= </span><span className="text-orange-300">"{projet.description}"</span><span className="text-white">;</span></p>
            <h2 className="pt-6 text-xl text-purple-400">&#125;<span className="text-white">;</span></h2>
        </div>
    );
};

export default UnProjetVignetteWeb;

/* 
Application web fait en React qui interroge une base de donnée pour afficher dynamiquement son contenu. Fonctionnalité qui affiche le nombre d'étoile selon la cote d'une série.
*/