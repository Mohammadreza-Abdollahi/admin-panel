import { Pagination, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../themes/componentsTheme";
import { useEffect, useState } from "react";
import Btn from "./Btn";
import SearchBox from "./SearchBox";
import { useDispatch } from "react-redux";
import BackButton from "./BackButton";

const PaginationTable = ({data , dataInfo , actionCol , rowInPage , searchable = false , dialogOpenner , searchParam = 'title' , hasBtn = true , hasBackBtn = false}) => {
    const dispatch = useDispatch();
    const [initData , setInitData] = useState(data);
    const [searchChar , setSearchChar] = useState('');
    const [tableData , setTableData] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [numOfPage , setNumOfPage] = useState(rowInPage);
    const [pageCount , setPageCount] = useState(1);
    const handleChangePage = (e , v)=>{
        setCurrentPage(v);
    };
    useEffect(()=>{
        setInitData(data.filter(data=> data[searchParam.title].includes(searchChar)))
        setCurrentPage(1);
    },[searchChar , data])
    useEffect(()=>{
        let pCount = Math.ceil(initData.length / numOfPage);
        setPageCount(pCount);
        let start = (currentPage * numOfPage) - numOfPage;
        let end = (currentPage * numOfPage);
        setTableData(initData.slice(start,end));
    },[currentPage , numOfPage , data , initData]);
    return ( 
        <>
            <section>
                {
                    searchable ? (
                        <section className="flex justify-between items-center my-1 mb-3">
                            <div className="w-1/3 text-start">
                                <SearchBox btnTxt={"جستجو"} placeholder={searchParam.placeholder} setSearch={setSearchChar}/>
                            </div>
                            <dir className="w-1/3 text-end">
                                {
                                    hasBtn ? (
                                        <span onClick={()=>dispatch(dialogOpenner())}><Btn btnTxt={"افزودن"}/></span>
                                    ) : null
                                }
                                {
                                    hasBackBtn ? (
                                        <BackButton btnTxt={'بازگشت'}/>
                                    ) : null
                                }
                            </dir>
                        </section>
                    ) : null
                }
                <table className="text-center w-full bg-palete-2-100 bg-opacity-60 rounded-sm overflow-hidden ring-1 ring-palete-2-300">
                    <thead className="border-b-palete-2-300 border-b-4 bg-palete-2-200 bg-opacity-70">
                        <tr className="text-slate-800">
                            {
                                dataInfo.map(i=> (
                                    <th key={i.field} className="py-3">{i.title}</th>
                                ))
                            }
                            {
                                actionCol ? actionCol.map((item , index)=>{
                                    return(
                                        <th key={`${item.id}__${index}`}>{item.title}</th>
                                    )
                                }) : null
                            }
                        </tr>
                    </thead>
                    <tbody className="text-slate-600">
                        {
                            tableData.map(d=>(
                                <tr key={d.id} className="transition-all duration-150 border-b-palete-2-200 border-b-2 hover:bg-palete-2-300 hover:bg-opacity-50">
                                    {
                                        dataInfo.map(i=>(
                                            <td key={`${i.field}${d.id}`} className={`ring-1 ring-palete-2-200 ${i.field == 'likes' ? 'text-green-600 text-lg' : null} ${i.field === 'disLikes' ? 'text-red-600 text-lg' : null}`}>{typeof d[i.field] == 'number' ? (d[i.field].toLocaleString('fa')) : (d[i.field])}</td>
                                        ))
                                    }
                                    {
                                        actionCol ? actionCol.map((item , index)=>{
                                            return(
                                                <td className="ring-1 ring-palete-2-200" key={`${item.id}___${index}`}>{item.elements(d)}</td>
                                            )
                                        }) : null
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    tableData.length === 0 ? (
                        <div className="flex justify-center items-center text-center text-xl bg-red-100 text-red-800 py-3 rounded-b-md border-2 border-t-0 border-red-300">
                            <i className="fa-solid fa-circle-exclamation text-2xl mx-2"></i>
                            <h1 className="">هیچ موردی وجود ندارد!</h1>
                        </div>
                    ) : null
                }
            </section>
            <section className="text-center">
                {
                    pageCount > 1 ?(
                    <div className="inline-block mt-3" dir="ltr">
                        <ThemeProvider theme={componentsTheme}>
                            <Pagination count={pageCount} page={currentPage} size="large" color="secondary" onChange={handleChangePage}/>
                        </ThemeProvider>
                    </div>
                    ) : null
                }
            </section>
        </>
     );
}
 
export default PaginationTable;