import LikesCount from "./LikesCount";
import Actions from "./Actions";
import { getProductsService } from "../../services/productsService";
import { Alert } from "../../utils/alert";

export const dataInfo = [
  { field: "id", title: "#" },
  {
    field: null,
    title: "گروه محصول",
    elements: (data) => data.categories[0].title,
  },
  { field: "title", title: "عنوان" },
  { field: "price", title: "قیمت" },
  { field: "view_count", title: "موجودی" },
  {
    field: null,
    title: "تعداد پسند ها",
    elements: (data) => <LikesCount data={data} />,
  },
  {
    field: null,
    title: "گروه محصول",
    elements: (data) => (
      <span
        className={`text-lg ${
          data.is_active ? "text-green-500" : "text-red-500"
        }`}
      >
        {data.is_active ? "فعال" : "غیرفعال"}
      </span>
    ),
  },
  {
    field: null,
    title: "عملیات",
    elements: (data) => <Actions data={data} />,
  },
];
export const handleGetProducts = async (setData , setLoading , setPageCount , currentPage , itemInPage , searchChar) => {
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