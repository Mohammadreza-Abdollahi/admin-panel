import Button from './Button';
import FileInput from './FileInput';
import FormCheckbox from './FormCheckbox';
import Input from './FormInput';
import FormPassword from './FormPassword';
import SelectInput from './SelectInput';
import SwitchInput from './SwitchInput';
import TextareaInput from './TextareaInput';
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
        case "textarea":
            return (
                <TextareaInput {...props}/>
            )
        case "select":
            return (
                <SelectInput {...props}/>
            )
        case "file":
            return (
                <FileInput {...props}/>
            )
        case "switch":
            return (
                <SwitchInput {...props}/>
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