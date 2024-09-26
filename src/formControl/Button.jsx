const Button = ({btnTxt , width = null , formik}) => {
    return ( 
        <>
            <button onClick={formik.handleSubmit} className={`appearance-none ${width} transition-all duration-150 ring-2 ring-palete-2-400-1 bg-palete-2-400-1 hover:bg-palete-4-500-1 hover:ring-palete-4-500-1 text-white text-xl py-2 px-7 rounded-sm`}>{btnTxt}</button>
        </>
     );
}
 
export default Button;