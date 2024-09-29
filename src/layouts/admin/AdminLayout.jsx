import Aside from "./sidebar/Sidebar";
import Header from "./header/Header";
import Content from "../../pages/Content";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hook/authHook";
import { useState } from "react";

const IndexAdmin = () => {
    const [loading , isLogin] = useIsLogin();
    // const [isLogin , setIsLogin] = useState(true);
    // const [loading , setLoading] = useState(true);
    return ( 
        <>  
            {
                loading ? (
                    <h1 className="text-2xl place-content-center">loading</h1>
                ) : isLogin ? (
                    <section>
                        <Header/>
                        <Aside/>
                        <Content/>
                    </section>
                ) : (
                    <Navigate to={'/auth/login'}/>
                )
            }
        </>
     );
}
 
export default IndexAdmin;