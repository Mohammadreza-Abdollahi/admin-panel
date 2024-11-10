import { faEdit, faImages, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProductAttributeDialogOpenClose } from "../../redux/product/productSlice";
import { handleDeleteProduct } from "./core";
import { useNavigate } from "react-router-dom";

const Actions = ({data , setData , setLoading}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
          <section className="py-1.5">
            <Tooltip
              arrow
              placement="top"
              title={
                <>
                  <span className="text-base">مدیریت گالری</span>
                </>
              }
            >
              <FontAwesomeIcon
                icon={faImages}
                className="text-xl text-blue-500 hover:bg-blue-100 px-2 py-1 rounded-md cursor-pointer"
              />
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={
                <>
                  <span className="text-base">ویرایش</span>
                </>
              }
              onClick={()=>navigate('/products/add-product',{state: {data: data}})}
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
                  <span className="text-base">ثبت ویژگی</span>
                </>
              }
            >
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => dispatch(addProductAttributeDialogOpenClose())}
                className="text-xl text-green-500 hover:bg-green-100 px-2 py-1 rounded-md cursor-pointer"
              />
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={
                <>
                  <span className="text-base">حذف محصول</span>
                </>
              }
              onClick={()=>handleDeleteProduct(data , setData , setLoading)}
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
 
export default Actions;