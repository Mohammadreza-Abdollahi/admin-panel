import { useEffect, useRef, useState } from "react";

const CategorySearch = ({btnTxt , placeholder}) => {
    const [focus , setFocus] = useState(false);
    const handleFocus = ()=>{
        setFocus(!focus)
    };
    return ( 
        <section>
            <form action="" className={`overflow-hidden ring-2 rounded-sm text-xl transition-all duration-300 group ${focus ? 'ring-palete-4-400' : 'ring-palete-2-400-1'}`}>
                <input type="submit" value={btnTxt} className={`appearance-none w-1/4 py-2 text-white transition-all duration-300 hover:bg-palete-4-500-1 ${focus ? 'bg-palete-4-400' : 'bg-palete-2-400-1'}`}/>
                <input onFocus={handleFocus} onBlur={handleFocus} type="text" className="appearance-none w-3/4 py-2 px-2 focus:outline-none" placeholder={placeholder}/>
            </form>
        </section>
     );
}
 
export default CategorySearch;