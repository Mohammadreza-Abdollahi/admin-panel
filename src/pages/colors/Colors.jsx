import ModalContainer from "../../components/ModalPortal";
import { Tooltip } from "@mui/material";
import ColorsDialog from "./ColorsDialog";
import { data } from "../../mock/colorsData";
import { colorsOpenClose } from "../../redux/colors/colorsDialog";
import ColorsTable from "./ColorsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const actionsColumn = {
  title: 'عملیات',
  elements: (id)=>sendElements(id)
}
const sendElements = (id)=>{
  // console.log(id);
  return(
    <>
      <Tooltip arrow placement="top" title={<><span className="text-base">حذف رنگ</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
    </>
  )
}

const Colors = () => {  
  useEffect(()=>{
    document.title = 'پنل مدیریت | رنگ ها'
  },[])
  return (
    <>
      <ModalContainer>
        <ColorsDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت رنگ ها</b>
      </h1>
      <section>
        <ColorsTable data={data} actionCol={actionsColumn} rowInPage={10} searchable={true} dialogOpenner={colorsOpenClose} searchParam={'colorName'}/>
      </section>
    </>
  );
};

export default Colors;
