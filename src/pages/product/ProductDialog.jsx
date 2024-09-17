import TextareaInput from "../../components/TextareaInput";
import FileInput from "../../components/FileInput";
import SwitchInput from "../../components/SwitchInput";
import Btn from "../../components/Btn";
import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import { productOpenClose } from "../../redux/product/productDialog";
import TextInput from "../../components/TextInput";

const ProductDialog = () => {
    const {isOpen} = useSelector(state=>state.productDialog);
    return ( 
        <>
            <FullScreenDialog dialogTitle={'افزودن محصول جدید'} open={isOpen} myDispatch={productOpenClose}>
            <section dir="rtl" className="w-2/5 mx-auto py-5">
                        <div className="my-5">
                            <TextInput name={'ProductParent'} type={'text'} label={'دسته والد :'} value={'بدون دسته'} placeholder={'نام دسته وارد را وارد کنید...'}/>
                        </div>
                        <div className="my-5">
                            <TextInput name={'ProductTitle'} type={'text'} label={'عنوان دسته :'} placeholder={'عنوان دسته را وارد کنید...'}/>
                        </div>
                        <div className="my-5">
                            <TextareaInput name={'ProductExplanation'} row={5} type={'text'} label={'توضیحات :'} placeholder={'توضیحات را وارد کنید...'}/>
                        </div>
                        <div className="my-5">
                            <FileInput name={'ProductPicture'} label={'تصویر :'}/>
                        </div>
                        <div className="my-5 text-center">
                            <SwitchInput   name={'ProductActive'} label={'وضعیت :'} switchLabel={'فعال'} isActive={false}/>
                        </div>
                        <div className="my-5 flex text-center">
                            <Btn btnTxt={'افزودن'} width={'w-full'}/>
                        </div>
                    </section>
            </FullScreenDialog>
        </>
     );
}
 
export default ProductDialog;