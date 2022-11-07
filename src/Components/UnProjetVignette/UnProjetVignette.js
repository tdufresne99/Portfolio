
const UnProjetVignette = ({projet}) => {

    return (
        <>
            <div className="p-3 border-4 border-green-700 border-dashed">
                <img src={projet.img} className="border-4 border-black aspect-video" alt={projet.titre}></img>
            </div>
            <div className="mt-4">
                <h2 className="text-xl text-yellow-100 "><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">{projet.titre}</span><span className="text-purple-400">() &#123;</span></h2>
                {(projet.titre === 'Nourse') ? <p className="pt-2 pb-5 text-green-700">// En cours de production (alpha)</p> : null}
                <p className="text-cyan-200">genre <span className="text-white">= </span><span className="text-orange-300">"{projet.genre}"</span><span className="text-white">;</span></p>
                <p className="pt-2 text-green-700">/*</p>
                {(projet.description !== '') ? 
                    <ul className="text-sm text-green-700">
                        {projet.description.map((point,i) => {
                            return <li key={i} className="p-2">- {point}</li>
                        })}
                    </ul> : 
                null
                }
                <p className="pb-2 text-green-700">*/</p>
                <p className="mt-5 text-green-700">// Technologies utilisées:</p>
                <p className="p-2 text-purple-400"><span className="text-cyan-200">technologies <span className="text-white">= </span></span> <span className="text-orange-300">"{projet.techno}"</span><span className="text-white">;</span></p>
                <h2 ><span className="text-xl text-purple-400">&#125;</span></h2>
            </div>
        </>
    );
    /*
    */
};

export default UnProjetVignette;