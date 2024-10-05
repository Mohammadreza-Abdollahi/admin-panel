import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import { openClose } from "../../redux/category/categoryDialog";
import FormControler from "../../formControl/FormControler";
import { Form, Formik } from "formik";
import { getCategoriesService } from "../../services/categoryServices";
import { useEffect, useState } from "react";
import { Alert } from "../../utils/alert";
import * as Yup from 'yup';

const initialValues = {
  parent_id: '',
  title: '',
  descriptions: '',
  image: null,
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
const onSubmit = (values)=>{
  console.log(values);
}
const CategoryDialog = () => {
  const [selectData , setSelectData] = useState([]);
  const { isOpen } = useSelector((state) => state.categoryDialog);
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
  useEffect(()=>{
    handleGetCategories()
  },[])
  return (
    <>
      <FullScreenDialog
        dialogTitle={"افزودن دسته محصولات"}
        open={isOpen}
        myDispatch={openClose}
      >
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
          {
            Formik=>{
              return(
                <Form>
                  <section dir="rtl" className="w-2/5 mx-auto py-5">
                    <div className="my-5">
                      <FormControler
                      formik={Formik}
                      control={'select'}
                      name={'parent_id'}
                      label={'دسته والد :'}
                      data={selectData}
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
