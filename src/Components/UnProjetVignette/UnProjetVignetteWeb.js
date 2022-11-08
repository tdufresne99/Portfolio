const UnProjetVignetteWeb = ({projet}) => {

    return (
        <div>
            <h2 className="mb-5 text-xl text-yellow-100 "><span className="text-yellow-100 hover:bg-neutral-700 hover:underline">{projet.titre}</span><span className="text-purple-400">() &#123;</span></h2>
            <img src={"/img/" + projet.img} alt={projet.titre} className='p-4 border-4 border-green-700 border-dashed'></img>
            <h2 className="pt-6 text-xl text-purple-400">&#125;<span className="text-white">;</span></h2>
        </div>
    );
};

export default UnProjetVignetteWeb;