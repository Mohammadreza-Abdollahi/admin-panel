import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import { Tooltip } from "@mui/material";
import BrandsDialog from "./BrandsDialog";
import { data, dataInfo } from "../../mock/brandsData";
import { brandsOpenClose } from "../../redux/brands/brandsDialog";
import BrandsTable from "./BrandsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const actionsColumn = {
  title: 'عملیات',
  elements: (id)=>sendElements(id)
}
const sendElements = (id)=>{
  // console.log(id);
  return(
    <>
      <Tooltip arrow placement="top" title={<><span className="text-base">حذف برند</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
    </>
  )
}

const Brands = () => {  
  return (
    <>
      <ModalContainer>
        <BrandsDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت برند ها</b>
      </h1>
      <section>
        <BrandsTable data={data} actionCol={actionsColumn} rowInPage={6} searchable={true} dialogOpenner={brandsOpenClose} searchParam={'persianBrandTitle'}/>
      </section>
    </>
  );
};

export default Brands;
