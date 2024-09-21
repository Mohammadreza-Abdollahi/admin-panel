import { useSelector } from "react-redux";
import ModalContainer from "../../components/ModalPortal";
import MiniDialog from "../../components/Dialog";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import TextareaInput from "../../components/TextareaInput";
import { brandsOpenClose } from "../../redux/brands/brandsDialog";
import FileInput from "../../components/FileInput";

const BrandsDialog = () => {
    const {isOpen} = useSelector(state=>state.brandsDialog);
    return ( 
        <>
            <ModalContainer>
                <MiniDialog isOpen={isOpen} maxWidth={'md'} myDispatch={brandsOpenClose} dialogTitle={'افزودن برند جدید'} btnText={'بستن'}>
                    <section dir="rtl">
                        <div className="mb-5">
                            <Input label={'عنوان لاتین برند'} name={'brandName'} placeholder={'عنوان لاتین برند را وارد کنید...'}/>
                        </div>
                        <div className="mb-5">
                            <Input label={'عنوان فارسی برند'} name={'persianBrandName'} placeholder={'عنوان فارسی برند را وارد کنید...'}/>
                        </div>
                        <div className="mb-5">
                            <TextareaInput label={'توضیحات برند'} name={'guaranties'} placeholder={'توضیحات برند را وارد کنید'} row={3}/>
                        </div>
                        <div className="mb-5">
                            <FileInput label={'لوگو برند'} name={'brandLogo'}/>
                        </div>
                        <div className="mb-5">
                            <TextareaInput label={'توضیحات لوگو'} name={'logoexplanation'} placeholder={'توضیحات لوگو برند را وارد کنید...'} row={2}/>
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
 
export default BrandsDialog;