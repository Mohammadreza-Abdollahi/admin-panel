import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Zoom } from "@mui/material";
import { FastField } from "formik";
import { useState } from "react";

const FormInput = (props) => {
    const { label , name , type , placeholder , formik } = props;
    const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(true)
    };
    const handleBlur = ()=>{
        setFocus(false)
    };
    return ( 
        <>
            <div className={`flex ring-2 rounded-sm text-lg text-slate-800 overflow-hidden transition-all duration-150 ${focus ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}>
                <label  className={`appearance-none w-1/4 py-2 px-4 text-white transition-all duration-150 text-center ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`} htmlFor={name}>{label}</label>
                <div className="relative w-3/4">
                    <FastField name={name}>
                        {props=><input {...props.field} type={type} onFocus={handleFocus} onBlur={handleBlur} id={name} placeholder={placeholder} className="appearance-none w-full py-2 px-2 text-xl focus:outline-none"/>}
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
 
export default FormInput;