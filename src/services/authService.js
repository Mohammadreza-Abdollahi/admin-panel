import httpService from "./httpService"

export const checkLoginService = async ()=>{
    return httpService(
        '/auth/user',
        'get'
    );
};
export const loginService = async (values)=>{
    return httpService(
        '/auth/login',
        'post',
        {...values , remember: values.remember ? 1 : 0}
    );
};
export const logoutService = async ()=>{
    return await httpService(
        '/auth/logout',
        'get',
    );
};