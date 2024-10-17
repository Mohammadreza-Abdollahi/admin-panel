import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import Btn from "../../components/Btn";
import FormControler from "../../formControl/FormControler";
import { Form, Formik } from "formik";
import { initialValues, lengthUnits, onSubmit, validationSchema } from "./core";
import { openCloseDialog } from "../../redux/guaranties/guarantiesSlice";

const GuarantiesDialog = ({ setData, setLoading }) => {
  const { dialogIsOpen } = useSelector((state) => state.guarantiesSlice);
  const dispatch = useDispatch();
  return (
    <>
      <ModalContainer>
        <MiniDialog
          isOpen={dialogIsOpen}
          maxWidth={"md"}
          myDispatch={openCloseDialog}
          dialogTitle={"افزودن گارانتی جدید"}
          btnText={"بستن"}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, setData, setLoading, dispatch)
            }
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
                        label={"عنوان"}
                        placeholder={"نام گارانتی را وارد کنید..."}
                      />
                    </div>
                    <div className="mb-5">
                      <FormControler
                        control={"textarea"}
                        formik={Formik}
                        name={"descriptions"}
                        row={5}
                        label={"توضیحات"}
                        placeholder={"نام گارانتی را وارد کنید..."}
                      />
                    </div>
                    <div className="mb-5 flex gap-5">
                      <div className="w-1/3">
                        <FormControler
                          control={"input"}
                          formik={Formik}
                          name={"length"}
                          type={"number"}
                          label={"زمان"}
                          placeholder={"مدت زمان را وارد کنید..."}
                        />
                      </div>
                      <div className="w-2/3">
                        <FormControler
                          control={"select"}
                          formik={Formik}
                          name={"length_unit"}
                          label={"واحد زمان"}
                          data={lengthUnits}
                          dataValue={"faTitle"}
                          dataTitle={"faTitle"}
                          defaultValue={false}
                        />
                      </div>
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
              );
            }}
          </Formik>
        </MiniDialog>
      </ModalContainer>
    </>
  );
};

export default GuarantiesDialog;
