import { Tooltip, Zoom } from "@mui/material";
import { FastField } from "formik";
import { useRef, useState } from "react";

const FormPassword = (props) => {
    const { label , name , placeholder , formik } = props
    const [showPass , setShowPass] = useState(false);
    const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(true)
    };
    const handleBlur = ()=>{
        setFocus(false)
    };
    const inpRef = useRef();

    const handleShowPass = ()=>{
        if(showPass){
            inpRef.current.type = 'password';
            setShowPass(false)
        }else{
            inpRef.current.type = 'text';
            setShowPass(true)
        }
    }
    return ( 
        <>
            <div className={`flex ring-2 rounded-sm text-lg text-slate-800 overflow-hidden transition-all duration-150 ${focus ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}>
                <label  className={`appearance-none w-1/4 py-2 px-4 text-white transition-all duration-150 text-center ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`} htmlFor={name}>{label}</label>
                <div className="relative w-3/4">
                    <span onClick={handleShowPass} className={`absolute -translate-y-4 -translate-x-1/2 top-1/2 right-1 cursor-pointer text-center`}><i className={`${showPass ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'} text-2xl text-label-border`}></i></span>
                    <FastField name={name}>
                        {props=><input {...props.field} ref={inpRef} onFocus={handleFocus} onBlur={handleBlur} type={showPass ? 'text' : 'password'} id={name} placeholder={placeholder} className="appearance-none w-full py-2 pr-14 px-2 text-xl focus:outline-none"/>}
                    </FastField>
                    {
                        formik.errors[name] ? (
                            <Tooltip className="text-lg" placement="left" arrow TransitionComponent={Zoom} title={
                                <>
                                    <span className="text-base">{formik.errors[name]}</span>
                                </>
                            }>
                                <div className="-translate-y-4 -translate-x-1/2 top-5 left-6 absolute w-7 h-7 text-center">
                                    <i className="fa-solid fa-circle-exclamation text-red-500 align-top text-3xl"></i>
                                </div>
                            </Tooltip>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        </>
    );
}
 
export default FormPassword;