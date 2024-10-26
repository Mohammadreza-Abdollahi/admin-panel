import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextBadge = ({title}) => {
    return ( 
        <>
            <span className="align-middle mx-1 py-0.5 px-3 bg-palete-2-100 rounded-full"> <button className="text-red-500 p-0.5"><FontAwesomeIcon className="align-middle" icon={faXmark}/></button> {title}</span>
        </>
     );
}
 
export default TextBadge;