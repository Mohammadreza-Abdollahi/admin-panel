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
  useEffect(() => {
    handleGetParentCategories(setParentCategores, setLoading);
  }, []);
  useEffect(()=>{
    console.log(categories);
  },[categories])
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
            console.log(Formik);
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
                      <ErrorMess formik={Formik} name={'category_ids'} />
                    ) : null}
                  </section>
                </div>
                <section></section>
                <div className="flex justify-between gap-5">
                  <div className="my-5 w-full">
                    <Input
                      name={"ProductTitle"}
                      type={"text"}
                      label={"عنوان :"}
                      placeholder={"عنوان محصول را وارد کنید..."}
                    />
                  </div>
                  <div className="my-5 w-full">
                    <Input
                      name={"ProductPrice"}
                      type={"number"}
                      label={"قیمت :"}
                      placeholder={"قیمت محصول را وارد کنید..."}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="my-5 w-full">
                    <Input
                      name={"ProductWeight"}
                      type={"number"}
                      label={"وزن :"}
                      placeholder={"وزن محصول (کیلوگرم) را وارد کنید..."}
                    />
                  </div>
                  <div className="my-5 w-full">
                    <Input
                      name={"ProductBrand"}
                      type={"text"}
                      label={"برند :"}
                      placeholder={"برند محصول را وارد کنید..."}
                    />
                  </div>
                </div>
                <div className="my-5 w-full">
                  <Input
                    name={"ProductColor"}
                    type={"text"}
                    label={"رنگ :"}
                    placeholder={"رنگ محصول را وارد کنید..."}
                  />
                </div>
                <section>
                  <ColorBadge color={"red"} />
                  <ColorBadge color={"blue"} />
                  <ColorBadge color={"orange"} />
                </section>
                <div className="my-5">
                  <Input
                    name={"ProductGaranty"}
                    type={"text"}
                    label={"گارانتی :"}
                    placeholder={"نام گارانتی محصول را وارد کنید..."}
                  />
                </div>
                <section>
                  <TextBadge title={"گارانتی فلان"} />
                  <TextBadge title={"گارانتی فلان"} />
                </section>
                <div className="my-5">
                  <TextareaInput
                    name={"ProductExplanation"}
                    row={4}
                    type={"text"}
                    label={"توضیحات :"}
                    placeholder={"توضیحات را وارد کنید..."}
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <div className="my-5 w-full">
                    <FileInput name={"ProductPicture"} label={"تصویر :"} />
                  </div>
                  <div className="my-5 w-full text-center">
                    <SwitchInput
                      name={"ProductActive"}
                      label={"وضعیت :"}
                      switchLabel={"فعال"}
                      isActive={false}
                    />
                  </div>
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
