import { Pagination, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../themes/componentsTheme";
import { useEffect, useState } from "react";

const PaginationTable = ({data , dataInfo , actionCol , rowInPage}) => {
    const [tableData , setTableData] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [numOfPage , setNumOfPage] = useState(rowInPage);
    const [pageCount , setPageCount] = useState(1);

    const handleChangePage = (e , v)=>{
        setCurrentPage(v);
    };

    useEffect(()=>{
        let pCount = Math.ceil(data.length / numOfPage);
        console.log(pCount);
        setPageCount(pCount);
    },[])
    useEffect(()=>{
        let start = (currentPage * numOfPage) - numOfPage;
        let end = (currentPage * numOfPage);
        setTableData(data.slice(start,end));
    },[currentPage]);
    return ( 
        <>
            <section>
                <table className="text-center w-full bg-palete-2-100 bg-opacity-60 rounded-sm overflow-hidden ring-1 ring-palete-2-300">
                    <thead className="border-b-palete-2-300 border-b-4 bg-palete-2-200 bg-opacity-70">
                        <tr className="text-slate-800">
                            {
                                dataInfo.map(i=> (
                                    <th key={i.field} className="py-3">{i.title}</th>
                                ))
                            }
                            {
                                actionCol ? (
                                    <th className="py-3">{actionCol.title}</th>
                                ) : null
                            }
                        </tr>
                    </thead>
                    <tbody className="text-slate-600">
                        {
                            tableData.map(d=>(
                                <tr key={d.id} className="transition-all duration-150 border-b-palete-2-200 border-b-2 hover:bg-palete-2-300 hover:bg-opacity-50">
                                    {
                                        dataInfo.map(i=>(
                                            <td key={`${i.field}${d.id}`} className={`py-2.5 ring-1 ring-palete-2-200 ${i.field == 'likes' ? 'text-green-600 text-lg' : null} ${i.field === 'disLikes' ? 'text-red-600 text-lg' : null}`}>{typeof d[i.field] == 'number' ? (d[i.field].toLocaleString('fa')) : (d[i.field])}</td>
                                        ))
                                    }
                                    {
                                        actionCol ? (
                                            <td className={`py-1 ring-1 ring-palete-2-200`}>{actionCol.elements(d.id)}</td>
                                        ) : null
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            <section className="text-center">
                <div className="inline-block mt-3" dir="ltr">
                    <ThemeProvider theme={componentsTheme}>
                        {console.log(pageCount)}
                        <Pagination count={pageCount} page={currentPage} size="large" color="secondary" onChange={handleChangePage}/>
                    </ThemeProvider>
                </div>
            </section>
        </>
     );
}
 
export default PaginationTable;