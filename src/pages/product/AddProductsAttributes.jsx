import Btn from "../../components/Btn";
import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import { addProductAttributeDialogOpenClose } from "../../redux/product/productSlice";

const AddProductsAttributes = () => {
  const { attrDialogIsOpen } = useSelector((state) => state.productSlice);
  return (
    <>
      <FullScreenDialog
        dialogTitle={"افزودن ویژگی به محصول"}
        open={attrDialogIsOpen}
        myDispatch={addProductAttributeDialogOpenClose}
      >
        <section dir="rtl" className="mx-auto w-3/6 py-5 mt-5">
          <div className="w-full my-5">
            <Input
              label={"ویژگی اول"}
              secodeLabel={"کیلو"}
              name={"AttrTitle"}
              placeholder={"عنوان ویژگی جدید را وارد کنید..."}
              type={"text"}
            />
          </div>
          <div className="w-full my-5">
            <Input
              label={"ویژگی دوم"}
              secodeLabel={"لیتر"}
              name={"AttrUnit"}
              placeholder={"عنوان ویژگی جدید را وارد کنید..."}
              type={"text"}
            />
          </div>
          <div className="w-full my-5">
            <Input
              label={"ویژگی سوم"}
              secodeLabel={"امپر"}
              name={"AttrUnit"}
              placeholder={"عنوان ویژگی جدید را وارد کنید..."}
              type={"text"}
            />
          </div>
          <div>
            <Btn btnTxt={"افزودن"} width={"w-full"} />
          </div>
        </section>
      </FullScreenDialog>
    </>
  );
};

export default AddProductsAttributes;
