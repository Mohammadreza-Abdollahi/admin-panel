import CategoryDialog from "./CategoryDialog";
import { openCloseDialog, setEditId } from "../../redux/category/categorySlice";
import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { useEffect, useState } from "react";
import { deleteCategoryService, getCategoriesService } from "../../services/categoryServices";
import { Alert, Confirm } from "../../utils/alert";
import ShowInMenu from "./ShowInMenu";
import TableSkeleton from "../../components/loadings/TableSkeleton";
import CreatedAt from "./CreatedAt";
import { Outlet, useParams } from "react-router-dom";
import TableActions from "./TableActions";
import { categoryDataInfo } from "./core";

const Category = () => {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const [forceRender , setForceRender] = useState(0);
  const params = useParams();
  const optionalCols = [
    {
      title: 'زمان ایجاد',
      elements: (data)=><CreatedAt data={data}/>
    },
    {
      title: 'نمایش در منو',
      elements: (data)=><ShowInMenu data={data}/>
    },
    {
      title: 'عملیات',
      elements: (data)=><TableActions data={data} setEditId={setEditId} handleDeleteCategory={handleDeleteCategory}/>
    }
  ]
  const handleGetCategories = async ()=>{
    setLoading(true)
    try{
      const res = await getCategoriesService(params.categoryId);
      if(res.status === 200){
        setData(res.data.data);
      }else{
        Alert('error','دسته بندی ها درافت نشدند!')
      }
    }catch(error){
      Alert('error','خطایی رخ داده')
    }finally{
      setLoading(false)
    }
  }
  const handleDeleteCategory = async (data)=>{
    const confirmRes = (await Confirm('حذف دسته بندی!',`آیا از حذف دسته بندی "${data.title}" اطمینان دارید؟`,'warning','حذف دسته','لغو'));
    if(confirmRes){
      try{
        const res = await deleteCategoryService(data.id);
        if(res.status === 200){
          setForceRender(prev=>prev + 1);
          Alert('success',`دسته ${data.title} با موفقیت حذف شد.`);
        };
      }catch(error){
        Alert('error','خطایی رخ داده');
      }
    }
  };
  useEffect(()=>{
    document.title = 'پنل مدیریت | دسته بندی ها';
    handleGetCategories();
  },[params , forceRender])
  return (
    <>
      <ModalContainer>  
        <CategoryDialog setForceRender={setForceRender}/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت دسته بندی محصولات</b>
      </h1>
      {
        <Outlet/>
      }
      <section className="transition-all duration-1000">
        {
          !loading ? (
            <PaginationTable data={data} dataInfo={categoryDataInfo} actionCol={optionalCols} rowInPage={10} searchable={true} dialogOpenner={openCloseDialog} searchParam={{title: 'title' , placeholder: "دسته بندی مورد نظر را جستجو کنید..."}}/>
          ) : (
            <TableSkeleton/>
          )
        }
      </section>
    </>
  );
};

export default Category;
