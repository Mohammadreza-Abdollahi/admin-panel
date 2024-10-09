import * as Yup from 'yup';
import { openCloseDialog } from '../../redux/category/categorySlice';
import { createCategoryService, updateCategoryService } from '../../services/categoryServices';
import { Alert } from '../../utils/alert';
import { createAttributeService, editAttributeService } from '../../services/attributesService';
// ----------Category----------
export const categoryDataInfo = [
    { field: 'id' , title: '#' },
    { field: 'title' , title: 'عنوان' },
    { field: 'parent_id' , title: 'شناسه والد' },
];
// ----------Category Dialog----------
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
// ----------Attributes----------
export const attributesDataInfo = [
    { field: 'id' , title: '#' },
    { field: 'title' , title: 'عنوان' },
    { field: 'unit' , title: 'واحد' },
    { field: 'category_id' , title: 'شناسه والد' },
];
export const attributesInitialValues = {
  title: '',
  unit: '',
  in_filter: false,
};
export const attributesValidationSchema = Yup.object({
  title: Yup.string()
            .required('عنوان ویژگی نمیتواند خالی باشد!')
            .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  unit: Yup.string()
           .required('واحد ویژگی نمیتواند خالی باشد!')
           .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  in_filter: Yup.boolean()
});
export const attributesOnSubmit = async (values , actions , setData , state , setLoading , attributeToEdit , setAttributeToEdit)=>{
  setLoading(true);
  try{
    values = {
      ...values,
      in_filter: values.in_filter ? 1 : 0
    };
    console.log(values);
    if(attributeToEdit){
      const res = await editAttributeService(attributeToEdit.id , values);
      console.log(res);
      if(res.status === 200){
        setData(prev=>{
          const newData = [...prev];
          const index = newData.findIndex(d=> d.id === attributeToEdit.id);
          newData[index] = res.data.data;
          return newData;
        })
        Alert('success' , "ویژگی با موفقیت ویرایش شد!");
        setAttributeToEdit(null);
        setLoading(false);
        console.log(values);
        console.log(attributeToEdit.id);
        console.log(res);
      }
    }else{
      const res = await createAttributeService(state.id , values);
      if(res.status === 201){
        console.log(res);
        Alert('success' , "ویژگی با موفقیت ایجاد شد!");
        setData(prev=>[...prev , res.data.data]);
        setLoading(false);
        actions.resetForm();
        actions.setSubmitting(false);
      }else{
        Alert('error' , "افزودن ویژگی ناموفق بود!");
        setLoading(false)
        actions.setSubmitting(false);
      }
    }
  }catch(error){
    Alert('success' , error);
    actions.setSubmitting(false);
    setLoading(false)
  }
};