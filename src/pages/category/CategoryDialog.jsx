import { Dialog, IconButton, Slide, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import Input from "../../components/TextInput";
import TextareaInput from "../../components/TextareaInput";
import FileInput from "../../components/FileInput";
import SwitchInput from "../../components/SwitchInput";
import Btn from "../../components/Btn";

const CategoryDialog = () => {
    const [isOpen , setIsOpen] = useState(true);

    const handleOpenAndClose = ()=>{
        setIsOpen(!isOpen);
    }
    return ( 
        <>
            <Dialog dir="ltr" fullScreen open={isOpen} TransitionComponent={Slide}>
                    <Toolbar className="bg-gray-500 text-white align-middle py-2.5">
                        <Tooltip arrow placement="bottom" title={<><span className="text-base">بستن</span></>}>
                            <IconButton onClick={handleOpenAndClose} className="align-middle group" edge="start" color="inherit" aria-label="close">
                                <i className="fa-solid fa-xmark align-middle text-3xl rounded-full px-2.5 py-1 transition-all duration-300 group-hover:bg-palete-3-500 group-hover:text-palete-5-400"></i>
                            </IconButton>
                        </Tooltip>
                        <Typography fontSize={20} style={{fontFamily: 'font'}} sx={{ ml: 0 , flex: 5 }} component="span">بازگشت</Typography>
                        <Typography fontSize={28} className="text-end" style={{fontFamily: 'font'}} sx={{ mr: 0 , flex: 5 }} component="span">افزودن دسته محصولات</Typography>
                    </Toolbar>
                    <section dir="rtl" className="w-2/5 mx-auto py-5">
                        <div className="my-5">
                            <Input name={'CategoryParent'} type={'text'} label={'دسته والد :'} value={'بدون دسته'} placeholder={'نام دسته وارد را وارد کنید...'}/>
                        </div>
                        <div className="my-5">
                            <Input name={'CategoryParent'} type={'text'} label={'دسته والد :'} placeholder={'عنوان دسته را وارد کنید...'}/>
                        </div>
                        <div className="my-5">
                            <TextareaInput name={'CategoryParent'} row={5} type={'text'} label={'دسته والد :'} placeholder={'عنوان دسته را وارد کنید...'}/>
                        </div>
                        <div className="my-5">
                            <FileInput   name={'CategoryParent'} type={'text'} label={'دسته والد :'} placeholder={'عنوان دسته را وارد کنید...'}/>
                        </div>
                        <div className="my-5 text-center">
                            <SwitchInput   name={'CategoryParent'} type={'text'} label={'دسته والد :'} placeholder={'عنوان دسته را وارد کنید...'}/>
                        </div>
                        <div className="my-5 flex text-center">
                            <Btn btnTxt={'ذخیره'} width={'w-full'}/>
                        </div>
                    </section>
            </Dialog>
        </>
     );
}
 
export default CategoryDialog;