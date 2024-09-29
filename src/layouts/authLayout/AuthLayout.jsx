import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useIsLogin } from "../../hook/authHook";

const AuthLayout = () => {
    const [loading , isLogin] = useIsLogin();
    return ( 
        <>  
            {
                loading ? (
                    <h1>Loading</h1>
                ) : isLogin ? (
                    <Navigate to={'/'}/>
                ) : (
                    <Routes>
                        <Route path="/auth/login" element={<Login/>}/>
                    </Routes>
                )
            }
        </>
    );
}
 
export default AuthLayout;