import httpService from "./httpService"

export const getBrandsService = async ()=>{
    return await httpService(
        '/admin/brands',
        'get'
    )
};
export const getBrandByIdService = async (id)=>{
    return await httpService(
        `/admin/brands/${id}`,
        'get'
    )
};
export const createBrandService = async (data)=>{
    return await httpService(
        '/admin/brands',
        'post',
        data
    )
};
export const updateBrandService = async (id , data)=>{
    return await httpService(
        `/admin/brands/${id}`,
        'post',
        data
    )
};