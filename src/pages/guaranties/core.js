import * as Yup from "yup";
import { createGuarantyService, deleteGuarantyService, getGuarantiesService, updateGuarantyService } from "../../services/guarantiesService.";
import { Alert, Confirm } from "../../utils/alert";
import { openCloseDialog } from "../../redux/guaranties/guarantiesSlice";

export const dataInfo = [
  { field: "id", title: "#" },
  { field: "title", title: "عنوان گارانتی" },
  { field: "descriptions", title: "توضیحات" },
];
export const lengthUnits = [
  {
    engTitle: "day",
    faTitle: "روز",
  },
  {
    engTitle: "week",
    faTitle: "هفته",
  },
  {
    engTitle: "month",
    faTitle: "ماه",
  },
  {
    engTitle: "year",
    faTitle: "سال",
  },
];
export const initialValues = {
  title: "",
  descriptions: "",
  length: 0,
  length_unit: "روز",
};
export const validationSchema = Yup.object({
  title: Yup.string()
    .required("عنوان گارانتی نمیتواند خالی باشد!")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "باید تنها از حروف و اعداد استفاده شود!"
    ),
  descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "باید تنها از حروف و اعداد استفاده شود!"
  ),
  length: Yup.number().required("زمان گارانتی نمیتواند خالی باشد!"),
  length_unit: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "باید تنها از حروف و اعداد استفاده شود!"
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
  setLoading(true);
  try {
    if(dataToEdit){
      const res = await updateGuarantyService(dataToEdit.id , values);
      if(res.status === 200){
        Alert('success',`گارانتی ${dataToEdit.title} با موفقیت ویرایش شد!`);
        setData(prev=>{
          let newData = [...prev];
          let index = newData.findIndex(item=>item.id === dataToEdit.id);
          newData[index] = res.data.data;
          return newData;
        });
        dispatch(openCloseDialog());
        actions.resetForm();
        actions.setSubmitting(false);
        setLoading(false);
        setDataToEdit(null)
        setReinitialize(null)
      }else{
        Alert('error','ویرایش گارانتی انجام نشد!');
        setDataToEdit(null)
        setReinitialize(null)
      }
    }else{
      const res = await createGuarantyService(values);
      if (res.status === 201) {
        setData((prev) => [...prev, res.data.data]);
        Alert("success", `گارانتی ${values.title} با موفقیت افزوده شد.`);
        dispatch(openCloseDialog());
        actions.resetForm();
        actions.setSubmitting(false);
        setLoading(false);
      } else {
        Alert("error", "گارانتی افزوده نشد!");
        setLoading(false);
        actions.resetForm();
        actions.setSubmitting(false);
      }
    }
  } catch (error) {
    Alert("error", error);
    setLoading(false);
    actions.resetForm();
    actions.setSubmitting(false);
    setDataToEdit(null)
    setReinitialize(null)
  }
};
export const handleGetGuaranties = async (setData,setLoading) => {
  setLoading(true);
  try {
    const res = await getGuarantiesService();
    if (res.status === 200) {
      setData(res.data.data);
      setLoading(false);
    } else {
      Alert("error", "گارانتی ها دریافت نشدند!");
    }
  } catch (error) {
    Alert('error',error)
  }
};
export const handleDeleteGuaranty = async (data , setData , setLoading)=>{
  const confirm = await Confirm('حذف گارانتی!',`ایا از حذف گارانتی ${data.title} اطمینان دارید؟`,'warning','حذف گرانتی','لغو')
  if(confirm){
    setLoading(true)
    const res = await deleteGuarantyService(data.id);
    if(res.status === 200){
      setData(prev=>[...prev].filter(item=>item.id !== data.id));
      Alert('success',`گارانتی ${data.title} با موفقیت حذف شد!`);
      setLoading(false)
    }else{
      Alert('error','گارانتی حذف نشد!')
      setLoading(false)
    }
  }
}
