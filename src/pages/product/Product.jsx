import ProductDialog from "./ProductDialog";
import ModalContainer from "../../components/ModalPortal";
import AddProductsAttributes from "./AddProductsAttributes";
import { useEffect, useState } from "react";
import ProductPaginationTable from "../../components/ProductPaginationTable";
import ProductActions from "./ProductActions";
import { productDialogOpenClose } from "../../redux/product/productSlice";
import { dataInfo } from "./core";
import TableSkeleton from "../../components/loadings/TableSkeleton";
import { getProductsService } from "../../services/productsService";
import { Alert } from "../../utils/alert";

const Product = () => {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const handleGetProducts = async ()=>{
    setLoading(true)
    try{
      const res = await getProductsService(currentPage , 10 , '');
      if(res.status === 200){
        setData(res.data.data)
        console.log(res);
        setLoading(false);
      }else{
        Alert('error','محصولات دریافت نشدند!');
        setLoading(false);
      }
    }catch(error){
      Alert('error',error);
      setLoading(false);
    }
  };
  useEffect(() => {
    document.title = "پنل مدیریت | محصولات";
    handleGetProducts();
  }, []);
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
        {
          loading ? (
            <TableSkeleton/>
          ) : (
            <ProductPaginationTable
              data={data}
              dataInfo={dataInfo}
              rowInPage={10}
              searchable={true}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageCount={pageCount}
              setPageCount={setPageCount}
              dialogOpenner={productDialogOpenClose}
              searchParam={{
                title: "title",
                placeholder: "محصول مورد نظر را جستجو کنید...",
              }}
            />
          )
        }
      </section>
    </>
  );
};

export default Product;
