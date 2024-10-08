import SwitchInput from "../../../components/SwitchInput";
import Btn from "../../../components/Btn";
import Input from "../../../components/Input";
import PaginationTable from "../../../components/PaginationTable";
import { useLocation } from "react-router-dom";
import { attributesDataInfo } from "../core";
import AttributesTableActions from "./AttributesTableActions";
import { useEffect, useState } from "react";
import { getAttributesService } from "../../../services/attributesService";
import { Alert } from "../../../utils/alert";
import ShowInFilter from "./ShowInFilter";
import TableSkeleton from "../../../components/loadings/TableSkeleton";
import BackButton from "../../../components/BackButton";

const Attributes = () => {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const { state } = useLocation();
  console.log(state.id);
  const optionalCols = [
    {
      title: 'نمایش در فیلتر ها',
      elements: (data)=><ShowInFilter data={data}/>
    },
    {
      title: 'عملیات',
      elements: (data)=><AttributesTableActions data={data}/>
    }
  ]
  const handleGetAttributes = async (id)=>{
    setLoading(true)
    try{
      const res = await getAttributesService(id);
      if(res.status === 200){
        console.log(res);
        setData(res.data.data);
        setLoading(false)
      }else{
        Alert('error','ویژگی ها دریافت نشدند!');
        setLoading(false)
      }
    }catch(error){
      Alert('error','خطایی رخ داده');
      setLoading(false)
    }
  };
  useEffect(()=>{
    handleGetAttributes(state.id)
  },[state])
  return (
    <>
        <div className="relative">
          <span className="absolute -top-2 left-0">
            <BackButton btnTxt={'بازگشت'}/>
          </span>
          <b><h1 className="text-3xl text-center my-4 text-slate-800">مدیریت ویژگی های دسته <span className="text-palete-2-600">"{state.title}"</span></h1></b>
          <section dir="rtl" className="w-full flex justify-around gap-5 mx-auto py-5 px-12 mt-5">
            <div className="w-full">
              <Input label={'عنوان ویژگی'} name={'AttrTitle'} placeholder={'عنوان ویژگی جدید را وارد کنید...'} type={'text'}/>
            </div>
            <div className="w-full">
              <Input label={'واحد ویژگی'} name={'AttrUnit'} placeholder={'واحد ویژگی جدید را وارد کنید...'} type={'text'}/>
            </div>
            <div className="w-1/2">
              <SwitchInput label={'نمایش در فیلتر :'} name={'ShowInFilter'}/>
            </div>
            <div>
              <Btn btnTxt={'افزودن'}/>
            </div>
          </section>
        </div>
        <div className="my-5">
          <hr /><hr />
        </div>
        <section dir="rtl" className="px-6">
          {
            !loading ? (
              <PaginationTable data={data} dataInfo={attributesDataInfo} actionCol={optionalCols} searchable={true} searchParam={{title: 'title' , placeholder: "ویژگی مورد نظر را جستجو کنید..."}} hasBtn={false} rowInPage={10}/>
            ) : (
              <TableSkeleton/>
            )
          }
        </section>
    </>
  );
};

export default Attributes;
