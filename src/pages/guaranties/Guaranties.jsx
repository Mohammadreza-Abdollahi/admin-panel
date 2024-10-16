import ModalContainer from "../../components/ModalPortal";
import PaginationTable from "../../components/PaginationTable";
import GuarantiesDialog from "./GuarantiesDialog";
import { guarantiesOpenClose } from "../../redux/guaranties/guarantiesDialog";
import { useEffect, useState } from "react";
import TableActions from "./TableActions";
import { dataInfo } from "./core";
import TableSkeleton from "../../components/loadings/TableSkeleton";
import { getGuarantiesService } from "../../services/guarantiesService.";
import { Alert } from "../../utils/alert";
import GuarantiesTime from "./GuarantiesTime";

const Guaranties = () => {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const actionsColumn = [
    {
      title: "مدت گارانتی",
      elements: (data) =><GuarantiesTime data={data}/>,
    },
    {
      title: "عملیات",
      elements: (data) =><TableActions data={data}/>,
    },
  ];
  const handleGetGuaranties = async ()=>{
    setLoading(true);
    try{
      const res = await getGuarantiesService();
      if(res.status === 200){
        setData(res.data.data);
        setLoading(false);
      }else{
        Alert('error','گارانتی ها دریافت نشدند!')
      }
    }catch(error){

    }
  };
  useEffect(() => {
    document.title = "پنل مدیریت | گارانتی ها";
    handleGetGuaranties();
  }, []);
  return (
    <>
      <ModalContainer>
        <GuarantiesDialog />
      </ModalContainer>
      <h1 className="text-3xl text-center my-4 text-slate-800">
        <b>مدیریت گارانتی ها</b>
      </h1>
      <section>
        {
          loading ? (
            <TableSkeleton/>
          ) : (
            <PaginationTable
            data={data}
            dataInfo={dataInfo}
            actionCol={actionsColumn}
            rowInPage={10}
            searchable={true}
            dialogOpenner={guarantiesOpenClose}
            searchParam={{
              title: "title",
              placeholder: "دسته بندی مورد نظر را جستجو کنید...",
            }}
            />
          )
        }
      </section>
    </>
  );
};

export default Guaranties;
