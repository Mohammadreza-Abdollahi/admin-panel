import SearchableSelect from './SearchableSelect';
import Button from './Button';
import ColorInput from './ColorInput';
import FileInput from './FileInput';
import FormCheckbox from './FormCheckbox';
import Input from './FormInput';
import FormPassword from './FormPassword';
import SelectInput from './SelectInput';
import SwitchInput from './SwitchInput';
import TextareaInput from './TextareaInput';
import ColorSearchableSelect from './ColorSearchableSelect';
import Ckeditor from './Ckeditor';
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
        case "searchableSelect":
            return (
                <SearchableSelect {...props}/>
            )
        case "colorSearchableSelect":
            return (
                <ColorSearchableSelect {...props}/>
            )
        case "file":
            return (
                <FileInput {...props}/>
            )
        case "color":
            return (
                <ColorInput {...props}/>
            )
        case "switch":
            return (
                <SwitchInput {...props}/>
            )
        case "checkbox":
            return (
                <FormCheckbox {...props}/>
            )
        case "ckeditor":
            return (
                <Ckeditor {...props}/>
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