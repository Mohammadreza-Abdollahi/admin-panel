import httpService from "./httpService"

export const getBrandsService = async ()=>{
    return await httpService(
        '/admin/brands',
        'get'
    )
};