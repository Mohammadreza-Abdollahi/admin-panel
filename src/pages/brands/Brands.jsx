import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import BrandsDialog from "./BrandsDialog";
import { openCloseDialog } from "../../redux/brands/brandsSlice";
import { useEffect, useState } from "react";
import { dataInfo } from "./core";
import TableActions from "./TableActions";
import { getBrandsService } from "../../services/brandsService";
import TableSkeleton from "../../components/loadings/TableSkeleton";
import { Alert } from "../../utils/alert";

const Brands = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const actionsColumn = [
    {
      title: "عملیات",
      elements: (data) => <TableActions data={data} />,
    },
  ];
  const handleGetBrands = async () => {
    setLoading(true);
    try {
      const res = await getBrandsService();
      if (res.status === 200) {
        setData(res.data.data);
        setLoading(false);
      } else {
        Alert("error", "برند ها دریافت نشدند!");
        setLoading(false);
      }
    } catch (error) {
      Alert("error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    document.title = "پنل مدیریت | برند ها";
    handleGetBrands();
  }, []);
  return (
    <>
      <ModalContainer>
        <BrandsDialog setData={setData} setLoading={setLoading} />
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت برند ها</b>
      </h1>
      <section>
        {loading ? (
          <TableSkeleton />
        ) : (
          <PaginationTable
            data={data}
            dataInfo={dataInfo}
            actionCol={actionsColumn}
            rowInPage={10}
            searchable={true}
            dialogOpenner={openCloseDialog}
            searchParam={{
              title: "original_name",
              placeholder: "دسته بندی مورد نظر را جستجو کنید...",
            }}
          />
        )}
      </section>
    </>
  );
};

export default Brands;
