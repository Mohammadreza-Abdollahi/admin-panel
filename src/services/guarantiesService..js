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
export const updateGuarantyService = async (id , data)=>{
    return await httpService(
        `/admin/guarantees/${id}`,
        'put',
        data
    );
};
export const deleteGuarantyService = async (id)=>{
    return await httpService(
        `/admin/guarantees/${id}`,
        'delete'
    );
};