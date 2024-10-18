import FullScreenDialog from "../../components/FullScreenDialog";
import { useDispatch, useSelector } from "react-redux";
import { openCloseDialog, setEditId } from "../../redux/category/categorySlice";
import FormControler from "../../formControl/FormControler";
import { Form, Formik } from "formik";
import { getCategoriesService, getCategoryByIdService } from "../../services/categoryServices";
import { useEffect, useState } from "react";
import { Alert } from "../../utils/alert";
import { useParams } from "react-router-dom";
import CategoryFormSkeleton from "../../components/loadings/CategoryFormSkeleton";
import { initialValues , validationSchema , onSubmit } from "./core";

const CategoryDialog = ({setForceRender}) => {
  const [selectData , setSelectData] = useState([]);
  const { dialogIsOpen , editId } = useSelector((state) => state.categorySlice);
  const [reinitialize , setReinitialize] = useState(null);
  const [loading , setLoading] = useState(true);
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
    setLoading(true);
    try{
      const res = await getCategoryByIdService(id);
      if(res.status === 200){
        const oldData = res.data.data;
        setReinitialize({
          parent_id: oldData.parent_id || '',
          title: oldData.title,
          descriptions: oldData.descriptions,
          image: '',
          is_active: oldData.is_active ? true : false,
          show_in_menu: oldData.show_in_menu ? true : false,
        })
        setLoading(false)    
      }else{
        Alert('error' , 'دسته دریافت نشد!');
      }
    }catch(error){
      Alert('error' , error);
    }
  }
  useEffect(()=>{
    handleGetCategories();
  },[dialogIsOpen])
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
      dispatch(setEditId(null))
    }else if(dialogIsOpen){
      if(!editId){
        setLoading(false)
      }
    }
  },[dialogIsOpen])
  return (
    <>
      <FullScreenDialog
        dialogTitle={editId ? `ویرایش دسته با شناسه ${editId}` : `افزودن دسته محصولات`}
        open={dialogIsOpen}
        myDispatch={openCloseDialog}
      >
        <Formik
        initialValues={reinitialize || initialValues}
        validationSchema={validationSchema}
        onSubmit={(values , actions)=>onSubmit(values , actions , setForceRender , dispatch , editId)}
        enableReinitialize
        >
          {
            Formik=>{
              return(
                loading ? (
                  <CategoryFormSkeleton/>
                ) : (
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
                      {
                        !editId ? (
                          <div className="my-5">
                            <FormControler
                            control={'file'}
                            formik={Formik}
                            name={'image'}
                            label={'تصویر :'}
                            />
                          </div>
                        ) : null
                      }
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
                        btnTxt={editId ? 'ویرایش' : 'ذخیره'}
                        width={'w-full'}
                        />
                      </div>
                    </section>
                  </Form>
                )
              )
            }
          }
        </Formik>
      </FullScreenDialog>
    </>
  );
};

export default CategoryDialog;
