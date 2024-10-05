import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Zoom } from "@mui/material";
import { Tooltip } from "chart.js";
import { FastField } from "formik";
import { useState } from "react";

const FileInput = ({formik , name , label , value = null}) => {
    const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(true)
    };
    const handleBlur = ()=>{
        setFocus(false)
    };
    return (
        <div className={`flex relative ring-2 rounded-sm text-lg pl-14 text-slate-800 overflow-hidden transition-all duration-150 ${focus ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}>
            <label htmlFor={name} className={`appearance-none w-1/4 py-2 px-4 text-white transition-all duration-150 text-center ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`}>{label}</label>
            <FastField>
                {
                    ({form , field})=>(
                        <input {...field} onChange={(e)=>form.setFieldValue(name , e.target.files[0])} onFocus={handleFocus} onBlur={handleBlur} name={name} value={value} type='file' className="appearance-none w-3/4 py-2 px-2 text-xl focus:outline-none cursor-pointer"/>
                    )
                }
            </FastField>
            {
                formik.errors[name] ? (
                        <div title={formik.errors[name]} className="-translate-y-4 -translate-x-1/2 top-1/2 left-6 absolute w-7 h-7 text-center">
                            <FontAwesomeIcon icon={faCircleExclamation} className="text-red-500 align-top text-3xl"/>
                        </div>
                ) : null
            }
            {/* {
                        formik.errors[name] ? (
                            <Tooltip className="text-lg" placement="left" arrow TransitionComponent={Zoom} title={
                                <>
                                    <span className="text-base">{'dadasd'}</span>
                                </>
                            }>
                                <div className="-translate-y-4 -translate-x-1/2 top-1/2 left-6 absolute w-7 h-7 text-center">
                                    <FontAwesomeIcon icon={faCircleExclamation} className="text-red-500 align-top text-3xl"/>
                                </div>
                            </Tooltip>
                        ) : (
                            null
                        )
            } */}
        </div>
    );
}
 
export default FileInput;