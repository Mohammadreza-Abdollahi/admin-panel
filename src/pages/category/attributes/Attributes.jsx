import PaginationTable from "../../../components/PaginationTable";
import { useLocation } from "react-router-dom";
import { attributesDataInfo } from "../core";
import AttributesTableActions from "./AttributesTableActions";
import { useEffect, useState } from "react";
import { createAttributeService, getAttributesService } from "../../../services/attributesService";
import { Alert } from "../../../utils/alert";
import ShowInFilter from "./ShowInFilter";
import TableSkeleton from "../../../components/loadings/TableSkeleton";
import { Form, Formik } from "formik";
import FormControler from "../../../formControl/FormControler";
import * as Yup from 'yup'

const initialValues = {
  title: '',
  unit: '',
  in_filter: false,
};
const validationSchema = Yup.object({
  title: Yup.string()
            .required('عنوان ویژگی نمیتواند خالی باشد!')
            .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  unit: Yup.string()
           .required('واحد ویژگی نمیتواند خالی باشد!')
           .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  in_filter: Yup.boolean()
});
const onSubmit = async (values , actions , setData , state , setLoading)=>{
  setLoading(true);
  values = {
    ...values,
    in_filter: values.in_filter ? 1 : 0
  }
  try{
    const res = await createAttributeService(state.id , values);
    if(res.status === 201){
      console.log(res);
      Alert('success' , "ویژگی با موفقیت ایجاد شد!");
      setData(prev=>[...prev , res.data.data]);
      setLoading(false);
      actions.resetForm();
      actions.setSubmitting(false);
    }else{
      Alert('error' , "افزودن ویژگی ناموفق بود!");
      setLoading(false)
      actions.setSubmitting(false);
    }
  }catch(error){
    Alert('success' , error);
    actions.setSubmitting(false);
    setLoading(false)
  }
}

const Attributes = () => {
  const { state } = useLocation();
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
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
          <b><h1 className="text-3xl text-center my-4 text-slate-800">مدیریت ویژگی های دسته <span className="text-palete-2-600">"{state.title}"</span></h1></b>
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values , actions)=>onSubmit(values , actions , setData , state , setLoading)}
          >
            {
              Formik=>{
                return(
                  <Form>
                    <section dir="rtl" className="w-full flex justify-around gap-5 mx-auto py-5 px-12 mt-5">
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
                        btnTxt={'افزودن'}
                        />
                      </div>
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
              <PaginationTable data={data} dataInfo={attributesDataInfo} actionCol={optionalCols} searchable={true} searchParam={{title: 'title' , placeholder: "ویژگی مورد نظر را جستجو کنید..."}} hasBtn={false} rowInPage={10} hasBackBtn={true}/>
            ) : (
              <TableSkeleton/>
            )
          }
        </section>
    </>
  );
};

export default Attributes;
