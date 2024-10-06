import axios from "axios"
import Config from './config.json'

const httpService = async (url , method , data = null)=>{
    const loginToken = JSON.parse(localStorage.getItem('loginToken'));
    return await axios({
        url: Config.onlineUrl + url,
        method,
        data,
        headers: {
            Authorization: loginToken ? `Bearer ${loginToken.token}` : null,
            "Content-Type": 'application/json'
        },
    });
};
export default httpService;