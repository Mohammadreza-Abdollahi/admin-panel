import { Switch } from "@mui/material";

const SwitchInput = ({name , label}) => {
    return ( 
        <div className="text-xl">
            <label>{label}
                <Switch name={name}/>
            </label>
        </div>
    );
}
 
export default SwitchInput;