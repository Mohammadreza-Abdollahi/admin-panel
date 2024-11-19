import { Form, Formik } from "formik";
import {
  handleChangeParentCategories,
  handleGetBrands,
  handleGetColors,
  handleGetGuaranties,
  handleGetParentCategories,
  initialValues,
  onSubmit,
  validationSchema,
} from "./core";
import ProductsFormSkeleton from "../../components/loadings/ProductsFormSkeleton";
import BackButton from "../../components/BackButton";
import { useEffect, useState } from "react";
import FormControler from "../../formControl/FormControler";
import OneFiledSkeleton from "../../components/loadings/OneFieldSkeleton";
import ErrorMess from "../../formControl/ErrorMess";
import { useLocation, useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [loading, setLoading] = useState(true);
  const [parentCategories, setParentCategores] = useState([]);
  const [categories, setCategores] = useState([]);
  const [brands, setBrands] = useState([]);
  const [guaranties, setGuaranties] = useState([]);
  const [colors, setColors] = useState([]);
  const [reinitialValues, setReinitialValues] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGuaranties, setSelectedGuaranties] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const dataToEdit = location.state?.data;
  useEffect(() => {
    handleGetParentCategories(setParentCategores, setLoading);
    handleGetBrands(setBrands, setLoading);
    handleGetGuaranties(setGuaranties, setLoading);
    handleGetColors(setColors, setLoading);
    if (dataToEdit) {
      for(const key in dataToEdit){
        if(dataToEdit[key] === null) dataToEdit[key] = ""
      };
      setReinitialValues({
        ...dataToEdit,
        categories: dataToEdit.categories?.map((item) => item.id).join("-"),
        colors: dataToEdit.colors?.map((item) => item.id).join("-"),
        guarantees: dataToEdit.guarantees?.map((item) => item.id).join("-"),
      });
      handleGetSelecteds();
      console.log(reinitialValues);
    }
  }, [dataToEdit]);
  const handleGetSelecteds = () => {
    setSelectedCategories(
      dataToEdit.categories.map((item) => {
        return { id: item.id, title: item.title };
      })
    );
    setSelectedGuaranties(
      dataToEdit.guarantees.map((item) => {
        return { id: item.id, title: item.title };
      })
    );
    setSelectedColors(
      dataToEdit.colors.map((item) => {
        return { id: item.id, title: item.title, code: item.code };
      })
    );
  };
  return (
    <>
      <section dir="rtl" className="w-2/3 mx-auto pb-5 overflow-y-auto px-10">
        <h1 className="text-3xl text-center my-4 text-slate-800 pb-5">
          <b>
            {dataToEdit ? (
              <>
                <span>ویرایش {dataToEdit.title}</span>
              </>
            ) : (
              "افزودن محصول جدید"
            )}
          </b>
        </h1>
        <Formik
          initialValues={reinitialValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, dataToEdit, navigate)
          }
          enableReinitialize
        >
          {(Formik) => {
            return loading ? (
              <ProductsFormSkeleton />
            ) : (
              <Form>
                <div className="my-5 w-full">
                  <section className="flex justify-between gap-3">
                    <div className="w-full">
                      {parentCategories.length > 0 ? (
                        <FormControler
                          control={"select"}
                          formik={Formik}
                          name={"cat1"}
                          data={parentCategories}
                          dataValue={"id"}
                          dataTitle={"title"}
                          label={"دسته بتدی های والد:"}
                          onChangeFunc={(id, formik) =>
                            handleChangeParentCategories(
                              id,
                              formik,
                              setCategores
                            )
                          }
                        />
                      ) : (
                        <OneFiledSkeleton />
                      )}
                    </div>
                    <div>
                      <BackButton btnTxt={"بازگشت"} />
                    </div>
                  </section>
                  <section className="mt-7"></section>
                  <section className="my-5">
                    {categories.length > 0 || selectedCategories.length > 0 ? (
                      <FormControler
                        control={"searchableSelect"}
                        formik={Formik}
                        name={"category_ids"}
                        data={categories}
                        label={"دسته بندی :"}
                        initialItems={selectedCategories}
                      />
                    ) : null}
                    {Formik.errors.category_ids ? (
                      <ErrorMess formik={Formik} name={"category_ids"} />
                    ) : null}
                  </section>
                </div>
                <section></section>
                <div className="flex justify-between gap-5">
                  <div className="my-5 w-full">
                    <FormControler
                      control={"input"}
                      formik={Formik}
                      name={"title"}
                      type={"text"}
                      label={"عنوان :"}
                      placeholder={"عنوان محصول را وارد کنید..."}
                    />
                  </div>
                  <div className="my-5 w-full">
                    <FormControler
                      control={"input"}
                      formik={Formik}
                      name={"price"}
                      type={"number"}
                      label={"قیمت :"}
                      placeholder={"قیمت محصول را وارد کنید..."}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="my-5 w-full">
                    <FormControler
                      control={"input"}
                      formik={Formik}
                      name={"weight"}
                      type={"number"}
                      label={"وزن :"}
                      placeholder={"وزن محصول (گرم) را وارد کنید..."}
                    />
                  </div>
                  <div className="my-5 w-full">
                    {brands.length > 0 ? (
                      <FormControler
                        formik={Formik}
                        control={"select"}
                        name={"brand_id"}
                        label={"برند :"}
                        data={brands}
                        dataValue={"id"}
                        dataTitle={"title"}
                      />
                    ) : (
                      <OneFiledSkeleton />
                    )}
                  </div>
                </div>
                <div className="my-5 w-full">
                  {colors.length > 0 ? (
                    <FormControler
                      control={"colorSearchableSelect"}
                      formik={Formik}
                      name={"color_ids"}
                      data={colors}
                      label={"رنگ :"}
                      initialItems={selectedColors}
                    />
                  ) : (
                    <OneFiledSkeleton />
                  )}
                  {Formik.errors.guarantee_ids ? (
                    <ErrorMess formik={Formik} name={"category_ids"} />
                  ) : null}
                </div>
                <div className="my-5">
                  {guaranties.length > 0 ? (
                    <FormControler
                      control={"searchableSelect"}
                      formik={Formik}
                      name={"guarantee_ids"}
                      data={guaranties}
                      label={"گارانتی :"}
                      initialItems={selectedGuaranties}
                    />
                  ) : (
                    <OneFiledSkeleton />
                  )}
                  {Formik.errors.guarantee_ids ? (
                    <ErrorMess formik={Formik} name={"category_ids"} />
                  ) : null}
                </div>
                <div className="my-5">
                  {/* <FormControler
                    control={"textarea"}
                    formik={Formik}
                    name={"descriptions"}
                    row={4}
                    label={"توضیحات :"}
                    placeholder={"توضیحات را وارد کنید..."}
                  /> */}
                  <FormControler
                    control={"ckeditor"}
                    formik={Formik}
                    name={"descriptions"}
                    row={4}
                    label={"توضیحات :"}
                    placeholder={"توضیحات را وارد کنید..."}
                  />
                </div>
                <div className="my-5">
                  <FormControler
                    control={"textarea"}
                    formik={Formik}
                    name={"short_descriptions"}
                    row={4}
                    label={"توضیحات کوتاه :"}
                    placeholder={"توضیحات کوتاه را وارد کنید..."}
                  />
                </div>
                <div className="my-5">
                  <FormControler
                    control={"textarea"}
                    formik={Formik}
                    name={"cart_descriptions"}
                    row={4}
                    label={"توضیحات سبد :"}
                    placeholder={"توضیحات سبد را وارد کنید..."}
                  />
                </div>
                <div className="my-5 w-full">
                  {!dataToEdit ? (
                    <FormControler
                      control={"file"}
                      formik={Formik}
                      name={"image"}
                      label={"تصویر"}
                    />
                  ) : null}
                </div>
                <div className="my-5 w-full text-center">
                  {!dataToEdit ? (
                    <FormControler
                      control={"input"}
                      formik={Formik}
                      name={"alt_image"}
                      type={"text"}
                      label={"توضیحات تصویر :"}
                      placeholder={"توضیحات تصویر را وارد کنید..."}
                    />
                  ) : null}
                </div>
                <div className="mt-5 w-full text-center">
                  <FormControler
                    control={"input"}
                    formik={Formik}
                    name={"keywords"}
                    type={"text"}
                    label={"کلمات کلیدی :"}
                    placeholder={"کلمات کلیدی را وارد کنید..."}
                  />
                </div>
                <span className="block mt-2 mb-5 mr-2 text-slate-600">
                  کلمات کلیدی را یکی یکی وارد و میان انها از "-" استفاده کنید.
                </span>
                <div className="my-5 w-full">
                  <FormControler
                    control={"input"}
                    formik={Formik}
                    name={"stock"}
                    type={"number"}
                    label={"موجودی :"}
                    placeholder={"موجودی محصول را وارد کنید..."}
                  />
                </div>
                <div className="my-5 w-full">
                  <FormControler
                    control={"input"}
                    formik={Formik}
                    name={"discount"}
                    type={"number"}
                    label={"درصد تخفیف :"}
                    placeholder={"درصد تخفیف برای محصول را وارد کنید..."}
                  />
                </div>
                <div className="my-5 flex text-center">
                  <FormControler
                    control={"button"}
                    formik={Formik}
                    btnTxt={dataToEdit ? "ویرایش" : "افزودن"}
                    width={"w-full"}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </>
  );
};

export default AddProduct;
