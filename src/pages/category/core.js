import * as Yup from 'yup';
import { openCloseDialog } from '../../redux/category/categorySlice';
import { createCategoryService, updateCategoryService } from '../../services/categoryServices';
import { Alert } from '../../utils/alert';
export const categoryDataInfo = [
    { field: 'id' , title: '#' },
    { field: 'title' , title: 'عنوان' },
    { field: 'parent_id' , title: 'شناسه والد' },
];
export const initialValues = {
    parent_id: '',
    title: '',
    descriptions: '',
    image: '',
    is_active: false,
    show_in_menu: false,
};
export const validationSchema = Yup.object({
    parent_id: Yup.string(),
    title: Yup.string()
              .required('عنوان نمیتواند خالی باشد!')
              .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
    descriptions: Yup.string()
                     .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
    image: Yup.mixed()
    .test('filesize' , 'حجم فایل نمیتواند بیشتر از 50 مگابایت باشد!' , (value)=> !value ? true : value.size <= (50 * 1024))
    .test('fileformat' , 'فرمت فایل باید Jpeg باشد!' , (value)=> !value ? true : value.type === 'image/jpeg'),
    is_active: Yup.boolean(),
    show_in_menu: Yup.boolean(),
})
export const onSubmit = async (values , actions , setForceRender , dispatch , editId)=>{
    try{
      values = {
        ...values,
        is_active: values.is_active ? 1 : 0,
        show_in_menu: values.show_in_menu ? 1 : 0,
      };
      if(editId){
        const res = await updateCategoryService(editId , values);
        if(res.status === 200)
          Alert('success' , "دسته با موفقیت ویرایش شد!");
          dispatch(openCloseDialog());
          actions.resetForm();
          actions.setSubmitting(false);
          setForceRender(prev=>prev + 1);
      }else{
        const res = await createCategoryService(values);
        console.log(res);
        if(res.status === 201){
          Alert('success' , "دسته با موفقیت ایجاد شد!");
          dispatch(openCloseDialog());
          actions.resetForm();
          actions.setSubmitting(false);
          setForceRender(prev=>prev + 1);
        }
      }
    }catch(error){
      Alert('error' , 'مشکلی رخ داده است!');
    }
    
}