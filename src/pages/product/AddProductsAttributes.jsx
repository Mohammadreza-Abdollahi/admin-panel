import Btn from "../../components/Btn";
import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import { addProductsAttributesOpenClose } from "../../redux/product/productDialog";

const AddProductsAttributes = () => {
  const { addAttr } = useSelector((state) => state.productDialog);
  return (
    <>
      <FullScreenDialog
        dialogTitle={"افزودن ویژگی به محصول"}
        open={addAttr}
        myDispatch={addProductsAttributesOpenClose}
      >
        <section dir="rtl" className="mx-auto w-3/6 py-5 mt-5">
          <div className="w-full my-5">
            <Input label={'ویژگی اول'} secodeLabel={'کیلو'} name={'AttrTitle'} placeholder={'عنوان ویژگی جدید را وارد کنید...'} type={'text'}/>
          </div>
          <div className="w-full my-5">
            <Input label={'ویژگی دوم'} secodeLabel={'لیتر'} name={'AttrUnit'} placeholder={'عنوان ویژگی جدید را وارد کنید...'} type={'text'}/>
          </div>
          <div className="w-full my-5">
            <Input label={'ویژگی سوم'} secodeLabel={'امپر'} name={'AttrUnit'} placeholder={'عنوان ویژگی جدید را وارد کنید...'} type={'text'}/>
          </div>
          <div>
            <Btn btnTxt={'افزودن'} width={'w-full'}/>
          </div>
        </section>
      </FullScreenDialog>
    </>
  );
};

export default AddProductsAttributes;
