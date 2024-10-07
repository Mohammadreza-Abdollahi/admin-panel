import { useEffect, useState } from "react";
import Loading from "../../components/loadings/Loading";
import { Navigate } from "react-router-dom";
import { Alert } from "../../utils/alert";
import { logoutService } from "../../services/authService";

const Logout = () => {
    const [loading , setLoading] = useState(true);
    const handleLogout = async ()=>{
        try{
            const res = await logoutService();
            if(res.status === 200){
                localStorage.removeItem('loginToken');
                setLoading(false);
                Alert('success' , res.data.message);
            }
        }catch(error){
            Alert('error' , error);
        }   
    }
    useEffect(()=>{
        const loginToken = JSON.parse(localStorage.getItem('loginToken'));
        if(loginToken){
            handleLogout();
        }
    },[])
    return ( 
        <>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <Navigate to={'/auth/login'}/>
                )
            }
        </>
     );
}
 
export default Logout;