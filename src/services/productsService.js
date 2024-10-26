import httpService from "./httpService";

export const getProductsService = async (page , countOnPage , search)=>{
    return await httpService(
        `/admin/products?page=${page}&count=${countOnPage}&searchChar=${search}`,
        'get'
    )
};
export const deleteProductService = async (id)=>{
    return await httpService(
        `/admin/products/${id}`,
        'delete'
    )
};