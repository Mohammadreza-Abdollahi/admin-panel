import httpService from "./httpService"

export const getCategoriesService = async (id = null)=>{
    return await httpService(
        `/admin/categories${id ? `?parent=${id}` : ''}`,
        'get'
    );
};
export const getCategoryByIdService = async (id)=>{
    return await httpService(
        `/admin/categories/${id}`,
        'get'
    );
};
export const createCategoryService = async (data)=>{
    if(data.image){
        let formData = new FormData();
        formData.append('parent_id' , data.parent_id);
        formData.append('title' , data.title);
        formData.append('descriptions' , data.descriptions);
        // formData.append('image' , data.image);
        formData.append('is_active' , data.is_active);
        formData.append('show_in_menu' , data.show_in_menu);
        data = formData;
    }
    return await httpService(
        '/admin/categories',
        'post',
        data
    );
};
export const updateCategoryService = async (id , data)=>{
    return await httpService(
        `/admin/categories/${id}`,
        'put',
        data
    )
};
export const deleteCategoryService = async (id)=>{
    return await httpService(
        `/admin/categories/${id}`,
        'delete'
    );
};