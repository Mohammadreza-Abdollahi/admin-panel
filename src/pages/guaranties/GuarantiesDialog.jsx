import { useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import { guarantiesOpenClose } from "../../redux/guaranties/guarantiesDialog";
import TextareaInput from "../../components/TextareaInput";

const GuarantiesDialog = () => {
    const {isOpen} = useSelector(state=>state.guarantiesDialog);
    return ( 
        <>
            <ModalContainer>
                <MiniDialog isOpen={isOpen} maxWidth={'md'} myDispatch={guarantiesOpenClose} dialogTitle={'افزودن گارانتی جدید'} btnText={'بستن'}>
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
 
export default GuarantiesDialog;