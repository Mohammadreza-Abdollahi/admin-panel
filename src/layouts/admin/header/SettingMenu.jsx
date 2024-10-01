import { Menu } from "@mui/material";
import { useState } from "react";

const SettingMenu = () => {
    const [open , setOpen] = useState(true);
    return ( 
        <>
            <Menu open={open}>
                
            </Menu>
        </>
     );
}
 
export default SettingMenu;