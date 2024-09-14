import { Tooltip } from "@mui/material";

const HeaderLeftBtn = ({tooltipTitle , icon}) => {
    return ( 
        <>
                <Tooltip arrow placement="bottom" title={
                    <>
                        <span className="text-sm">{tooltipTitle}</span>
                    </>
                    }>
                    <button className="mr-7 py-2 px-4 rounded-md hover:bg-palete-3-500 group">
                        <i className={`${icon} transition-all duration-300 align-middle text-2xl text-palete-3-900 group-hover:text-palete-5-400`}></i>
                    </button>
                </Tooltip>
        </>
     );
}
 
export default HeaderLeftBtn;