import { Tooltip } from "@mui/material";
import HeaderLeftBtn from "./headerLeftBtn";

const HeaderLeft = ({logo}) => {
    return ( 
        <>
            <section>
                <HeaderLeftBtn tooltipTitle='جستجو' icon='fa-solid fa-magnifying-glass'/>
                <HeaderLeftBtn tooltipTitle='اعلان ها' icon='fa-solid fa-bell'/>
                <HeaderLeftBtn tooltipTitle='تنظیمات' icon='fa-solid fa-ellipsis-vertical'/>
            </section>
        </>
     );
}
 
export default HeaderLeft;