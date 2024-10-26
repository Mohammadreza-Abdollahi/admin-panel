import LikesCount from "./LikesCount";
import Actions from "./Actions";
import { deleteProductService, getProductsService } from "../../services/productsService";
import { Alert, Confirm } from "../../utils/alert";

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
export const handleDeleteProduct = async (data , setData , setLoading)=>{
  try{
    const confirm = await Confirm('حذف محصول!',`ایا از حذف محصول ${data.title} اطمینان دارید؟`,'warning','حذف محصول','لغو');
    if(confirm){
      setLoading(true);
      const res = await deleteProductService(data.id);
      if(res.status === 200){
        setData(prev=>[...prev].filter(item=>item.id !== data.id));
        Alert('success',`محصول ${data.title} با موفقیت حذف شد!`);
        setLoading(false);
      }else{
        Alert('error','محصول حذف نشد!');
        setLoading(false);
      }
    }
  }catch(error){
    Alert('error',error);
    setLoading(false);
  }
};