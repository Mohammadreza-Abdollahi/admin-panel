import { Tooltip, Zoom } from "@mui/material";
import { FastField } from "formik";
import { useRef, useState } from "react";
import { faCircleExclamation , faEye , faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <span onClick={handleShowPass} className={`absolute align-middle text-center cursor-pointer -translate-y-1/2 top-6 right-3 text-palete-2-400-1 hover:text-palete-4-500-1 transition-all duration-150`}><FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} className="text-2xl"/></span>
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
                                <div className="-translate-y-4 -translate-x-1/2 top-1/2 left-6 absolute w-7 h-7 text-center">
                                    <FontAwesomeIcon icon={faCircleExclamation} className="text-red-500 align-top text-3xl"/>
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