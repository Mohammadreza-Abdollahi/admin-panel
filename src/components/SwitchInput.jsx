import { FormControlLabel, Switch, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../themes/componentsTheme";
import { useEffect, useState } from "react";

const SwitchInput = ({name , label , switchLabel , isActive}) => {
    const [active , setActive] = useState(false);
    useEffect(()=>{
        setActive(isActive);
    },[isActive])
    return ( 
        <div className="text-xl">
            <label>{label}
                <ThemeProvider theme={componentsTheme}>
                    <FormControlLabel control={<Switch checked={active} onChange={(e)=>setActive(e.target.checked)} name={name} color="secondary"/>} label={active ? 'فعال' : 'غیر فعال'} />
                </ThemeProvider>
            </label>
        </div>
    );
}
 
export default SwitchInput;