import TextareaInput from "../../components/TextareaInput";
import FileInput from "../../components/FileInput";
import SwitchInput from "../../components/SwitchInput";
import Btn from "../../components/Btn";
import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import { productOpenClose } from "../../redux/product/productDialog";
import Input from "../../components/Input";
import TextBadge from "../../components/TextBadge";
import ColorBadge from "../../components/ColorBadge";

const ProductDialog = () => {
    const {isOpen} = useSelector(state=>state.productDialog);
    return ( 
        <>
            <FullScreenDialog dialogTitle={'افزودن محصول جدید'} open={isOpen} myDispatch={productOpenClose}>
            <section dir="rtl" className="w-2/3 mx-auto py-5 overflow-y-auto px-10">
                        <div className="my-5 w-full">
                            <Input name={'ProductParent'} type={'text'} label={'دسته :'} value={'بدون دسته'} placeholder={'نام محصول وارد را وارد کنید...'}/>
                        </div>
                        <section>
                            <TextBadge title={'دسته فلان'}/>
                        </section>
                        <div className="flex justify-between gap-5">
                            <div className="my-5 w-full">
                                <Input name={'ProductTitle'} type={'text'} label={'عنوان :'} placeholder={'عنوان محصول را وارد کنید...'}/>
                            </div>
                            <div className="my-5 w-full">
                                <Input name={'ProductPrice'} type={'number'} label={'قیمت :'} placeholder={'قیمت محصول را وارد کنید...'}/>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="my-5 w-full">
                                <Input name={'ProductWeight'} type={'number'} label={'وزن :'} placeholder={'وزن محصول (کیلوگرم) را وارد کنید...'}/>
                            </div>
                            <div className="my-5 w-full">
                                <Input name={'ProductBrand'} type={'text'} label={'برند :'} placeholder={'برند محصول را وارد کنید...'}/>
                            </div>
                        </div>
                        <div className="my-5 w-full">
                            <Input name={'ProductColor'} type={'text'} label={'رنگ :'} placeholder={'رنگ محصول را وارد کنید...'}/>
                        </div>
                        <section>
                            <ColorBadge color={'red'}/>
                            <ColorBadge color={'blue'}/>
                            <ColorBadge color={'orange'}/>
                        </section>
                        <div className="my-5">
                            <Input name={'ProductGaranty'} type={'text'} label={'گارانتی :'} placeholder={'نام گارانتی محصول را وارد کنید...'}/>
                        </div>
                        <section>
                            <TextBadge title={'گارانتی فلان'}/>
                            <TextBadge title={'گارانتی فلان'}/>
                        </section>
                        <div className="my-5">
                            <TextareaInput name={'ProductExplanation'} row={4} type={'text'} label={'توضیحات :'} placeholder={'توضیحات را وارد کنید...'}/>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="my-5 w-full">
                                <FileInput name={'ProductPicture'} label={'تصویر :'}/>
                            </div>
                            <div className="my-5 w-full text-center">
                                <SwitchInput   name={'ProductActive'} label={'وضعیت :'} switchLabel={'فعال'} isActive={false}/>
                            </div>
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