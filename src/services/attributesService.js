import httpService from "./httpService";

export const getAttributesService = async (id)=>{
    return httpService(
        `/admin/categories/${id}/attributes`,
        'get'
    );
};