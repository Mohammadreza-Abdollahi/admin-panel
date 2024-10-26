import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColorBadge = ({color}) => {
    return ( 
        <>
            <span style={{backgroundColor: color}} className={`inline-block w-10 h-10 mx-2 border-2 border-white  outline outline-4 outline-palete-2-400-1 rounded-full relative group`}>
                <button className="text-white text-2xl scale-0 group-hover:scale-100 transition-all duration-150 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"><FontAwesomeIcon className="align-middle" icon={faXmark}/></button>
            </span>
        </>
    );
}
 
export default ColorBadge;