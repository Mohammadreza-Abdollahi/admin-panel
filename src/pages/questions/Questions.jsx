import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { Tooltip } from "@mui/material";
import { data, dataInfo } from "../../mock/questionsData";
import QuestionsDialog from "./QuestionsDialog";
import { questionsOpenClose } from "../../redux/questions/questionsDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const actionsColumn = {
  title: 'عملیات',
  elements: (id)=>sendElements(id)
}
const sendElements = (id)=>{
  // console.log(id);
  return(
    <>
      <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش</span></>}><FontAwesomeIcon icon={faEdit} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
      <Tooltip arrow placement="top" title={<><span className="text-base">حذف</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
    </>
  )
}

const Questions = () => {  
  return (
    <>
      <ModalContainer>
        <QuestionsDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت مجوز ها</b>
      </h1>
      <section>
        <PaginationTable data={data} dataInfo={dataInfo} actionCol={actionsColumn} rowInPage={10} searchable={true} dialogOpenner={questionsOpenClose} searchParam={'fullName'}/>
      </section>
    </>
  );
};

export default Questions;
