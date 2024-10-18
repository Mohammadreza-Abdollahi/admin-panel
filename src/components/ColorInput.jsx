import { useState } from "react";

const ColorInput = ({name , label , type , value = '#3fc1c9' }) => {
    const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(!focus)
    };
    return ( 
        <div className={`flex items-center ring-2 rounded-sm text-lg text-slate-800 overflow-hidden transition-all duration-150 ${focus ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}>
            <div className={`appearance-none flex items-center justify-center w-1/4 py-2 px-4 text-white transition-all duration-150 text-center ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`}>
            <label htmlFor={name} className={`appearance-none py-1 px-4 text-white transition-all duration-150 text-center ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`}>{label}</label>
            </div>
            <input onFocus={handleFocus} onBlur={handleFocus} defaultValue={value} type='color' name={name} className="appearance-none w-3/4 h-12 py-0 px-2 text-xl focus:outline-none"/>
        </div>
    );
}
 
export default ColorInput;