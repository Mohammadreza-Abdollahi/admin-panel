import { useDispatch } from "react-redux";
import { addProductsAttributesOpenClose, productOpenClose } from "../../redux/product/productDialog";
import ProductDialog from "./ProductDialog";
import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { data, dataInfo } from "../../mock/productData";
import { Tooltip } from "@mui/material";
import AddProductsAttributes from "./AddProductsAttributes";
import { faImages , faEdit , faPlus , faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch();
  const actionsColumn = {
    title: 'عملیات',
    elements: (id)=>sendElements(id)
  }
  const sendElements = (id)=>{
    // console.log(id);
    return(
      <>
      <Tooltip arrow placement="top" title={<><span className="text-base">مدیریت گالری</span></>}><FontAwesomeIcon icon={faImages} className="text-xl text-blue-500 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش</span></>}><FontAwesomeIcon icon={faEdit} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">ثبت ویژگی</span></>}><FontAwesomeIcon icon={faPlus} onClick={()=>dispatch(addProductsAttributesOpenClose())} className="text-xl text-green-500 hover:bg-green-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">حذف محصول</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
    </>
    )
  }
  useEffect(()=>{
    document.title = 'پنل مدیریت | محصولات'
  },[])
  return (
    <>
      <ModalContainer>
        <ProductDialog/>
        <AddProductsAttributes/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت محصولات</b>
      </h1>
      <section>
        <PaginationTable data={data} dataInfo={dataInfo} actionCol={actionsColumn} rowInPage={10} searchable={true} dialogOpenner={productOpenClose}/>
      </section>
    </>
  );
};

export default Product;
