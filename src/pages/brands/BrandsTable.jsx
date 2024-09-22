import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Btn from "../../components/Btn";
import SearchBox from "../../components/SearchBox";
import { ThemeProvider } from "@emotion/react";
import { Pagination } from "@mui/material";
import { componentsTheme } from "../../themes/componentsTheme";

const BrandsTable = ({data , actionCol , rowInPage , searchable = false , dialogOpenner , searchParam = 'title' , hasBtn = true}) => {
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
        setInitData(data.filter(data=> data[searchParam].includes(searchChar)))
        setCurrentPage(1);
    },[searchChar])
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
                                <SearchBox btnTxt={"جستجو"} placeholder={"دسته بندی مورد نظر را جستجو کنید..."} setSearch={setSearchChar}/>
                            </div>
                            <dir className="w-1/3 text-end">
                                {
                                    hasBtn ? (
                                        <span onClick={()=>dispatch(dialogOpenner())}><Btn btnTxt={"افزودن"}/></span>
                                    ) : null
                                }
                            </dir>
                        </section>
                    ) : null
                }
                <table className="text-center w-full bg-palete-2-100 bg-opacity-60 rounded-sm overflow-hidden ring-1 ring-palete-2-300">
                    <thead className="border-b-palete-2-300 border-b-4 bg-palete-2-200 bg-opacity-70">
                        <tr className="text-slate-800">
                            <th className="py-3">#</th>
                            <th className="py-3">عنوان برند</th>
                            <th className="py-3">عنوان فارسی برند</th>
                            <th className="py-3">توضیحات برند</th>
                            <th className="py-3">لوگو برند</th>
                            {
                                actionCol ? (
                                    <th className="py-3">{actionCol.title}</th>
                                ) : null
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                                tableData.map(d=>(
                                    <tr key={d.id} className="transition-all duration-150 border-b-palete-2-200 border-b-2 hover:bg-palete-2-300 hover:bg-opacity-50">
                                        <td className="py-2.5 ring-1 ring-palete-2-200">{d.id}</td>
                                        <td className="py-2.5 ring-1 ring-palete-2-200">{d.brandTitle}</td>
                                        <td className="py-2.5 ring-1 ring-palete-2-200">{d.persianBrandTitle}</td>
                                        <td className="py-2.5 ring-1 ring-palete-2-200">{d.explanation}</td>
                                        <td className="py-2.5 px-5 ring-1 ring-palete-2-200"><img className="w-16 m-auto" src={d.brandLogo} alt="Logo" /></td>                                        
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
                {
                    tableData.length === 0 ? (
                        <div className="flex justify-center items-center text-center text-xl bg-red-100 text-red-800 py-3 rounded-b-md border-2 border-t-0 border-red-300">
                            <i className="fa-solid fa-circle-exclamation text-2xl mx-2"></i>
                            <h1 className="">هیچ محصولی وجود ندارد...</h1>
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
 
export default BrandsTable;