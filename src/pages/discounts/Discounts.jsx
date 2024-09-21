import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { Tooltip } from "@mui/material";
import DiscountsDialog from "./DiscountsDialog";
import { data, dataInfo } from "../../mock/discountsData";
import { discountsOpenClose } from "../../redux/discounts/discountsDialog";

const actionsColumn = {
  title: 'عملیات',
  elements: (id)=>sendElements(id)
}
const sendElements = (id)=>{
  // console.log(id);
  return(
    <>
      <Tooltip arrow placement="top" title={<><span className="text-base">حذف کد تخفیف</span></>}><i className="fa-solid fa-trash text-xl text-red-500 hover:bg-red-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
    </>
  )
}

const Discounts = () => {  
  return (
    <>
      <ModalContainer>
        <DiscountsDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت تخفیف ها</b>
      </h1>
      <section>
        <PaginationTable data={data} dataInfo={dataInfo} actionCol={actionsColumn} rowInPage={10} searchable={true} dialogOpenner={discountsOpenClose} searchParam={'title'}/>
      </section>
    </>
  );
};

export default Discounts;
