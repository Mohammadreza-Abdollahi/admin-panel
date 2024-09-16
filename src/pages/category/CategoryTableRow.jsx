import { Tooltip } from "@mui/material";

const CategoryTableRow = ({col1 , col2 , col3}) => {
    return ( 
        <>
            <tr className="transition-all duration-150 border-b-palete-2-200 border-b-2 hover:bg-palete-2-300 hover:bg-opacity-50">
                <td className="py-2">{col1}</td>
                <td className="py-2">{col2}</td>
                <td className="py-2">{col3}</td>
                <td className="py-2">
                    <Tooltip arrow placement="top" title={<><span className="text-base">اشتراک گذاری</span></>}><i className="fa-solid fa-share-nodes text-xl text-blue-500 hover:bg-blue-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
                    <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش</span></>}><i className="fa-solid fa-edit text-xl text-yellow-500 hover:bg-yellow-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
                    <Tooltip arrow placement="top" title={<><span className="text-base">افزودن</span></>}><i className="fa-solid fa-plus text-xl text-green-600 hover:bg-green-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
                    <Tooltip arrow placement="top" title={<><span className="text-base">حذف</span></>}><i className="fa-solid fa-trash text-xl text-red-500 hover:bg-red-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
                </td>
            </tr>
        </>
     );
}
 
export default CategoryTableRow;