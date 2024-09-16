import { Dialog, IconButton, Slide, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import Input from "../../components/TextInput";
import TextareaInput from "../../components/TextareaInput";
import FileInput from "../../components/FileInput";
import SwitchInput from "../../components/SwitchInput";
import Btn from "../../components/Btn";
import FullScreenDialog from "../../components/FullScreenDialog";

const CategoryDialog = () => {
    return ( 
        <>
            <FullScreenDialog dialogTitle={'افزودن دسته محصولات'} open={false}>
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
            </FullScreenDialog>
        </>
     );
}
 
export default CategoryDialog;