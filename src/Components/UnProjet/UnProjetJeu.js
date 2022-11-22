import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UnProjetJeu = ({projets}) => {
    const id = useParams();
    const projet = projets[id.projetId];
    console.log(projet);

    useEffect(() => {
        window.scrollTo({top: 10000, behavior: 'smooth'});
    }, [projet.id])

    return (
        <div className="">
            {
                (projet === undefined || projet === null) ? 
                null
                :
                <>
                    <h2 className="mt-12 mb-6 text-2xl text-green-700">// {projet.titre}</h2>
                    <div className="mb-8 p-4 border-4 border-green-700 border-dashed">
                        <div className="video_wrapper" >
                            <iframe title={projet.titre} src={projet.lien} className="border-4 border-black aspect-video"></iframe>
                        </div>
                    </div>
                </> 
            }
                
        </div>
    );
};

export default UnProjetJeu;