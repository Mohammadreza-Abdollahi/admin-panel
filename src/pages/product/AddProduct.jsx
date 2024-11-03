import TextareaInput from "../../components/TextareaInput";
import FileInput from "../../components/FileInput";
import SwitchInput from "../../components/SwitchInput";
import Btn from "../../components/Btn";
import Input from "../../components/Input";
import TextBadge from "../../components/TextBadge";
import ColorBadge from "../../components/ColorBadge";
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
const AddProduct = () => {
  const [loading, setLoading] = useState(true);
  const [parentCategories, setParentCategores] = useState([]);
  const [categories, setCategores] = useState([]);
  const [brands, setBrands] = useState([]);
  const [guaranties, setGuaranties] = useState([]);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    handleGetParentCategories(setParentCategores, setLoading);
    handleGetBrands(setBrands, setLoading);
    handleGetGuaranties(setGuaranties, setLoading);
    handleGetColors(setColors, setLoading);
  }, []);
  useEffect(() => {
    console.log(guaranties);
  }, [guaranties]);
  return (
    <>
      <section dir="rtl" className="w-2/3 mx-auto pb-5 overflow-y-auto px-10">
        <h1 className="text-3xl text-center my-4 text-slate-800 pb-5">
          <b>افزودن محصول جدید</b>
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => onSubmit(values, actions)}
        >
          {(Formik) => {
            console.log(Formik.values);
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
                    {categories.length > 0 ? (
                      <FormControler
                        control={"searchableSelect"}
                        formik={Formik}
                        name={"category_ids"}
                        data={categories}
                        label={"دسته بندی :"}
                        initialItems={[]}
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
                      initialItems={[]}
                    />
                  ) : <OneFiledSkeleton/>}
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
                      initialItems={[]}
                    />
                  ) : <OneFiledSkeleton/>}
                  {Formik.errors.guarantee_ids ? (
                    <ErrorMess formik={Formik} name={"category_ids"} />
                  ) : null}
                </div>
                <div className="my-5">
                  <FormControler
                    control={"textarea"}
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
                  <FileInput name={"ProductPicture"} label={"تصویر :"} />
                </div>
                <div className="my-5 w-full text-center">
                  <FormControler
                    control={"input"}
                    formik={Formik}
                    name={"alt_image"}
                    type={"text"}
                    label={"توضیحات تصویر :"}
                    placeholder={"توضیحات تصویر را وارد کنید..."}
                  />
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
                  <Btn btnTxt={"افزودن"} width={"w-full"} />
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
