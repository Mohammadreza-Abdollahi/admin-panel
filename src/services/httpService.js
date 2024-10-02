import axios from "axios"
import Config from './config.json'

const httpService = async (url , method , params = null)=>{
    const loginToken = JSON.parse(localStorage.getItem('loginToken'));
    return await axios({
        url: Config.onlineUrl + url,
        method,
        params,
        headers: {
            Authorization: loginToken ? `Bearer ${loginToken.token}` : null,
            "Content-Type": 'application/json'
        }
    });
};
export default httpService;