import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import GuarantiesDialog from "./GuarantiesDialog";
import { useEffect, useState } from "react";
import TableActions from "./TableActions";
import { dataInfo, handleGetGuaranties } from "./core";
import TableSkeleton from "../../components/loadings/TableSkeleton";
import GuarantiesTime from "./GuarantiesTime";
import { openCloseDialog } from "../../redux/guaranties/guarantiesSlice";

const Guaranties = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataToEdit , setDataToEdit] = useState(null);
  const actionsColumn = [
    {
      title: "مدت گارانتی",
      elements: (data) => <GuarantiesTime data={data} />,
    },
    {
      title: "عملیات",
      elements: (data) => <TableActions data={data} setData={setData} setLoading={setLoading} setDataToEdit={setDataToEdit}/>,
    },
  ];
  useEffect(() => {
    document.title = "پنل مدیریت | گارانتی ها";
    handleGetGuaranties(setData,setLoading);
  }, []);
  return (
    <>
      <ModalContainer>
        <GuarantiesDialog setData={setData} setLoading={setLoading} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت گارانتی ها</b>
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
              placeholder: "گارانتی مورد نظر را جستجو کنید...",
            }}
          />
        )}
      </section>
    </>
  );
};

export default Guaranties;
