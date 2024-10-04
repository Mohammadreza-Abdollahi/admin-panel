import { FormControlLabel, Switch, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../themes/componentsTheme";
import { useEffect, useState } from "react";
import { FastField } from "formik";

const SwitchInput = ({name , label , isActive , activeLabel = 'فعال' , disableLabel = 'غیر فعال'}) => {
    const [active , setActive] = useState(false);
    useEffect(()=>{
        setActive(isActive);
    },[isActive])
    return ( 
        <div className="text-xl">
            <label>{label}
                <FastField name={name}>
                    {
                        ({field , form})=>(
                            <ThemeProvider theme={componentsTheme}>
                                <FormControlLabel control={<div className="bg-palete-3-100-1 rounded-full border-2 border-palete-2-400-1 mx-3"><Switch {...field} onChange={(e)=>{setActive(e.target.checked);form.setFieldValue(name , e.target.checked)}} name={name} color="secondary"/></div>} label={active ? activeLabel : disableLabel} />
                            </ThemeProvider>
                        )
                    }
                </FastField>
            </label>
        </div>
    );
}
 
export default SwitchInput;