import httpService from "./httpService";

export const getAttributesService = async (id)=>{
    return httpService(
        `/admin/categories/${id}/attributes`,
        'get'
    );
};
export const createAttributeService = async (id , data)=>{
    return httpService(
        `/admin/categories/${id}/attributes`,
        'post',
        data
    );
};