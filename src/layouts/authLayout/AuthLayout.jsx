import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useIsLogin } from "../../hook/authHook";
import Loading from "../../components/Loading";

const AuthLayout = () => {
    const [loading , isLogin] = useIsLogin();
    return ( 
        <>  
            {
                loading ? (
                    <Loading/>
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