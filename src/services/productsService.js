import { convertDataToFormData } from "../utils/convertDataToFormData";
import httpService from "./httpService";

export const getProductsService = async (page , countOnPage , search)=>{
    return await httpService(
        `/admin/products?page=${page}&count=${countOnPage}&searchChar=${search}`,
        'get'
    )
};
export const addProductService = async (data)=>{
    return await httpService(
        `/admin/products`,
        'post',
        data.image ? convertDataToFormData(data) : data
    )
};
export const updateProductService = async (id,data)=>{
    return await httpService(
        `/admin/products/${id}`,
        'put',
        data
    )
};
export const deleteProductService = async (id)=>{
    return await httpService(
        `/admin/products/${id}`,
        'delete'
    )
};