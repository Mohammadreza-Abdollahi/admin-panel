import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Category from "./category/Category";
import Product from "./product/Product";
import Colors from "./colors/Colors";
import Guaranties from "./guaranties/Guaranties";
import Brands from "./brands/Brands";
import Discounts from "./discounts/Discounts";
import Carts from "./carts/Carts";
import Orders from "./orders/Orders";
import Deliveries from "./deliveries/Deliveries";
import Users from "./users/Users";
import Roles from "./roles/Roles";
import Permissions from "./permissions/Permissions";
import Questions from "./questions/Questions";
import Comments from "./comments/Comments";
import Logout from "../layouts/authLayout/Logout";

const Content = () => {
    return ( 
        <>
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
                    <Route path="/permissions" element={<Permissions/>}/>
                    <Route path="/questions" element={<Questions/>}/>
                    <Route path="/comments" element={<Comments/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
            </section>
        </>
     );
}
 
export default Content;