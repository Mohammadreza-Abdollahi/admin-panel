const ShowInMenu = (param) => {
    console.log(param.data);
    return ( 
        <>
            <span className={`text-lg ${param.data.show_in_menu ? 'text-green-600' : 'text-red-600'}`}>{param.data.show_in_menu ? 'بله' : 'خیر'}</span>
        </>
     );
}
 
export default ShowInMenu;