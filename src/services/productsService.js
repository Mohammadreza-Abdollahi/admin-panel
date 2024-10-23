import httpService from "./httpService";

export const getProductsService = async (page , countOnPage , search)=>{
    return await httpService(
        `/admin/products?page=${page}&count=${countOnPage}&searchChar=${search}`,
        'get'
    )
};