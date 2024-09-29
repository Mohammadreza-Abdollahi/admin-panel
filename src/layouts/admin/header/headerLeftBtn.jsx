import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

const HeaderLeftBtn = ({tooltipTitle , icon}) => {
    return ( 
        <>
                <Tooltip arrow placement="bottom" title={
                    <>
                        <span className="text-sm">{tooltipTitle}</span>
                    </>
                    }>
                    <button className="mr-7 py-3 px-4 rounded-md hover:bg-palete-3-500 group">
                        <FontAwesomeIcon icon={icon} className="transition-all duration-300 align-middle text-2xl text-palete-3-900 group-hover:text-palete-5-400"/>
                    </button>
                </Tooltip>
        </>
     );
}
 
export default HeaderLeftBtn;