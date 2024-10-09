import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

const AttributesTableActions = ({data , setAttributeToEdit , attributeToEdit , handleDeleteAtribute}) => {
    return ( 
        <>
            <section className={`py-1.5 ${attributeToEdit && attributeToEdit.id === data.id ? "bg-palete-4-500-1 bg-opacity-30 rounded-sm " : ""}`}>
                <Tooltip arrow placement="top" onClick={()=>{setAttributeToEdit(data)}} title={<><span className="text-base">ویرایش ویژگی</span></>}><FontAwesomeIcon icon={faEdit} className="text-xl text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
                <Tooltip arrow placement="top" onClick={()=>handleDeleteAtribute(data)} title={<><span className="text-base">حذف ویژگی</span></>}><FontAwesomeIcon icon={faTrash} className="text-xl text-red-500 hover:bg-red-100 px-2 py-1 rounded-md cursor-pointer"/></Tooltip>
            </section>
        </>
    );
}
 
export default AttributesTableActions;