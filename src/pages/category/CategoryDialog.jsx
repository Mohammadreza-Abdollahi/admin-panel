import FullScreenDialog from "../../components/FullScreenDialog";
import { useDispatch, useSelector } from "react-redux";
import { openCloseDialog } from "../../redux/category/categorySlice";
import FormControler from "../../formControl/FormControler";
import { Form, Formik } from "formik";
import { createCategoryService, getCategoriesService, getCategoryByIdService } from "../../services/categoryServices";
import { useEffect, useState } from "react";
import { Alert } from "../../utils/alert";
import * as Yup from 'yup';
import { useParams } from "react-router-dom";

const initialValues = {
  parent_id: '',
  title: '',
  descriptions: '',
  image: '',
  is_active: false,
  show_in_menu: false,
};
const validationSchema = Yup.object({
  parent_id: Yup.string(),
  title: Yup.string()
            .required('عنوان نمیتواند خالی باشد!')
            .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  descriptions: Yup.string()
                   .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/ , 'باید تنها از حروف و اعداد استفاده شود!'),
  image: Yup.mixed()
            .test('filesize' , 'حجم فایل نمیتواند بیشتر از 50 مگابایت باشد!' , (value)=> !value ? true : value.size <= (50 * 1024))
            .test('fileformat' , 'فرمت فایل باید Jpeg باشد!' , (value)=> !value ? true : value.type === 'image/jpeg'),
  is_active: Yup.boolean(),
  show_in_menu: Yup.boolean(),
})
const onSubmit = async (values , actions , setForceRender , dispatch)=>{
  console.log(actions);
  try{
    values = {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    };
    console.log(values);
    const res = await createCategoryService(values);
    console.log(res);
    if(res.status === 201){
      Alert('success' , "دسته با موفقیت ایجاد شد!");
      dispatch(openCloseDialog());
      actions.resetForm();
      actions.setSubmitting(false);
      setForceRender(prev=>prev + 1);
    }
  }catch(error){
    Alert('error' , 'مشکلی رخ داده است!');
  }
  
}
const CategoryDialog = ({setForceRender}) => {
  const [selectData , setSelectData] = useState([]);
  const { dialogIsOpen , editId } = useSelector((state) => state.categorySlice);
  const [reinitialize , setReinitialize] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const handleGetCategories = async ()=>{
    try{
      const res = await getCategoriesService();
      if(res.status === 200){
        setSelectData(res.data.data);
      }else{
      Alert('error' , 'دسته بندی ها دریافت نشدند!');
      }
    }catch(error){
      Alert('error' , error);
    }
  }
  const handleGetCategoryById = async (id)=>{
    try{
      const res = await getCategoryByIdService(id);
      if(res.status === 200){
        const oldData = res.data.data;
        console.log(oldData);
        setReinitialize({
          parent_id: oldData.parent_id,
          title: oldData.title,
          descriptions: oldData.descriptions,
          image: '',
          is_active: oldData.is_active ? true : false,
          show_in_menu: oldData.show_in_menu ? true : false,
        })
        console.log(reinitialize);
      }else{
        Alert('error' , 'دسته دریافت نشد!');
      }
    }catch(error){
      Alert('error' , error);
    }
  }
  useEffect(()=>{
    handleGetCategories()
  },[])
  useEffect(()=>{
    if(editId){
      handleGetCategoryById(editId);
    }else if(params.categoryId){
      setReinitialize({
        ...initialValues,
        parent_id: params.categoryId
      })
    }else{
      setReinitialize(null)
    }
  },[params.categoryId , editId]);
  useEffect(()=>{
    if(!dialogIsOpen){
      setReinitialize(null)
    }
  },[dialogIsOpen])
  return (
    <>
      <FullScreenDialog
        dialogTitle={`(${editId}) افزودن دسته محصولات`}
        open={dialogIsOpen}
        myDispatch={openCloseDialog}
      >
        <Formik
        initialValues={reinitialize || initialValues}
        validationSchema={validationSchema}
        onSubmit={(values , actions)=>onSubmit(values , actions , setForceRender , dispatch)}
        enableReinitialize
        >
          {
            Formik=>{
              return(
                <Form>
                  <section dir="rtl" className="w-2/5 mx-auto py-5">
                    <div className="my-5">
                      {
                        selectData ? (
                          <FormControler
                          formik={Formik}
                          control={'select'}
                          name={'parent_id'}
                          label={'دسته والد :'}
                          data={selectData}
                          dataValue={'id'}
                          dataTitle={'title'}
                          />
                        ) : null
                      }
                    </div>
                    <div className="my-5">
                      <FormControler
                      control={'input'}
                      formik={Formik}
                      name={'title'}
                      label={"عنوان :"}
                      placeholder={"عنوان دسته را وارد کنید..."}
                      />
                    </div>
                    <div className="my-5">
                      <FormControler
                      control={'textarea'}
                      formik={Formik}
                      name={'descriptions'}
                      row={5}
                      label={"توضیحات :"}
                      placeholder={"توضیحات را وارد کنید..."}
                      />
                    </div>
                    <div className="my-5">
                      <FormControler
                      control={'file'}
                      formik={Formik}
                      name={'image'}
                      label={'تصویر :'}
                      />
                    </div>
                    <div className="my-5 text-center flex justify-around">
                      <div>
                        <FormControler
                        control={'switch'}
                        formik={Formik}
                        name={'is_active'}
                        label={"وضعیت :"}
                        switchLabel={Formik.values.is_active ? 'فعال' : 'غیرفعال'}
                        />
                      </div>
                      <div>
                        <FormControler
                        control={'switch'}
                        formik={Formik}
                        name={'show_in_menu'}
                        label={"نمایش در منو :"}
                        switchLabel={Formik.values.show_in_menu ? 'بله' : 'خیر'}
                        />
                      </div>
                    </div>
                    <div className="my-5 flex text-center">
                      <FormControler
                      control={'button'}
                      formik={Formik}
                      btnTxt={'ذخیره'}
                      width={'w-full'}
                      />
                    </div>
                  </section>
                </Form>
              )
            }
          }
        </Formik>
      </FullScreenDialog>
    </>
  );
};

export default CategoryDialog;
