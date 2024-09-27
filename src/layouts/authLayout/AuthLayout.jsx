import { Route, Routes } from "react-router-dom";
import Login from "./Login";

const AuthLayout = () => {
    return ( 
        <>
            <Routes>
                <Route path="/auth" element={<Login/>}/>
                <Route path="/auth/login" element={<Login/>}/>
            </Routes>
        </>
    );
}
 
export default AuthLayout;