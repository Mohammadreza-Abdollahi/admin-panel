import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Zoom } from "@mui/material";
import { FastField } from "formik";
import { useState } from "react";

const ColorInput = ({formik , name , label}) => {
    const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(true)
    };
    const handleBlur = ()=>{
        setFocus(false)
    };
    return ( 
        <div className={`flex relative items-center ring-2 rounded-sm text-lg text-slate-800 overflow-hidden transition-all duration-150 ${focus ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}>
            <div className={`appearance-none flex items-center justify-center w-1/4 py-2 px-4 text-white transition-all duration-150 text-center ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`}>
            <label htmlFor={name} className={`appearance-none py-1 px-4 text-white transition-all duration-150 text-center ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`}>{label}</label>
            </div>
            <div className="w-3/4 py-0 px-2 text-xl focus:outline-none">
                <FastField>
                    {(props)=><input {...props.field} onFocus={handleFocus} onBlur={handleBlur} type='color' name={name} className="appearance-none cursor-pointer w-11/12 h-12 align-middle"/>}
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
    );
}
 
export default ColorInput;