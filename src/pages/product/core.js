import {
  deleteProductService,
  getProductsService,
} from "../../services/productsService";
import * as Yup from "yup";
import { Alert, Confirm } from "../../utils/alert";
import { getCategoriesService } from "../../services/categoryServices";

export const initialValues = {
  category_ids: "",
  title: "",
  price: "",
  weight: "",
  brand_id: "",
  color_ids: "",
  guarantee_ids: "",
  descriptions: "",
  short_descriptions: "",
  cart_descriptions: "",
  image: "",
  alt_image: "",
  keywords: "",
  stock: "",
  discount: "",
};
export const validationSchema = Yup.object({
  category_ids: Yup.string()
    .required("دسته بندی نمیتواند خالی باشد!")
    .matches(/^[0-9\s-]+$/, "فقط میتوان ازاعداد و خط تیره استفاده کرد!"),
  title: Yup.string()
    .required("عنوان نمیتواند خالی باشد!")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "تنها میتوان از حروف و اعداد استفاده کرذ!!"
    ),
  price: Yup.number().required("قیمت نمیتواند خالی باشد!"),
  weight: Yup.number(),
  brand_id: Yup.number(),
  color_ids: Yup.string().matches(
    /^[0-9\s-]+$/,
    "فقط میتوان ازاعداد و خط تیره استفاده کرد!"
  ),
  guarantee_ids: Yup.string().matches(
    /^[0-9\s-]+$/,
    "فقط میتوان ازاعداد و خط تیره استفاده کرد!"
  ),
  descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "تنها میتوان از حروف و اعداد استفاده کرذ!!"
  ),
  short_descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "تنها میتوان از حروف و اعداد استفاده کرذ!!"
  ),
  cart_descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "تنها میتوان از حروف و اعداد استفاده کرذ!!"
  ),
  image: Yup.mixed()
    .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
      !value ? true : value.size <= 500 * 1024
    )
    .test("format", "فرمت فایل باید jpg باشد", (value) =>
      !value ? true : value.type === "image/jpeg" || value.type === "image/png"
    ),
  alt_image: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
  keywords: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
  stock: Yup.number(),
  discount: Yup.number(),
});
export const onSubmit = async (values, actions) => {
  console.log(values);
};
export const handleGetProducts = async (
  setData,
  setLoading,
  setPageCount,
  currentPage,
  itemInPage,
  searchChar
) => {
  setLoading(true);
  try {
    const res = await getProductsService(currentPage, itemInPage, searchChar);
    if (res.status === 200) {
      setData(res.data.data);
      setPageCount(Math.ceil(res.data.total / itemInPage));
      console.log(res);
      setLoading(false);
    } else {
      Alert("error", "محصولات دریافت نشدند!");
      setLoading(false);
    }
  } catch (error) {
    Alert("error", error);
    setLoading(false);
  }
};
export const handleDeleteProduct = async (data, setData, setLoading) => {
  try {
    const confirm = await Confirm(
      "حذف محصول!",
      `ایا از حذف محصول ${data.title} اطمینان دارید؟`,
      "warning",
      "حذف محصول",
      "لغو"
    );
    if (confirm) {
      setLoading(true);
      const res = await deleteProductService(data.id);
      if (res.status === 200) {
        setData((prev) => [...prev].filter((item) => item.id !== data.id));
        Alert("success", `محصول ${data.title} با موفقیت حذف شد!`);
        setLoading(false);
      } else {
        Alert("error", "محصول حذف نشد!");
        setLoading(false);
      }
    }
  } catch (error) {
    Alert("error", error);
    setLoading(false);
  }
};
//---------------ADD PRODUCTS---------------
export const handleGetParentCategories = async (setParentCategores , setLoading) => {
  setLoading(true);
  try {
    const res = await getCategoriesService();
    if (res.status === 200) {
      setParentCategores(
        res.data.data.map((item) => {
          return { id: item.id, title: item.title };
        })
      );
      setLoading(false);
    } else {
      Alert("error", "دسته بندی ها دریافت نشدند!");
      setLoading(false);
    }
  } catch (error) {
    Alert("error", error);
    setLoading(false);
  }
};
export const handleChangeParentCategories = async (id, formik , setCategores) => {
  try {
    if (id > 0) {
      const res = await getCategoriesService(id);
      if (res.status === 200) {
        setCategores(
          res.data.data.map((item) => {
            return { id: item.id, title: item.title };
          })
        );
      } else {
        Alert("error", "دسته بندی ها دریافت نشدند!");
      }
    } else {
      setCategores(null);
    }
  } catch (error) {
    Alert("error", "دسته بندی ها دریافت نشدند!");
  }
};
export const handleAddSelectedCategory = (id, formik , setSelectedCategories , categories) => {
  setSelectedCategories((prev) => {
    if (prev.findIndex((item) => item.id == id) == -1) {
      const newData = [
        ...prev,
        categories.filter((item) => item.id == id)[0],
      ];
      const selectedIds = newData.map((item) => item.id);
      formik.setFieldValue("category_ids", selectedIds.join("-"));
      return newData;
    } else {
      return prev;
    }
  });
};