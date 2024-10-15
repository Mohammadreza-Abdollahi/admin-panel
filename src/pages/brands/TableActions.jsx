import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { openCloseDialog, setEditId } from "../../redux/brands/brandsSlice";

const TableActions = ({data , deleteBrand}) => {
  const dispatch = useDispatch();
    return(
        <>
          <section className="py-7">
            <Tooltip arrow placement="top" onClick={()=>{dispatch(openCloseDialog());dispatch(setEditId(data.id))}} title={<><span className="text-base">ویرایش برند</span></>}><FontAwesomeIcon icon={faEdit} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
            <Tooltip arrow placement="top" onClick={()=>deleteBrand(data)} title={<><span className="text-base">حذف برند</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
          </section>
        </>
    );
};
 
export default TableActions;