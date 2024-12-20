import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { Tooltip } from "@mui/material";
import { data, dataInfo } from "../../mock/cartsData";
import CartsDialog from "./CartsDialog";
import { cartsOpenClose } from "../../redux/carts/cartsDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const actionsColumn = {
  title: 'عملیات',
  elements: (id)=>sendElements(id)
}
const sendElements = (id)=>{
  return(
    <>
      <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش</span></>}><FontAwesomeIcon icon={faEdit} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">حذف سبد</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
    </>
  )
}

const Carts = () => {  
  useEffect(()=>{
    document.title = 'پنل مدیریت | سبد ها'
  },[])
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
