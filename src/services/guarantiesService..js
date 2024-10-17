import httpService from "./httpService";

export const getGuarantiesService = async ()=>{
    return await httpService(
        '/admin/guarantees',
        'get'
    );
};
export const createGuarantyService = async (data)=>{
    return await httpService(
        '/admin/guarantees',
        'post',
        data
    )
};