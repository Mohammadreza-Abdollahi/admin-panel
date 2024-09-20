import CategoryDialog from "./CategoryDialog";
import { openClose } from "../../redux/category/categoryDialog";
import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { data, dataInfo } from "../../mock/categoryData";
import { Tooltip } from "@mui/material";

const actionsColumn = {
  title: 'عملیات',
  elements: (id)=>senElements(id)
}
const senElements = (id)=>{
  return(
    <>
      <Tooltip arrow placement="top" title={<><span className="text-base">زیرمجموعه</span></>}><i className="fa-solid fa-share-nodes text-xl text-blue-500 hover:bg-blue-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش دسته</span></>}><i className="fa-solid fa-edit text-xl text-yellow-500 hover:bg-yellow-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">افزودن ویژگی</span></>}><i className="fa-solid fa-plus text-xl text-green-600 hover:bg-green-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">حذف دسته</span></>}><i className="fa-solid fa-trash text-xl text-red-500 hover:bg-red-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
    </>
  )
}

const Category = () => {
  
  return (
    <>
      <ModalContainer>
        <CategoryDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت دسته بندی محصولات</b>
      </h1>
      <section className="transition-all duration-1000">
        <PaginationTable data={data} dataInfo={dataInfo} actionCol={actionsColumn} rowInPage={10} searchable={true} dialogOpenner={openClose}/>
      </section>
    </>
  );
};

export default Category;
