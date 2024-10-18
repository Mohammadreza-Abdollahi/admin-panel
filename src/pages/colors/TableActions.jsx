import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

const TableActions = ({ data }) => {
  return (
    <>
      <section className="py-1.5">
        <Tooltip
          arrow
          placement="top"
          title={
            <>
              <span className="text-base">ویرایش رنگ</span>
            </>
          }
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
              <span className="text-base">حذف رنگ</span>
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
};

export default TableActions;
