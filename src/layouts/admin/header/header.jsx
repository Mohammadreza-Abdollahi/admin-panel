import Logo from '../../../assets/img/logo.png'
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = () => {
        return ( 
        <>
            <section className="fixed z-50 pr-24 w-full inline-block py-2  px-4 bg-gray-500 border-b-2 border-palete-2-400-1 shadow-lg flex justify-between items-center">
                <HeaderRight logo={Logo}/> 
                <HeaderLeft/>
            </section>
        </>
     );
}
 
export default Header;