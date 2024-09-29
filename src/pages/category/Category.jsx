import CategoryDialog from "./CategoryDialog";
import { addAttributeOpenClose, openClose } from "../../redux/category/categoryDialog";
import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { data, dataInfo } from "../../mock/categoryData";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddCategoryAttributes from "./AddCategoryAttributes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes , faEdit , faPlus , faTrash } from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  const dispatch = useDispatch();
  const actionsColumn = {
    title: 'عملیات',
    elements: (id)=>senElements(id)
  }
  const senElements = (id)=>{
    return(
      <>
        <Tooltip arrow placement="top" title={<><span className="text-base">زیرمجموعه</span></>}><FontAwesomeIcon icon={faShareNodes} className="text-xl text-blue-500 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
        <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش دسته</span></>}><FontAwesomeIcon icon={faEdit} onClick={()=>dispatch(openClose())} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
        <Tooltip arrow placement="top" title={<><span className="text-base">افزودن ویژگی</span></>}><FontAwesomeIcon icon={faPlus} onClick={()=>dispatch(addAttributeOpenClose())} className="text-xl text-green-500 hover:bg-green-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
        <Tooltip arrow placement="top" title={<><span className="text-base">حذف دسته</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
      </>
    )
  }
  return (
    <>
      <ModalContainer>  
        <CategoryDialog/>
        <AddCategoryAttributes/>
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
