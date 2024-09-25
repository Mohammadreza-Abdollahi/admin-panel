import { useState } from "react";

const TextareaInput = ({name , label , value , placeholder , readOnly = false , row}) => {
    const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(!focus)
    };
    return ( 
        <div className={`flex ring-2 rounded-sm text-lg text-slate-800 overflow-hidden transition-all duration-150 ${focus ? 'ring-palete-4-500-1' : 'ring-palete-2-400-1'}`}>
            <div className={`appearance-none flex items-center w-1/4 py-2 px-4 text-center text-white transition-all duration-150 ${focus ? 'bg-palete-4-500-1' : 'bg-palete-2-400-1'}`}>
                <label htmlFor={name} className={`appearance-none w-full py-2 text-center text-white`}>{label}</label>
            </div>
            <textarea onFocus={handleFocus} onBlur={handleFocus} rows={row} value={value === undefined ? null : value} name={name} type='text' readOnly={readOnly} placeholder={placeholder} className="appearance-none w-3/4 py-2 px-2 text-xl focus:outline-none"/>
        </div>
    );
}
 
export default TextareaInput;