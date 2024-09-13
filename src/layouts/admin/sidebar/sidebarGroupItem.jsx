const SidebarGroupItem = ({title}) => {
    return ( 
        <>
            <div className='text-center mb-1'>
                <span className='text-palete-1-300 text-lg mr-40 transition-all group-hover:duration-500 opacity-0 group-hover:mr-0 group-hover:opacity-100 '><b>{title}</b></span>
            </div>
        </>
     );
}
 
export default SidebarGroupItem;