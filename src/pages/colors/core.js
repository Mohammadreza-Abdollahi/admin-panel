import { getColorsService } from "../../services/colorsService";
import { Alert } from "../../utils/alert";
import * as Yup from 'yup'

export const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "نام رنگ" },
    { field: "code", title: "کد رنگ" },
];
export const initialValues = {
    title: "",
    code: "",
};
export const validationSchema = Yup.object({
    title: Yup.string()
              .required("نام رنگ نمیتواند خالی باشد!")
              .matches(/^[\u0600-\u06FF\sa-zA-Z0-9]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
    code: Yup.string()
             .required('کد رنگی نمیتواند خالی باشد!')
             .matches(/^[a-zA-Z0-9#]+$/ , 'فرمت کد رنگی باید HEX باشد!'),
});
export const onSubmit = async (values , actions)=>{
    console.log(values);
};
export const handleGetColors = async (setData , setLoading)=>{
    setLoading(true)
    try{
        const res = await getColorsService();
        if(res.status === 200){
            setData(res.data.data)
            setLoading(false)
        }else{
            Alert('error','رنگ ها دریافت نشدند!')
            setLoading(false)
        }
    }catch(error){
        Alert('error',error)
        setLoading(false)
    }
};