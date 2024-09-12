import Aside from "./sidebar/sidebar";
import Header from "./header/header";
import '../../assets/css/content.css'

const IndexAdmin = () => {
    return ( 
        <>
            <Header/>
            <Aside/>
            <section className="my-bg pt-20 mr-24 pr-3">
                <h1 className="text-3xl">سلام دوستان</h1>
            </section>
        </>
     );
}
 
export default IndexAdmin;