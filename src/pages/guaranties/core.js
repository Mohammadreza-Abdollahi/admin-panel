import * as Yup from "yup";
import { createGuarantyService } from "../../services/guarantiesService.";
import { Alert } from "../../utils/alert";
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
  dispatch
) => {
  console.log(values);
  console.log(actions);
  setLoading(true);
  try {
    const res = await createGuarantyService(values);
    if (res.status === 201) {
      console.log(res);
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
  } catch (error) {
    Alert("error", error);
    setLoading(false);
    actions.resetForm();
    actions.setSubmitting(false);
  }
};
