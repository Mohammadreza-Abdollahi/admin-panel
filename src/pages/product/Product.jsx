import ProductDialog from "./AddProduct";
import ModalContainer from "../../components/ModalPortal";
import AddProductsAttributes from "./AddProductsAttributes";
import { useEffect, useState } from "react";
import ProductPaginationTable from "../../components/ProductPaginationTable";
import { productDialogOpenClose } from "../../redux/product/productSlice";
import { handleGetProducts } from "./core";
import TableSkeleton from "../../components/loadings/TableSkeleton";
import Actions from "./Actions";
import LikesCount from "./LikesCount";

const Product = () => {
  const [data, setData] = useState([]);
  const [searchChar, setSearchChar] = useState("");
  const [itemInPage, setItemInPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const dataInfo = [
    { field: "id", title: "#" },
    {
      field: null,
      title: "گروه محصول",
      elements: (data) => data.categories[0].title,
    },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "view_count", title: "موجودی" },
    {
      field: null,
      title: "تعداد پسند ها",
      elements: (data) => <LikesCount data={data} />,
    },
    {
      field: null,
      title: "گروه محصول",
      elements: (data) => (
        <span
          className={`text-lg ${
            data.is_active ? "text-green-500" : "text-red-500"
          }`}
        >
          {data.is_active ? "فعال" : "غیرفعال"}
        </span>
      ),
    },
    {
      field: null,
      title: "عملیات",
      elements: (data) => <Actions data={data} setData={setData} setLoading={setLoading}/>,
    },
  ];
  const handleSearch = async (char)=>{
    setSearchChar(char);
    handleGetProducts(setData , setLoading , setPageCount , 1 , itemInPage , char);
  };
  useEffect(() => {
    document.title = "پنل مدیریت | محصولات";
    handleGetProducts(setData , setLoading , setPageCount , currentPage , itemInPage , searchChar);
  }, [currentPage , itemInPage]);
  return (
    <>
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
            searchChar={searchChar}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchable={true}
            dialogOpenner={productDialogOpenClose}
            searchParam={{
              title: "title",
              placeholder: "محصول مورد نظر را جستجو کنید...",
            }}
            handleSearch={handleSearch}
          />
        )}
      </section>
    </>
  );
};

export default Product;
