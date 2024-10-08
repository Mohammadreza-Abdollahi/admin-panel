import { useNavigate } from "react-router-dom";

const BackButton = ({btnTxt}) => {
    const navigate = useNavigate();
    return ( 
        <>
            <button onClick={()=>navigate(-1)} className={`appearance-none transition-all duration-150 ring-2 ring-palete-2-600 bg-palete-2-600 hover:bg-palete-2-800 hover:ring-palete-2-800 text-white text-xl py-2 px-7 rounded-sm`}>{btnTxt}</button>
        </>
     );
}
 
export default BackButton;