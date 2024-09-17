import TextareaInput from "../../components/TextareaInput";
import FileInput from "../../components/FileInput";
import SwitchInput from "../../components/SwitchInput";
import Btn from "../../components/Btn";
import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import { openClose } from "../../redux/category/categoryDialog";
import TextInput from "../../components/Input";

const CategoryDialog = () => {
  const { isOpen } = useSelector((state) => state.categoryDialog);
  return (
    <>
      <FullScreenDialog
        dialogTitle={"افزودن دسته محصولات"}
        open={isOpen}
        myDispatch={openClose}
      >
        <section dir="rtl" className="w-2/5 mx-auto py-5">
          <div className="my-5">
            <TextInput
              name={"CategoryParent"}
              label={"دسته والد :"}
              value={"بدون دسته"}
              placeholder={"نام دسته وارد را وارد کنید..."}
            />
          </div>
          <div className="my-5">
            <TextInput
              name={"CategoryTitle"}
              label={"عنوان :"}
              placeholder={"عنوان دسته را وارد کنید..."}
            />
          </div>
          <div className="my-5">
            <TextareaInput
              name={"CategoryExplanation"}
              row={5}
              label={"توضیحات :"}
              placeholder={"توضیحات را وارد کنید..."}
            />
          </div>
          <div className="my-5">
            <FileInput name={"CategoryPicture"} label={"تصویر :"} />
          </div>
          <div className="my-5 text-center">
            <SwitchInput
              name={"CategoryActive"}
              label={"وضعیت :"}
              switchLabel={"فعال"}
            />
          </div>
          <div className="my-5 flex text-center">
            <Btn btnTxt={"افزودن"} width={"w-full"} />
          </div>
        </section>
      </FullScreenDialog>
    </>
  );
};

export default CategoryDialog;
