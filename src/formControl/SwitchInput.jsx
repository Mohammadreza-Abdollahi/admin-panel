import { FormControlLabel, Switch, ThemeProvider } from "@mui/material";
import { componentsTheme } from "../themes/componentsTheme";
import { useEffect, useState } from "react";
import { FastField } from "formik";

const SwitchInput = ({formik , name , label , isActive , switchLabel}) => {
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
                                <FormControlLabel control={<div className="bg-palete-3-100-1 rounded-full border-2 border-palete-2-400-1 ml-3"><Switch {...field} name={name} checked={formik.values[name] === true} onChange={(e)=>{setActive(e.target.checked);form.setFieldValue(name , e.target.checked)}} color="secondary"/></div>} label={switchLabel} />
                            </ThemeProvider>
                        )
                    }
                </FastField>
            </label>
        </div>
    );
}
 
export default SwitchInput;