import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "../../utils/alert";

const Logout = () => {
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        const loginToken = JSON.parse(localStorage.getItem('loginToken'));
        if(loginToken){
            axios.get('https://ecomadminapi.azhadev.ir/api/auth/logout' , {
                headers: {
                    Authorization: `Bearer ${loginToken.token}`
                }
            }).then(res=>{
                if(res.status === 200){
                    localStorage.removeItem('loginToken');
                    setLoading(false);
                    Alert('success' , res.data.message);
                }else{
                    Alert('error' , res.data.message);
                }
            })
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