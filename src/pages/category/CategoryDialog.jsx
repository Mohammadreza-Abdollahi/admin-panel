import TextareaInput from "../../components/TextareaInput";
import FileInput from "../../components/FileInput";
import SwitchInput from "../../components/SwitchInput";
import Btn from "../../components/Btn";
import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import { openClose } from "../../redux/category/categoryDialog";
import TextInput from "../../components/Input";
import FormControler from "../../formControl/FormControler";
import { Form, Formik } from "formik";

const initialValues = {
  parent_id: '',
  title: '',
  descriptions: '',
  image: null,
  is_active: false,
  show_in_menu: false,
};
const validationSchema = ''
const onSubmit = (values)=>{
  console.log(values);
}

const CategoryDialog = () => {
  const { isOpen } = useSelector((state) => state.categoryDialog);
  const data = [
    {id: 1 , title: 'aaa'},
    {id: 2 , title: 'bbb'},
    {id: 3 , title: 'ccc'},
  ]
  return (
    <>
      <FullScreenDialog
        dialogTitle={"افزودن دسته محصولات"}
        open={isOpen}
        myDispatch={openClose}
      >
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        >
          {
            Formik=>{
              console.log(Formik.values)
              return(
                <Form>
                  <section dir="rtl" className="w-2/5 mx-auto py-5">
                    <div className="my-5">
                      <FormControler
                      formik={Formik}
                      control={'select'}
                      name={'parent_id'}
                      label={'دسته والد :'}
                      data={data}
                      dataValue={'id'}
                      dataTitle={'title'}
                      />
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
                    <div className="my-5 text-center flex justify-between">
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
                        switchLabel={Formik.values.is_active ? 'بله' : 'خیر'}
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
