import { openCloseDialog } from "../../redux/colors/colorsSlice";
import {
  createColorService,
  deleteColorService,
  getColorsService,
  updateColorService,
} from "../../services/colorsService";
import { Alert, Confirm } from "../../utils/alert";
import * as Yup from "yup";

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
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9]+$/,
      "باید تنها از حروف و اعداد استفاده شود!"
    ),
  code: Yup.string()
    .required("کد رنگی نمیتواند خالی باشد!")
    .matches(
      /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/,
      "فرمت کد رنگی باید HEX باشد!"
    ),
});
export const onSubmit = async (
  values,
  actions,
  setData,
  setLoading,
  dispatch,
  dataToEdit,
  setDataToEdit,
  setReinitialize
) => {
  console.log(values);
  setLoading(true);
  try {
    if (dataToEdit) {
      const res = await updateColorService(dataToEdit.id, values);
      if (res.status === 200) {
        setData(prev=>{
            let newData = [...prev];
            let index = newData.findIndex(item=>item.id === dataToEdit.id);
            newData[index] = res.data.data;
            return newData;
        });
        Alert("success", `رنگ ${dataToEdit.title} با موفقیت ویرایش شد.`);
        setLoading(false);
        dispatch(openCloseDialog());
    } else {
        Alert("error", "رنگ ویرایش نشد!");
        setLoading(false);
        dispatch(openCloseDialog());
      }
    } else {
      const res = await createColorService(values);
      if (res.status === 201) {
        Alert("success", `رنگ ${res.data.data.title} اضافه شد.`);
        setData((prev) => [...prev, res.data.data]);
        setLoading(false);
        actions.resetForm();
        actions.setSubmitting(false);
        dispatch(openCloseDialog());
      } else {
        Alert("error", "رنگ افزوده نشد!");
        setLoading(false);
        actions.resetForm();
        actions.setSubmitting(false);
        dispatch(openCloseDialog());
      }
    }
  } catch (error) {
    Alert("error", error);
    setLoading(false);
    actions.resetForm();
    actions.setSubmitting(false);
    dispatch(openCloseDialog());
  }
};
export const handleGetColors = async (setData, setLoading) => {
  setLoading(true);
  try {
    const res = await getColorsService();
    if (res.status === 200) {
      setData(res.data.data);
      setLoading(false);
    } else {
      Alert("error", "رنگ ها دریافت نشدند!");
      setLoading(false);
    }
  } catch (error) {
    Alert("error", error);
    setLoading(false);
  }
};
export const handleDeleteColor = async (data , setData , setLoading)=>{
  const confirm = await Confirm('حذف رنگ!',`ایا از حذف رنگ ${data.title} اطمینان دارید؟`,'warning','حذف رنگ','لغو');
  try{
    if(confirm){
      setLoading(true)
      const res = await deleteColorService(data.id);
      if(res.status === 200){
        setData(prev=>[...prev].filter(item=>item.id !== data.id));
        Alert('success',`رنگ ${data.title} با موفقیت حذف شد!`);
        setLoading(false);
      }else{
        Alert('success','رنگ حدف نشد!');
        setLoading(false);
      }
    }
  }catch(error){
    Alert('success',error);
    setLoading(false);
  }
};