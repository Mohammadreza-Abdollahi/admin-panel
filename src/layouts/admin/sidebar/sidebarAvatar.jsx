const SidebarAvatar = ({profile}) => {
    return ( 
        <>
            <section className='text-center pt-2 mb-3'>
                <img className='rounded-full m-auto mb-1 shadow-md shadow-palete-1-300' width={56} src={profile} alt="ProfilePic" />
                <span className='mr-40 text-xl opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0 text-palete-2-300'>محمدرضا عبداللهی</span>
            </section>
        </>
     );
}
 
export default SidebarAvatar;