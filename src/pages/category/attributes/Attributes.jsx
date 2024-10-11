import PaginationTable from "../../../components/PaginationTable";
import { useLocation } from "react-router-dom";
import AttributesTableActions from "./AttributesTableActions";
import { useEffect, useState } from "react";
import { deleteAttributeService, getAttributesService } from "../../../services/attributesService";
import { Alert, Confirm } from "../../../utils/alert";
import ShowInFilter from "./ShowInFilter";
import TableSkeleton from "../../../components/loadings/TableSkeleton";
import { Form, Formik } from "formik";
import FormControler from "../../../formControl/FormControler";
import Btn from "../../../components/Btn";
import { DataInfo, InitialValues, onSubmit, ValidationSchema } from "./core";

const Attributes = () => {
  const { state } = useLocation();
  const [data , setData] = useState([]);
  const [reinitialize , setReinitialize] = useState(null);
  const [attributeToEdit , setAttributeToEdit] = useState(null);
  const [loading , setLoading] = useState(true);
  const optionalCols = [
    {
      title: 'نمایش در فیلتر ها',
      elements: (data)=><ShowInFilter data={data}/>
    },
    {
      title: 'عملیات',
      elements: (data)=><AttributesTableActions data={data} setAttributeToEdit={setAttributeToEdit} attributeToEdit={attributeToEdit} handleDeleteAtribute={handleDeleteAtribute}/>
    }
  ]
  const handleGetAttributes = async (id)=>{
    setLoading(true)
    try{
      const res = await getAttributesService(id);
      if(res.status === 200){
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
  const handleDeleteAtribute = async (delData)=>{
    const confirmRes = (await Confirm('حذف ویژگی!',`آیا از حذف ویژگی "${delData.title}" اطمینان دارید؟`,'warning','حذف دسته','لغو'));
    if(confirmRes){
      setLoading(true)
      try{
        const res = await deleteAttributeService(delData.id);
        if(res.status === 200){
          Alert('success',`ویژگی ${delData.title} با موفقیت حذف شد.`);
          setData(prevData=>[...prevData].filter(item=>item.id !== delData.id));
          setLoading(false)
        }else{
          Alert('error' , 'ویژگی حذف نشد!')
        }
      }catch(error){
        Alert('error' , error)
      }
    }
  }
  useEffect(()=>{
    handleGetAttributes(state.id)
  },[state])
  useEffect(()=>{
    if(attributeToEdit){
      setReinitialize({
        title: attributeToEdit.title,
        unit: attributeToEdit.unit,
        in_filter: attributeToEdit.in_filter ? true : false,
      });
    }else{
      setReinitialize(null);
    }
  },[attributeToEdit])
  return (
    <>
        <div className="relative">
          <b><h1 className="text-3xl text-center my-4 text-slate-800">مدیریت ویژگی های دسته <span className="text-palete-2-600">"{state.title}"</span></h1></b>
          <Formik
          initialValues={reinitialize || InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={(values , actions)=>onSubmit(values , actions , setData , state , setLoading , attributeToEdit , setAttributeToEdit)}
          enableReinitialize
          >
            {
              Formik=>{
                return(
                  <Form>
                    <section dir="rtl" className={`w-full flex justify-around gap-5 mx-auto py-5 px-12 mt-5 rounded-sm ${attributeToEdit ? 'ring-2 ring-palete-4-500-1' : ''}`}>
                      <div className="w-full">
                        <FormControler
                        control={'input'}
                        formik={Formik}
                        name={'title'}
                        type={'text'}
                        label={'عنوان :'}
                        placeholder={'عنوان ویژگی را وارد کنید...'}
                        />
                      </div>
                      <div className="w-full">
                      <FormControler
                        control={'input'}
                        formik={Formik}
                        name={'unit'}
                        type={'text'}
                        label={'واحد :'}
                        placeholder={'واحد ویژگی را وارد کنید...'}
                        />
                      </div>
                      <div className="w-1/2">
                        <FormControler
                        control={'switch'}
                        formik={Formik}
                        name={'in_filter'}
                        label={'نمایش در فیلتر ها :'}
                        isActive={false}
                        switchLabel={Formik.values.attributeInFilter ? 'بله' : 'خیر'}
                        />
                      </div>
                      <div>
                        <FormControler
                        control={'button'}
                        formik={Formik}
                        btnTxt={attributeToEdit ? 'ویرایش' : 'افزودن'}
                        />
                      </div>
                      {
                        attributeToEdit ? (
                          <div>
                            <span onClick={()=>setAttributeToEdit(null)}><Btn btnTxt={'لغو'}/></span>
                          </div>
                        ) : null
                      }
                    </section>
                  </Form>
                )
              }
            }
          </Formik>
        </div>
        <div className="my-5">
          <hr /><hr />
        </div>
        <section dir="rtl" className="px-6">
          {
            !loading ? (
              <PaginationTable data={data} dataInfo={DataInfo} actionCol={optionalCols} searchable={true} searchParam={{title: 'title' , placeholder: "ویژگی مورد نظر را جستجو کنید..."}} hasBtn={false} rowInPage={10} hasBackBtn={true}/>
            ) : (
              <TableSkeleton/>
            )
          }
        </section>
    </>
  );
};

export default Attributes;
