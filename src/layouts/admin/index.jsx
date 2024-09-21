import Aside from "./sidebar/Sidebar";
import Header from "./header/Header";
import '../../assets/css/content.css'
import Dashboard from "../../pages/dashboard/Dashboard";
import Category from "../../pages/category/Category";
import Product from "../../pages/product/Product";
import { Route, Routes } from "react-router-dom";
import Colors from "../../pages/colors/Colors";
import Guaranties from "../../pages/guaranties/Guaranties";

const IndexAdmin = () => {
    return ( 
        <>
            <Header/>
            <Aside/>
            <section className="my-bg pt-20 mr-24 pr-3 pl-3">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/category" element={<Category/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/colors" element={<Colors/>}/>
                    <Route path="/guaranties" element={<Guaranties/>}/>
                </Routes>
            </section>
        </>
     );
}
 
export default IndexAdmin;