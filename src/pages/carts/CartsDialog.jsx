import FullScreenDialog from "../../components/FullScreenDialog";
import { useSelector } from "react-redux";
import { cartsOpenClose } from "../../redux/carts/cartsDialog";
import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import { data as colorData } from "../../mock/colorsData";
import { data as guarantiesData } from "../../mock/guarantiesData";
import Btn from "../../components/Btn";
import CartItem from "../../components/CartItem";
import { useState } from "react";

const CartsDialog = () => {
    const {isOpen} = useSelector(state=>state.cartsDialog);
    const [totlaPrice , setTotalPrice] = useState(1550000)
    return ( 
        <>
            <FullScreenDialog dialogTitle={'ویرایش سبد'} open={isOpen} myDispatch={cartsOpenClose}>
                <section dir="rtl" className="w-full mx-auto py-5 overflow-y-auto px-10">
                    <section className="flex justify-around items-center gap-3 text-base mb-5">
                        <div className="w-full">
                            <Input label={'نام مشتری :'} name={'BuyerName'} placeholder={'نام مشتری را وارد کنید...'} type={'text'}/>    
                        </div>
                        <div className="w-full">
                            <Input label={'عنوان محصول :'} name={'BuyerName'} placeholder={'عنوان محصول را وارد کنید...'} type={'text'}/>    
                        </div>
                        <div className="w-full">
                            <SelectInput data={colorData} dataValue={'colorCode'} dataTitle={'colorName'} label={'انتخاب رنگ'} name={'Color'}/>
                        </div>
                    </section>
                    <section className="flex justify-around items-center gap-3 text-base">
                        <div className="w-full">
                            <SelectInput data={guarantiesData} dataValue={'id'} dataTitle={'guarantyTitle'} label={'انتخاب گارانتی'} name={'Guaranty'}/>
                        </div>
                        <div className="w-full">
                            <Input label={'تعداد محصول :'} name={'Count'} placeholder={'تعداد محصول را وارد کنید...'} type={'number'}/>    
                        </div>
                        <div className="w-full">
                            <Btn btnTxt={'افزودن'} width={'w-full'}/>
                        </div>
                    </section>
                    <div className="my-3">
                        <hr /><hr />
                    </div>      
                    <section className="w-2/3 m-auto mt-14">
                        <CartItem title1={'محصول شماره یک'} title2={'100 هزار تومان'} title3={'گارانتی اواژنگ'} color={'red'}/>
                        <CartItem title1={'محصول شماره یک'} title2={'100 هزار تومان'} title3={'گارانتی اواژنگ'} color={'blue'}/>
                        <CartItem title1={'محصول شماره یک'} title2={'100 هزار تومان'} title3={'گارانتی اواژنگ'} color={'green'}/>
                    </section>
                    <section className="w-3/4 m-auto flex justify-around items-center bg-palete-3-100-1 ring-2 ring-palete-2-400-1 overflow-hidden rounded-full py-3">
                        <div className="w-full text-xl text-slate-800 text-center">
                            <span>جمع کل :</span>
                        </div>
                        <div className="w-full text-xl text-slate-800 text-center">
                            <span>{totlaPrice.toLocaleString('fa')}</span>
                        </div>
                    </section>
                </section>
            </FullScreenDialog>
        </>
     );
}
 
export default CartsDialog;