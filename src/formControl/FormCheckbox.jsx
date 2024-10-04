import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FastField } from "formik";

const FormCheckbox = (props) => {
    const { label , name , option } = props
    return ( 
        <>
            <div className='mb-5'>
                <label className='text-lg block' htmlFor={name}>{label}</label>
                <FastField name={name}>
                    {
                        ({field})=>{
                            return option.map((item)=>(
                                    <div key={item.id} className="my-1 text-lg">
                                        <label htmlFor={`check${item.id}`}>
                                            <div className="inline-block relative">
                                            <input {...field} name={name} value={item.eValue} type="checkbox" id={`check${item.id}`} className="align-middle h-6 w-6 mx-2 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-palete-2-400-1 checked:border-palete-2-400-1"/>
                                            <span className="absolute text-white -translate-x-1/2 -translate-y-1/2 top-4 left-1/2"><FontAwesomeIcon icon={faCheck}/></span>
                                            </div>
                                            {item.pValue}
                                        </label>
                                    </div>                            
                                )
                            )}
                    }
                </FastField>
            </div>
        </>
    );
}
 
export default FormCheckbox;