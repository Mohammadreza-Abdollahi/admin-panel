import { useState } from "react";

const Input = ({name , label , type , value , placeholder , readOnly = false}) => {
    const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(!focus)
    };
    return ( 
        <div className={`flex ring-2 rounded-sm text-lg text-slate-800 overflow-hidden transition-all duration-150 ${focus ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}>
            <label htmlFor={name} className={`appearance-none w-1/6 py-2 px-4 text-white transition-all duration-150 text-center ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`}>{label}</label>
            <input onFocus={handleFocus} onBlur={handleFocus} type={type} value={value === undefined ? null : value} name={name} readOnly={readOnly} placeholder={placeholder} className="appearance-none w-5/6 py-2 px-2 text-xl focus:outline-none"/>
        </div>
    );
}
 
export default Input;