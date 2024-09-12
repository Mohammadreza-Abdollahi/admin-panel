import Logo from '../../../assets/img/logo.png'

const Header = () => {
        return ( 
        <>
            <section className="fixed pr-24 w-full inline-block py-1  px-4 bg-palete-4-500-1 border-b-2 border-palete-1-500 shadow-lg">
                <img className='inline-block align-middle mx-4' width={60} src={Logo} alt="" />
                <h1 className="text-4xl inline-block align-middle text-palete-1-950">گارنت شاپ</h1>
            </section>
        </>
     );
}
 
export default Header;