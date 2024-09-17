import CategorySearch from "../../components/SearchBox";
import Btn from "../../components/Btn";
import { useDispatch } from "react-redux";
import { productOpenClose } from "../../redux/product/productDialog";
import ProductDialog from "./ProductDialog";
import ProductTable from "./ProductTable";
import ProductPagination from "./ProductPagination";
import ModalContainer from "../../components/ModalPortal";

const Product = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <ModalContainer>
        <ProductDialog/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت محصولات</b>
      </h1>
      <section className="flex justify-between items-center my-1">
        <div className="w-1/3 text-start">
          <CategorySearch
            btnTxt={"جستجو"}
            placeholder={"محصول مورد نظر را جستجو کنید..."}
          />
        </div>
        <dir className="w-1/3 text-end">
          <span onClick={()=>dispatch(productOpenClose())}><Btn btnTxt={"افزودن"}/></span>
        </dir>
      </section>
      <section>
        <ProductTable />
      </section>
      <section className="text-center mt-3">
        <ProductPagination/>
      </section>
    </>
  );
};

export default Product;
