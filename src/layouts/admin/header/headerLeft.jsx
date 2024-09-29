import { Tooltip } from "@mui/material";
import HeaderLeftBtn from "./HeaderLeftBtn";
import { faMagnifyingGlass , faBell , faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const HeaderLeft = ({logo}) => {
    return ( 
        <>
            <section>
                <HeaderLeftBtn tooltipTitle='جستجو' icon={faMagnifyingGlass}/>
                <HeaderLeftBtn tooltipTitle='اعلان ها' icon={faBell}/>
                <HeaderLeftBtn tooltipTitle='تنظیمات' icon={faEllipsisVertical}/>
            </section>
        </>
     );
}
 
export default HeaderLeft;