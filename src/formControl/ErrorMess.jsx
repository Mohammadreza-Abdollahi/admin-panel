import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorMess = ({formik , name}) => {
    return ( 
        <>
            <section className="translate-y-5">
                <span className="text-red-500">
                    <FontAwesomeIcon icon={faCircleExclamation} className="text-red-500 text-xl align-middle mx-2"/>
                    {formik.errors[name]}
                </span>
            </section>
        </>
     );
}
 
export default ErrorMess;