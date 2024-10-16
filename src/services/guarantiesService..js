import httpService from "./httpService";

export const getGuarantiesService = async ()=>{
    return await httpService(
        '/admin/guarantees',
        'get'
    );
};