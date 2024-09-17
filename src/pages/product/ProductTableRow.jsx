import { Tooltip } from "@mui/material";

const ProductTableRow = ({col1 , col2 , col3 , col4 , col5 , col6A , col6B , col7}) => {
    return ( 
        <>
            <tr className="transition-all duration-150 border-b-palete-2-200 border-b-2 hover:bg-palete-2-300 hover:bg-opacity-50">
                <td className="py-2 ring-1 ring-palete-2-200">{col1}</td>
                <td className="py-2 ring-1 ring-palete-2-200">{col2}</td>
                <td className="py-2 ring-1 ring-palete-2-200">{col3}</td>
                <td className="py-2 ring-1 ring-palete-2-200">{col4}</td>
                <td className="py-2 ring-1 ring-palete-2-200">{col5}</td>
                <td><span className="mx-4 text-xl text-red-500">{col6A}</span><span className="mx-4 text-xl text-green-500">{col6B}</span></td>
                <td className="py-2 ring-1 ring-palete-2-200">{col7}</td>
                <td className="py-2 ring-1 ring-palete-2-200">
                    <Tooltip arrow placement="top" title={<><span className="text-base">اشتراک گذاری</span></>}><i className="fa-solid fa-share-nodes text-xl text-blue-500 hover:bg-blue-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
                    <Tooltip arrow placement="top" title={<><span className="text-base">ویرایش</span></>}><i className="fa-solid fa-edit text-xl text-yellow-500 hover:bg-yellow-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
                    <Tooltip arrow placement="top" title={<><span className="text-base">افزودن</span></>}><i className="fa-solid fa-plus text-xl text-green-600 hover:bg-green-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
                </td>
            </tr>
        </>
     );
}
 
export default ProductTableRow;