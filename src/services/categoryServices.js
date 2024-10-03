import httpService from "./httpService"

export const getCategoriesService = async (id = null)=>{
    return await httpService(
        `/admin/categories${id ? `?paren=${id}` : ''}`,
        'get'
    );
};