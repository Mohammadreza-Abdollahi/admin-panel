import { NavLink } from "react-router-dom";

const SidebarItem = ({icon , title , itemPath}) => {
    return ( 
        <>
            <NavLink to={itemPath} className={` block group/edit bg-palete-3-50-1 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-150 hover:bg-palete-4-100 hover:border-r-4 hover:border-palete-4-500-1`}>
                <i className={`${icon} text-palete-3-700 text-lg mx-5 group-hover/edit:text-palete-4-700 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500`}></i>
                <span className="text-base group-hover/edit:text-palete-4-800 text-palete-2-400 align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">{title}</span>
            </NavLink>
        </>
     );
}
 
export default SidebarItem;