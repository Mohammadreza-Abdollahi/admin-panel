import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openCloseDialog } from "../../redux/category/categorySlice";
import { faEdit, faReceipt, faShareNodes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initialValues } from "./core";

const TableActions = ({data , setEditId , handleDeleteCategory}) => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return ( 
        <>
        {
          !params.categoryId ? (
            <Tooltip arrow placement="top" title={<><span className="text-base">زیرمجموعه</span></>}><FontAwesomeIcon icon={faShareNodes} onClick={()=>navigate(`/categories/${data.id}` , {state: data})} className="text-xl text-blue-500 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
          ) : null
        }
        <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش دسته</span></>}><FontAwesomeIcon icon={faEdit} onClick={()=>{dispatch(openCloseDialog());dispatch(setEditId(data.id))}} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
        {
          params.categoryId ? (
            <Tooltip arrow placement="top" title={<><span className="text-base">افزودن ویژگی</span></>}><FontAwesomeIcon icon={faReceipt} onClick={()=>navigate(`/categories/${data.id}/attributes` , {state : data})} className="text-xl text-green-500 hover:bg-green-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
          ) : null
        }
        <Tooltip arrow placement="top" title={<><span className="text-base">حذف دسته</span></>}><FontAwesomeIcon icon={faTrash} onClick={()=>handleDeleteCategory(data)} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
        </>
     );
}
 
export default TableActions;