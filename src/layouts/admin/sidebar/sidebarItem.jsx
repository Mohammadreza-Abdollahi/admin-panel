const SidebarItem = ({icon , title}) => {
    return ( 
        <>
            <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                <i class={`${icon} text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500`}></i>
                <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">{title}</span>
            </div>
        </>
     );
}
 
export default SidebarItem;