import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import { openCloseDialog, setEditId } from "../../redux/brands/brandsSlice";
import FormControler from "../../formControl/FormControler";
import { Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "./core";
import { useEffect, useState } from "react";
import { getBrandByIdService } from "../../services/brandsService";
import { Alert } from "../../utils/alert";
import CategoryFormSkeleton from "../../components/loadings/CategoryFormSkeleton";
import BrandsFormSkeleton from "../../components/loadings/BrandsFormSkeleton";

const BrandsDialog = ({ setData, setLoading }) => {
  const { dialogIsOpen , editId } = useSelector((state) => state.brandsSlice);
  const [formLoading , setFormLoading] = useState(true);
  const [reinitialize , setReinitialize] = useState({
    original_name: '',
    persian_name: '',
    descriptions: '',
    logo: null
  });
  const dispatch = useDispatch();
  const handleGetBrandById = async ()=>{
      setFormLoading(true)
    try{
        const res = await getBrandByIdService(editId);
        if(res.status === 200){
            setReinitialize({
                original_name : res.data.data.original_name,
                persian_name : res.data.data.persian_name,
                descriptions : res.data.data.descriptions,
                logo : res.data.data.logo
            });
            setFormLoading(false);
        }else{
            Alert('error','برند دریافت نشد!');
            setFormLoading(false);
        }
    }catch(error){
        Alert('error',error);
        setFormLoading(false);
    };
  };
  useEffect(()=>{
    if(!dialogIsOpen){
        dispatch(setEditId(null));
    }
  },[dialogIsOpen]);
  useEffect(()=>{
    if(editId){
        handleGetBrandById(editId);
    }else{
        setReinitialize(null)
    }
  },[editId])
  console.log(reinitialize);
  return (
    <>
      <ModalContainer>
        <MiniDialog
          isOpen={dialogIsOpen}
          maxWidth={"md"}
          myDispatch={openCloseDialog}
          dialogTitle={editId ? `ویرایش برند با شناسه ( ${editId} )` : "افزودن برند جدید"}
          btnText={"بستن"}
        >
          <Formik
            initialValues={reinitialize || initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, setLoading, setData, dispatch , editId)
            }
            enableReinitialize
          >
            {(Formik) => {
              // console.log(Formik.values);
              return (
                <Form>
                  {
                    formLoading ? (
                        <BrandsFormSkeleton/>
                    ) : (
                        <section dir="rtl">
                            <div className="mb-5">
                            <FormControler
                                control={"input"}
                                name={"original_name"}
                                formik={Formik}
                                label={"عنوان لاتین برند :"}
                                placeholder={"عنوان لاتین برند را وارد کنید..."}
                            />
                            </div>
                            <div className="mb-5">
                            <FormControler
                                control={"input"}
                                name={"persian_name"}
                                formik={Formik}
                                label={"عنوان فارسی برند :"}
                                placeholder={"عنوان فارسی برند را وارد کنید..."}
                            />
                            </div>
                            <div className="mb-5">
                            <FormControler
                                control={"textarea"}
                                name={"descriptions"}
                                formik={Formik}
                                label={"توضیحات برند :"}
                                placeholder={"توضیحات برند را وارد کنید..."}
                                row={5}
                            />
                            </div>
                            <div className="mb-5">
                            <FormControler
                                control={"file"}
                                name={"logo"}
                                formik={Formik}
                                label={"لوگو برند :"}
                            />
                            </div>
                            <div className="mt-3 mb-1">
                            <FormControler
                                control={"button"}
                                formik={Formik}
                                btnTxt={editId ? 'ویرایش' : "افزودن"}
                                width={"w-full"}
                            />
                            </div>
                        </section>
                    )
                  }
                </Form>
              );
            }}
          </Formik>
        </MiniDialog>
      </ModalContainer>
    </>
  );
};

export default BrandsDialog;
