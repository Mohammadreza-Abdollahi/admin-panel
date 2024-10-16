import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

const TableActions = ({data}) => {
    return ( 
        <>
            <section className="py-1.5">
                <Tooltip
                arrow
                placement="top"
                title={
                    <>
                    <span className="text-base">حذف گارانتی</span>
                    </>
                }
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