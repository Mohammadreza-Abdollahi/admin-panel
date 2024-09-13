import Aside from "./sidebar/sidebar";
import Header from "./header/header";
import '../../assets/css/content.css'
import Dashboard from "../../pages/dashboard/dashboard";

const IndexAdmin = () => {
    return ( 
        <>
            <Header/>
            <Aside/>
            <section className="my-bg pt-20 mr-24 pr-3 pl-3">
                <Dashboard/>
            </section>
        </>
     );
}
 
export default IndexAdmin;