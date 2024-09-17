import CategoryDialog from "./CategoryDialog";
import CategoryTable from "./CategoryTable";
import Btn from "../../components/Btn";
import { useDispatch, useSelector } from "react-redux";
import { openClose } from "../../redux/category/categoryDialog";
import CategoryPagination from "./CategoryPagination";
import SearchBox from "../../components/SearchBox";
import ModalContainer from "../../components/ModalPortal";

const Category = () => {
  const {isOpen} = useSelector(state=>state.categoryDialog);
  const dispatch = useDispatch();
  
  return (
    <>
      <ModalContainer>
        <CategoryDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت دسته بندی محصولات</b>
      </h1>
      <section className="flex justify-between items-center my-1">
        <div className="w-1/3 text-start">
          <SearchBox
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
