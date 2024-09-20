import Aside from "./sidebar/Sidebar";
import Header from "./header/Header";
import '../../assets/css/content.css'
import Dashboard from "../../pages/dashboard/Dashboard";
import Category from "../../pages/category/Category";
import Product from "../../pages/product/Product";

const IndexAdmin = () => {
    return ( 
        <>
            <Header/>
            <Aside/>
            <section className="my-bg pt-20 mr-24 pr-3 pl-3">
                <Dashboard/>
                {/* <Category/> */}
                {/* <Product/> */}
            </section>
        </>
     );
}
 
export default IndexAdmin;