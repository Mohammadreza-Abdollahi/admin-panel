import CategoryDialog from "./CategoryDialog";
import { addAttributeOpenClose, openClose } from "../../redux/category/categoryDialog";
import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import AddCategoryAttributes from "./AddCategoryAttributes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes , faEdit , faPlus , faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/categoryServices";
import { Alert } from "../../utils/alert";
import ShowInMenu from "./ShowInMenu";
import TableSkeleton from "../../components/TableSkeleton";
import CreatedAt from "./CreatedAt";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Category = () => {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
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
      elements: (data)=>tableActions(data)
    }
  ]
  const dataInfo = [
    { field: 'id' , title: '#' },
    { field: 'title' , title: 'عنوان' },
    { field: 'parent_id' , title: 'شناسه والد' },
  ];
  const tableActions = (data)=>{
    return(
      <>
        {
          !params.categoryId ? (
            <Tooltip arrow placement="top" title={<><span className="text-base">زیرمجموعه</span></>}><FontAwesomeIcon icon={faShareNodes} onClick={()=>navigate(`/category/${data.id}` , {state: data})} className="text-xl text-blue-500 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
          ) : null
        }
        <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش دسته</span></>}><FontAwesomeIcon icon={faEdit} onClick={()=>dispatch(openClose())} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
        <Tooltip arrow placement="top" title={<><span className="text-base">افزودن ویژگی</span></>}><FontAwesomeIcon icon={faPlus} onClick={()=>dispatch(addAttributeOpenClose())} className="text-xl text-green-500 hover:bg-green-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
        <Tooltip arrow placement="top" title={<><span className="text-base">حذف دسته</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
      </>
    )
  }
  const handleGetCategories = async ()=>{
    try{
      const res = await getCategoriesService(params.categoryId);
      if(res.status === 200){
        setData(res.data.data);
        setLoading(false)
      }else{
        Alert('error','دسته بندی ها درافت نشدند!')
      }
    }catch(error){
      Alert('error','خطایی در سمت سرور رخ')
    }
  }
  useEffect(()=>{
    document.title = 'پنل مدیریت | دسته بندی ها';
    handleGetCategories();
},[params])
  return (
    <>
      <ModalContainer>  
        <CategoryDialog/>
        <AddCategoryAttributes/>
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
            <PaginationTable data={data} dataInfo={dataInfo} actionCol={optionalCols} rowInPage={10} searchable={true} dialogOpenner={openClose}/>
          ) : (
            <TableSkeleton/>
          )
        }
      </section>
    </>
  );
};

export default Category;
