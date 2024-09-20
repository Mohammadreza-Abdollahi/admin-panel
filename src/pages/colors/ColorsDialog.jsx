import { useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import { colorsOpenClose } from "../../redux/colors/colorsDialog";
import Input from "../../components/Input";
import ColorInput from "../../components/ColorInput";
import Btn from "../../components/Btn";

const ColorsDialog = () => {
    const {isOpen} = useSelector(state=>state.colorsDialog);
    return ( 
        <>
            <ModalContainer>
                <MiniDialog isOpen={isOpen} maxWidth={'md'} myDispatch={colorsOpenClose} dialogTitle={'افزودن رنگ جدید'} btnText={'بستن'}>
                    <section dir="rtl">
                        <div className="mb-5">
                            <Input label={'نام رنگ'} name={'colorName'} placeholder={'نام رنگ خود را وارد کنید...'}/>
                        </div>
                        <div className="mb-5">
                            <ColorInput label={'انتخاب رنگ'} name={'colorName'}/>
                        </div>
                        <div className="mt-3 mb-1">
                            <Btn btnTxt={'ذخیره'} width={'w-full'}/>
                        </div>
                    </section>
                </MiniDialog>
            </ModalContainer>
        </>
     );
}
 
export default ColorsDialog;