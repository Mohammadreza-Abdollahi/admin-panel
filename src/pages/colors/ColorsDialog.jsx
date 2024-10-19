import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import { Form, Formik } from "formik";
import { openCloseDialog } from "../../redux/colors/colorsSlice";
import FormControler from "../../formControl/FormControler";
import { initialValues, onSubmit, validationSchema } from "./core";

const ColorsDialog = ({setData , setLoading}) => {
  const dispatch = useDispatch();
  const { dialogIsOpen } = useSelector((state) => state.colorsSlice);
  return (
    <>
      <ModalContainer>
        <MiniDialog
          isOpen={dialogIsOpen}
          maxWidth={"md"}
          myDispatch={openCloseDialog}
          dialogTitle={"افزودن رنگ جدید"}
          btnText={"بستن"}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values , actions)=>onSubmit(values , actions , setData , setLoading , dispatch)}
          >
            {
              Formik=>{
                console.log(Formik.values);
                return(
                    <Form>
                      <section dir="rtl">
                        <div className="mb-5">
                          <FormControler
                            control={'input'}
                            formik={Formik}
                            name={'title'}
                            type={'text'}
                            label={'عنوان رنگ :'}
                            placeholder={'نام رنگ را وارد کنید...'}
                          />
                        </div>
                        <div className="mb-5">
                          <FormControler
                            control={'color'}
                            formik={Formik}
                            name={'code'}
                            label={'انتخاب  رنگ :'}
                          />
                        </div>
                        <div className="mt-3 mb-1">
                          <FormControler
                            control={'button'}
                            formik={Formik}
                            btnTxt={'افزودن'}
                            width={'w-full'}
                          />
                        </div>
                      </section>
                    </Form>
                )
              }
            }
          </Formik>
        </MiniDialog>
      </ModalContainer>
    </>
  );
};

export default ColorsDialog;
