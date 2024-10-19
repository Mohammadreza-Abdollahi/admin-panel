import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import { Form, Formik } from "formik";
import { openCloseDialog } from "../../redux/colors/colorsSlice";
import FormControler from "../../formControl/FormControler";
import { initialValues, onSubmit, validationSchema } from "./core";
import { useEffect, useState } from "react";

const ColorsDialog = ({ setData, setLoading, dataToEdit, setDataToEdit }) => {
  const [reinitialize, setReinitialize] = useState(null);
  const dispatch = useDispatch();
  const { dialogIsOpen } = useSelector((state) => state.colorsSlice);
  useEffect(() => {
    if (dataToEdit) {
      setReinitialize({
        title: dataToEdit.title,
        code: dataToEdit.code,
      });
    } else {
      setReinitialize(null);
    }
  }, [dataToEdit]);
  useEffect(()=>{
    if(!dialogIsOpen){
      setDataToEdit(null);
      setReinitialize(null);
    }
  },[dialogIsOpen])
  return (
    <>
      <ModalContainer>
        <MiniDialog
          isOpen={dialogIsOpen}
          maxWidth={"md"}
          myDispatch={openCloseDialog}
          dialogTitle={dataToEdit ? `ویرایش رنگ ${dataToEdit.title}` : "افزودن رنگ جدید"}
          btnText={"بستن"}
        >
          <Formik
            initialValues={reinitialize || initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              onSubmit(
                values,
                actions,
                setData,
                setLoading,
                dispatch,
                dataToEdit,
                setDataToEdit,
                setReinitialize
              )
            }
            enableReinitialize
          >
            {(Formik) => {
              console.log(Formik.values);
              return (
                <Form>
                  <section dir="rtl">
                    <div className="mb-5">
                      <FormControler
                        control={"input"}
                        formik={Formik}
                        name={"title"}
                        type={"text"}
                        label={"عنوان رنگ :"}
                        placeholder={"نام رنگ را وارد کنید..."}
                      />
                    </div>
                    {
                      dataToEdit ? (
                        <div className="m-auto w-full h-14 rounded-full mb-5 border-2 border-white outline outline-2 outline-palete-2-500" style={{backgroundColor: `${dataToEdit.code}`}}></div>
                      ) : null
                    }
                    <div className="mb-5">
                      <FormControler
                        control={"color"}
                        formik={Formik}
                        name={"code"}
                        label={dataToEdit ? 'ویرایش رنگ :' : "انتخاب  رنگ :"}
                      />
                    </div>
                    <div className="mt-3 mb-1">
                      <FormControler
                        control={"button"}
                        formik={Formik}
                        btnTxt={dataToEdit ? 'ویرایش' : "افزودن"}
                        width={"w-full"}
                      />
                    </div>
                  </section>
                </Form>
              );
            }}
          </Formik>
        </MiniDialog>
      </ModalContainer>
    </>
  );
};

export default ColorsDialog;
