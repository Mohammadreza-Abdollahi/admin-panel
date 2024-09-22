const CartItem = ({title1 , title2 , title3 , count = null , color}) => {
    return ( 
        <>
            <section className="w-full my-5 flex rounded-full text-lg text-slate-800 ring-2 ring-palete-2-400-1 overflow-hidden">
                <div className="w-4/6 bg-palete-3-100-1 py-1 px-2">
                    <button><i className="fa-solid fa-xmark text-lg p-1 px-2 text-red-500"></i></button>
                    <span className="align-middle">{title1} | {title2} | {title3} | <div style={{backgroundColor: color}} className="w-6 h-6 border-2 border-white outline outline-2 outline-palete-2-400-1 align-middle rounded-full inline-block bg-black"></div></span>
                </div>
                <div className="w-1/6">
                    <input value={count} type="number" placeholder="تعداد" className="text-center bg-white w-full h-full focus:outline-none"/>
                </div>
                <div className="w-1/6 text-xl flex items-center justify-center bg-palete-3-100-1 text-center">
                    <span className="my-auto">عدد</span>
                </div>
            </section>
        </>
     );
}
 
export default CartItem;