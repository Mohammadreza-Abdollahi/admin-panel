import CategorySearch from "../../components/SearchBox";
import CategoryDialog from "./CategoryDialog";
import CategoryTable from "./CategoryTable";
import Btn from "../../components/Btn";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openClose } from "../../redux/category/categoryDialog";
import CategoryPagination from "./CategoryPagination";

const Category = () => {
  const {isOpen} = useSelector(state=>state.categoryDialog);
  const dispatch = useDispatch();
  
  return (
    <>
      <CategoryDialog/>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت دسته بندی محصولات</b>
      </h1>
      <section className="flex justify-between items-center">
        <div className="w-1/3 text-start">
          <CategorySearch
            btnTxt={"جستجو"}
            placeholder={"دسته بندی مورد نظر را جستجو کنید..."}
          />
        </div>
        <dir className="w-1/3 text-end">
          <span onClick={()=>dispatch(openClose())}><Btn btnTxt={"افزودن"}/></span>
        </dir>
      </section>
      <section>
        <CategoryTable />
      </section>
      <section className="text-center mt-3">
        <CategoryPagination/>
      </section>
    </>
  );
};

export default Category;
