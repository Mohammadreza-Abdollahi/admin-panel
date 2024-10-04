import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

const CategorySub = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return ( 
        <>
            <h2 className="text-xl text-center my-4 text-slate-800">
                <span className="bg-palete-2-100 pl-8 py-1 rounded-full">
                <FontAwesomeIcon icon={faXmark} className="text-red-500 pl-3 pr-4 align-middle cursor-pointer" onClick={()=>navigate('/category')}/>
                <b>زیر گروه: </b>
                <span className="text-palete-2-500">{location.state.title}</span>
                </span>
            </h2>
        </>
     );
}
 
export default CategorySub;