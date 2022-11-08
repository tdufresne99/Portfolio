import { useParams } from 'react-router-dom';

const UnProjetWeb = ({projets}) => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    const id = useParams();
    const projet = projets[id.projetId];
    console.log(projet)
    return (
        <div className="">
            
                
        </div>
    );
};

export default UnProjetWeb;