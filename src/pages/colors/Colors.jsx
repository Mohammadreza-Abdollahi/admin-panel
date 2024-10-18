import ModalContainer from "../../components/ModalPortal";
import ColorsDialog from "./ColorsDialog";
import { useEffect, useState } from "react";
import TableActions from "./TableActions";
import PaginationTable from "../../components/PaginationTable";
import { dataInfo, handleGetColors } from "./core";
import TableSkeleton from "../../components/loadings/TableSkeleton";
import { openCloseDialog } from "../../redux/colors/colorsSlice";

const Colors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const actionsColumn = [
    {
      title: "عملیات",
      elements: (data) => <TableActions data={data} />,
    },
  ];
  useEffect(() => {
    document.title = "پنل مدیریت | رنگ ها";
    handleGetColors(setData, setLoading);
  }, []);
  return (
    <>
      <ModalContainer>
        <ColorsDialog />
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت رنگ ها</b>
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
              title: "title",
              placeholder: "برند مورد نظر را جستجو کنید...",
            }}
          />
        )}
      </section>
    </>
  );
};

export default Colors;
