import { useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import TextareaInput from "../../components/TextareaInput";
import { discountsOpenClose } from "../../redux/discounts/discountsDialog";

const DiscountsDialog = () => {
    const {isOpen} = useSelector(state=>state.discountsDialog);
    return ( 
        <>
            <ModalContainer>
                <MiniDialog isOpen={isOpen} maxWidth={'md'} myDispatch={discountsOpenClose} dialogTitle={'افزودن تخفیف جدید'} btnText={'بستن'}>
                    <section dir="rtl">
                        <div className="mb-5">
                            <Input label={'عنوان گارانتی'} name={'colorName'} placeholder={'نام گارانتی را وارد کنید...'}/>
                        </div>
                        <div className="mb-5">
                            <TextareaInput label={'توضیحات گارانتی'} name={'guaranties'} placeholder={'توضیحات گارانتی را وارد کنید'} row={3}/>
                        </div>
                        <div className="mb-5">
                            <Input label={'مدت زمان گارانتی'} name={'colorName'} placeholder={'نام گارانتی را وارد کنید...'}/>
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
 
export default DiscountsDialog;