import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { openCloseDialog } from "../../redux/guaranties/guarantiesSlice";
import { handleDeleteGuaranty } from "./core";

const TableActions = ({data , setData , setLoading , setDataToEdit}) => {
    const dispatch = useDispatch();
    return ( 
        <>
            <section className="py-1.5">
                <Tooltip
                arrow
                placement="top"
                title={
                    <>
                    <span className="text-base">ویرایش گارانتی</span>
                    </>
                }
                onClick={()=>{dispatch(openCloseDialog());setDataToEdit(data)}}
                >
                <FontAwesomeIcon
                    icon={faEdit}
                    className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"
                />
                </Tooltip>
                <Tooltip
                arrow
                placement="top"
                title={
                    <>
                    <span className="text-base">حذف گارانتی</span>
                    </>
                }
                onClick={()=>handleDeleteGuaranty(data , setData , setLoading)}
                >
                <FontAwesomeIcon
                    icon={faTrash}
                    className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"
                />
                </Tooltip>
            </section>
        </>
     );
}
 
export default TableActions;