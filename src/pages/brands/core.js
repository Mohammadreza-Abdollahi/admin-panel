import * as Yup from "yup";
import { createBrandService, updateBrandService } from "../../services/brandsService";
import { Alert } from "../../utils/alert";
import { openCloseDialog } from "../../redux/brands/brandsSlice";

export const dataInfo = [
  { field: "id", title: "#" },
  { field: "original_name", title: "عنوان برند" },
  { field: "persian_name", title: "عنوان فارسی برند" },
  { field: "descriptions", title: "توضیحات" },
];
export const initialValues = {
  original_name: "",
  persian_name: "",
  descriptions: "",
  logo: null,
};
export const validationSchema = Yup.object({
  original_name: Yup.string().required("نام برند نمیتواند خالی باشد!"),
  persian_name: Yup.string()
                   .required('عنوان ویژگی نمیتواند خالی باشد!')
                   .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  descriptions: Yup.string()
                   .required('عنوان ویژگی نمیتواند خالی باشد!')
                   .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  // logo: Yup.mixed()
  //          .test('filesize' , 'حجم فایل نمیتواند بیشتر از 50 مگابایت باشد!' , (value)=> !value ? true : value.size <= (50 * 1024))
  //          .test('fileformat' , 'فرمت فایل باید Jpeg باشد!' , (value)=> !value ? true : value.type === 'image/jpeg'),
});
export const onSubmit = async (
  values,
  actions,
  setLoading,
  setData,
  dispatch,
  editId
) => {
  setLoading(true);
  try {
    if(editId){
      const res = await updateBrandService(editId , values);
      console.log(res);
      if(res.status === 200){
        Alert('success' , `برند ${res.data.data.original_name} ویرایش شد!`)
        setData(prev=>{
          let newData = [...prev]
          let index = newData.findIndex(item=>item.id === editId);
          newData[index] = res.data.data;
          console.log(newData);
          return newData;
        });
        setLoading(false);
        dispatch(openCloseDialog());
        actions.resetForm();
        actions.setSubmitting(false);
      }else{
        Alert('error' , 'ویرایش انجام نشد!')
        setLoading(false);
        dispatch(openCloseDialog());
        actions.resetForm();
        actions.setSubmitting(false);
      }
    }else{
      const res = await createBrandService(values);
      if (res.status === 201) {
        setData((prev) => [...prev, res.data.data]);
        Alert("success", `برند ${values.persian_name} با موفقیت افزوده شد!`);
        setLoading(false);
        dispatch(openCloseDialog());
        actions.resetForm();
        actions.setSubmitting(false);
      } else {
        Alert("error", "برند ساخته نشد!");
      }
    }
  } catch (error) {
    Alert("error", error);
  }
};
