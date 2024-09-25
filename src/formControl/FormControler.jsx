import Button from './Button';
import FormCheckbox from './FormCheckbox';
import Input from './FormInput';
import FormPassword from './FormPassword';
const FormControler = (props) => {
    switch (props.control) {
        case "input":
            return (
                <Input {...props}/>
            )
        case "password":
            return (
                <FormPassword {...props}/>
            )
        case "checkbox":
            return (
                <FormCheckbox {...props}/>
            )
        case "button":
            return (
                <Button {...props}/>
            )  
        default:
            return
    }
}
 
export default FormControler;