import { Pagination, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../themes/componentsTheme";
import { useEffect, useState } from "react";
import Btn from "./Btn";
import SearchBox from "./SearchBox";
import { useDispatch } from "react-redux";
import BackButton from "./BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProductPaginationTable = ({
  data,
  dataInfo,
  setSearchChar,
  searchChar,
  pageCount,
  currentPage,
  setCurrentPage,
  searchable = false,
  dialogOpenner,
  searchParam = "title",
  hasBtn = true,
  hasBackBtn = false,
  handleSearch
}) => {
  let timeout;
  const dispatch = useDispatch();
  const [initData, setInitData] = useState(data);
  const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(!focus)
    };
  const handleChangePage = (e, v) => {
    setCurrentPage(v);
  };
  const searchTimeout = (char)=>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      handleSearch(char);
    },500)
  };
  return (
    <>
      <section>
        {searchable ? (
          <section className="flex justify-between items-center my-1 mb-3">
            <div className="w-1/3 text-start">
              <form onSubmit={(e)=>e.preventDefault()} className={`overflow-hidden relative ring-2 rounded-sm text-xl transition-all duration-300 group ${focus ? 'ring-palete-4-400' : 'ring-palete-2-400-1'}`}>
                  <input type="submit" value={'جستجو'} className={`appearance-none w-1/4 py-2 text-white transition-all duration-300   ${focus ? 'bg-palete-4-400' : 'bg-palete-2-400-1'}`}/>
                  <input onFocus={handleFocus} onBlur={handleFocus} onChange={(e)=>{searchTimeout(e.target.value)}} type="text" className="appearance-none w-3/4 py-2 px-2 focus:outline-none" placeholder={searchChar || 'نام محصول مورد نظر را وارد کنید...'}/>
                  {
                    searchChar ? (
                      <span onClick={()=>{setSearchChar(null);searchTimeout('')}} className="absolute left-3 -translate-y-1/2 top-6 text-red-500 p-1 cursor-pointer"><FontAwesomeIcon icon={faXmark}/></span>
                    ) : null
                  }
              </form>
            </div>
            <dir className="w-1/3 text-end">
              {hasBtn ? (
                <span onClick={() => dispatch(dialogOpenner())}>
                  <Btn btnTxt={"افزودن"} />
                </span>
              ) : null}
              {hasBackBtn ? <BackButton btnTxt={"بازگشت"} /> : null}
            </dir>
          </section>
        ) : null}
        <table className="text-center w-full bg-palete-2-100 bg-opacity-60 rounded-sm overflow-hidden ring-1 ring-palete-2-300">
          <thead className="border-b-palete-2-300 border-b-4 bg-palete-2-200 bg-opacity-70">
            <tr className="text-slate-800">
              {dataInfo.map((i) => (
                <th key={i.field ? i.field : "no_field"} className="py-3">
                  {i.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-600">
            {initData.map((d) => (
              <tr
                key={d.id}
                className="transition-all duration-150 border-b-palete-2-200 border-b-2 hover:bg-palete-2-300 hover:bg-opacity-50"
              >
                {dataInfo.map((i) =>
                  i.field ? (
                    <td
                      key={`${i.field}${d.id}`}
                      className={`ring-1 ring-palete-2-200`}
                    >
                      {typeof d[i.field] == "number"
                        ? d[i.field].toLocaleString("fa")
                        : d[i.field]}
                    </td>
                  ) : (
                    <td
                      key={`no_field${d.id}`}
                      className={`ring-1 ring-palete-2-200`}
                    >
                      {i.elements(d)}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {initData.length === 0 ? (
          <div className="flex justify-center items-center text-center text-xl bg-red-100 text-red-800 py-3 rounded-b-md border-2 border-t-0 border-red-300">
            <i className="fa-solid fa-circle-exclamation text-2xl mx-2"></i>
            <h1 className="">هیچ موردی وجود ندارد!</h1>
          </div>
        ) : null}
      </section>
      <section className="text-center">
        {pageCount > 1 ? (
          <div className="inline-block mt-3" dir="ltr">
            <ThemeProvider theme={componentsTheme}>
              <Pagination
                count={pageCount}
                page={currentPage}
                size="large"
                color="secondary"
                onChange={handleChangePage}
              />
            </ThemeProvider>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default ProductPaginationTable;
