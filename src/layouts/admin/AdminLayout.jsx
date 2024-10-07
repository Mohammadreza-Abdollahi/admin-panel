import Aside from "./sidebar/Sidebar";
import Header from "./header/Header";
import Content from "../../pages/Content";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hook/authHook";
import Loading from "../../components/loadings/Loading";

const IndexAdmin = () => {
    const [loading , isLogin] = useIsLogin();
    return ( 
        <>  
            {
                loading ? (
                    <Loading/>
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