import ProductDialog from "./ProductDialog";
import ModalContainer from "../../components/ModalPortal";
import AddProductsAttributes from "./AddProductsAttributes";
import { useEffect, useState } from "react";
import ProductPaginationTable from "../../components/ProductPaginationTable";
import { productDialogOpenClose } from "../../redux/product/productSlice";
import { dataInfo, handleGetProducts } from "./core";
import TableSkeleton from "../../components/loadings/TableSkeleton";

const Product = () => {
  const [data, setData] = useState([]);
  const [searchChar, setSearchChar] = useState("");
  const [itemInPage, setItemInPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    document.title = "پنل مدیریت | محصولات";
    handleGetProducts(setData , setLoading , setPageCount , currentPage , itemInPage , searchChar);
  }, [currentPage , itemInPage]);
  return (
    <>
      <ModalContainer>
        <ProductDialog />
        <AddProductsAttributes />
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت محصولات</b>
      </h1>
      <section>
        {loading ? (
          <TableSkeleton />
        ) : (
          <ProductPaginationTable
            data={data}
            dataInfo={dataInfo}
            setSearchChar={setSearchChar}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchable={true}
            dialogOpenner={productDialogOpenClose}
            searchParam={{
              title: "title",
              placeholder: "محصول مورد نظر را جستجو کنید...",
            }}
          />
        )}
      </section>
    </>
  );
};

export default Product;
