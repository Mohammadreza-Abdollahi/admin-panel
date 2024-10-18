import { useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import Input from "../../components/Input";
import ColorInput from "../../components/ColorInput";
import Btn from "../../components/Btn";
import { Form, Formik } from "formik";
import { openCloseDialog } from "../../redux/colors/colorsSlice";

const ColorsDialog = () => {
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
          <Formik>
            <Form>
              <section dir="rtl">
                <div className="mb-5">
                  <Input
                    label={"نام رنگ"}
                    name={"colorName"}
                    placeholder={"نام رنگ خود را وارد کنید..."}
                  />
                </div>
                <div className="mb-5">
                  <ColorInput label={"انتخاب رنگ"} name={"colorName"} />
                </div>
                <div className="mt-3 mb-1">
                  <Btn btnTxt={"ذخیره"} width={"w-full"} />
                </div>
              </section>
            </Form>
          </Formik>
        </MiniDialog>
      </ModalContainer>
    </>
  );
};

export default ColorsDialog;
