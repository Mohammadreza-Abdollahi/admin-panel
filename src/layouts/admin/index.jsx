import Aside from "./sidebar/Sidebar";
import Header from "./header/Header";
import '../../assets/css/content.css'
import Dashboard from "../../pages/dashboard/Dashboard";
import Category from "../../pages/category/Category";
import Product from "../../pages/product/Product";
import { Route, Routes } from "react-router-dom";
import Colors from "../../pages/colors/Colors";
import Guaranties from "../../pages/guaranties/Guaranties";
import Brands from "../../pages/brands/Brands";
import Discounts from "../../pages/discounts/Discounts";
import Carts from "../../pages/carts/Carts";
import Orders from "../../pages/orders/Orders";
import Deliveries from "../../pages/deliveries/Deliveries";
import Users from "../../pages/users/Users";
import Roles from "../../pages/roles/Roles";

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
                    <Route path="/brands" element={<Brands/>}/>
                    <Route path="/discounts" element={<Discounts/>}/>
                    <Route path="/carts" element={<Carts/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/deliveries" element={<Deliveries/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/roles" element={<Roles/>}/>
                </Routes>
            </section>
        </>
     );
}
 
export default IndexAdmin;