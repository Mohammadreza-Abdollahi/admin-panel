import httpService from "./httpService";

export const getProductsService = async (page , count , search)=>{
    return await httpService(
        `/admin/products?page=${page}&count=${count}&searchChar=${search}`,
        'get'
    )
};