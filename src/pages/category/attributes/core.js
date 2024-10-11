import * as Yup from 'yup';
import { createAttributeService, editAttributeService } from '../../../services/attributesService';
import { Alert } from '../../../utils/alert';

export const DataInfo = [
    { field: 'id' , title: '#' },
    { field: 'title' , title: 'عنوان' },
    { field: 'unit' , title: 'واحد' },
    { field: 'category_id' , title: 'شناسه والد' },
];
export const InitialValues = {
  title: '',
  unit: '',
  in_filter: false,
};
export const ValidationSchema = Yup.object({
  title: Yup.string()
            .required('عنوان ویژگی نمیتواند خالی باشد!')
            .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  unit: Yup.string()
           .required('واحد ویژگی نمیتواند خالی باشد!')
           .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  in_filter: Yup.boolean()
});
export const onSubmit = async (values , actions , setData , state , setLoading , attributeToEdit , setAttributeToEdit)=>{
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