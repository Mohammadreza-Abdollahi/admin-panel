import httpService from "./httpService";

export const getColorsService = async ()=>{
    return await httpService(
        '/admin/colors',
        'get'
    )
};
export const createColorService = async (data)=>{
    return await httpService(
        '/admin/colors',
        'post',
        data
    );
};
export const updateColorService = async (id,data)=>{
    return await httpService(
        `/admin/colors/${id}`,
        'put',
        data
    );
};
export const deleteColorService = async (id)=>{
    return await httpService(
        `/admin/colors/${id}`,
        'delete',
    );
};