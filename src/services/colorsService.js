import httpService from "./httpService";

export const getColorsService = async ()=>{
    return await httpService(
        '/admin/colors',
        'get'
    )
};