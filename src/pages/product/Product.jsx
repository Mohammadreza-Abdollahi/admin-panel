import CategorySearch from "../../components/SearchBox";
import Btn from "../../components/Btn";
import { useDispatch } from "react-redux";
import { productOpenClose } from "../../redux/product/productDialog";
import ProductDialog from "./ProductDialog";
import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { data, dataInfo } from "../../mock/productData";
import { Tooltip } from "@mui/material";

const actionsColumn = {
  title: 'عملیات',
  elements: (id)=>sendElements(id)
}
const sendElements = (id)=>{
  // console.log(id);
  return(
    <>
    <Tooltip arrow placement="top" title={<><span className="text-base">مدیریت گالری</span></>}><i className="fa-regular fa-images text-xl text-blue-500 hover:bg-blue-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
    <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش</span></>}><i className="fa-solid fa-edit text-xl text-yellow-500 hover:bg-yellow-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
    <Tooltip arrow placement="top" title={<><span className="text-base">ثبت ویژگی</span></>}><i className="fa-solid fa-plus text-xl text-green-600 hover:bg-green-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
    <Tooltip arrow placement="top" title={<><span className="text-base">حذف محصول</span></>}><i className="fa-solid fa-trash text-xl text-red-500 hover:bg-red-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
  </>
  )
}

const Product = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <ModalContainer>
        <ProductDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت محصولات</b>
      </h1>
      <section className="flex justify-between items-center my-1">
        <div className="w-1/3 text-start">
          <CategorySearch
            btnTxt={"جستجو"}
            placeholder={"محصول مورد نظر را جستجو کنید..."}
          />
        </div>
        <dir className="w-1/3 text-end">
          <span onClick={()=>dispatch(productOpenClose())}><Btn btnTxt={"افزودن"}/></span>
        </dir>
      </section>
      <section>
        <PaginationTable data={data} dataInfo={dataInfo} actionCol={actionsColumn} rowInPage={8}/>
      </section>
    </>
  );
};

export default Product;
