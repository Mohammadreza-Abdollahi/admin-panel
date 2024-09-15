import { Tooltip } from "@mui/material";

const DashboardTableRow = ({col1 , col2 , col3 , col4}) => {
    return ( 
        <>
            <tr className="transition-all duration-150 border-b-palete-2-200 border-b-2 hover:bg-palete-2-300 hover:bg-opacity-50">
                <td className="py-1">{col1}</td>
                <td className="py-1">{col2}</td>
                <td className="py-1">{col3}</td>
                <td className="py-1">{col4}</td>
                <td className="py-1"><Tooltip arrow placement="left" title={<><span className="text-base">حذف</span></>}><i className="fa-solid fa-trash text-xl text-red-500 hover:bg-red-100 px-2 rounded-md cursor-pointer"></i></Tooltip></td>
            </tr>
        </>
     );
}
 
export default DashboardTableRow;