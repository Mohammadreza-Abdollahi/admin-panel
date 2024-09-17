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
                </td>
            </tr>
        </>
     );
}
 
export default ProductTableRow;