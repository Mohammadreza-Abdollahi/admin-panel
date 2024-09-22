import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { Tooltip } from "@mui/material";
import { data, dataInfo } from "../../mock/cartsData";
import CartsDialog from "./CartsDialog";
import { cartsOpenClose } from "../../redux/carts/cartsDialog";

const actionsColumn = {
  title: 'عملیات',
  elements: (id)=>sendElements(id)
}
const sendElements = (id)=>{
  // console.log(id);
  return(
    <>
      <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش</span></>}><i className="fa-solid fa-edit text-xl text-yellow-500 hover:bg-yellow-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">حذف سبد</span></>}><i className="fa-solid fa-trash text-xl text-red-500 hover:bg-red-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
    </>
  )
}

const Carts = () => {  
  return (
    <>
      <ModalContainer>
        <CartsDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت سبد خرید</b>
      </h1>
      <section>
        <PaginationTable data={data} dataInfo={dataInfo} actionCol={actionsColumn} rowInPage={10} searchable={true} dialogOpenner={cartsOpenClose} searchParam={'buyerName'}/>
      </section>
    </>
  );
};

export default Carts;
