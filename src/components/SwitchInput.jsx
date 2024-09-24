import { FormControlLabel, Switch, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../themes/componentsTheme";
import { useEffect, useState } from "react";

const SwitchInput = ({name , label , isActive , activeLabel = 'فعال' , disableLabel = 'غیر فعال'}) => {
    const [active , setActive] = useState(false);
    useEffect(()=>{
        setActive(isActive);
    },[isActive])
    return ( 
        <div className="text-xl">
            <label>{label}
                <ThemeProvider theme={componentsTheme}>
                    <FormControlLabel control={<div className="bg-palete-3-100-1 rounded-full border-2 border-palete-2-400-1 mx-3"><Switch checked={active} onChange={(e)=>setActive(e.target.checked)} name={name} color="secondary"/></div>} label={active ? activeLabel : disableLabel} />
                </ThemeProvider>
            </label>
        </div>
    );
}
 
export default SwitchInput;