import { Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import { faMagnifyingGlass , faBell , faEllipsisVertical, faGaugeHigh, faPaperPlane, faEnvelope, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderLeft = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return ( 
        <>
            <section>
                <Tooltip arrow placement="bottom" title={
                    <>
                        <span className="text-sm">جستجو</span>
                    </>
                    }>
                    <button className="mr-7 py-3 px-4 rounded-md hover:bg-palete-3-500 group">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="transition-all duration-300 align-middle text-2xl text-palete-3-900 group-hover:text-palete-5-400"/>
                    </button>
                </Tooltip>
                <Tooltip arrow placement="bottom" title={
                    <>
                        <span className="text-sm">اعلان ها</span>
                    </>
                    }>
                    <button className="mr-7 py-3 px-4 rounded-md hover:bg-palete-3-500 group">
                        <FontAwesomeIcon icon={faBell} className="transition-all duration-300 align-middle text-2xl text-palete-3-900 group-hover:text-palete-5-400"/>
                    </button>
                </Tooltip>
                <Tooltip
                id="basic-button" 
                aria-controls={open ? 'basic-menu' : undefined} 
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined} 
                onClick={handleClick}
                arrow 
                placement="bottom" 
                title={
                    <>
                        <span className="text-sm">تنظیمات</span>
                    </>
                    }>
                    <button className="mr-7 py-3 px-4 rounded-md hover:bg-palete-3-500 group">
                        <FontAwesomeIcon icon={faEllipsisVertical} className="transition-all duration-300 align-middle text-2xl text-palete-3-900 group-hover:text-palete-5-400"/>
                    </button>
                </Tooltip>
                <Menu 
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
                    <MenuItem 
                    sx={{'width': 170}}
                    >
                        <span className="text-slate-600 w-full group">
                        <span className="text-xl ml-2 text-slate-600 group-hover:text-palete-5-400 align-middle transition-all duration-150"><FontAwesomeIcon icon={faGaugeHigh} className='align-middle'/></span>
                            داشبورد
                        </span>
                    </MenuItem>
                    <MenuItem 
                    sx={{'width': 170}}
                    >
                        <span className="text-slate-600 w-full group">
                        <span className="text-xl ml-2 text-slate-600 group-hover:text-palete-5-400 align-middle transition-all duration-150"><FontAwesomeIcon icon={faPaperPlane} className='align-middle'/></span>
                            تیکت ها
                        </span>
                    </MenuItem>
                    <MenuItem 
                    sx={{'width': 170}}
                    >
                        <span className="text-slate-600 w-full group">
                        <span className="text-xl ml-2 text-slate-600 group-hover:text-palete-5-400 align-middle transition-all duration-150"><FontAwesomeIcon icon={faEnvelope} className='align-middle'/></span>
                            پیام ها
                        </span>
                    </MenuItem>
                    <Divider/>
                    <Link to={'/logout'}>
                        <MenuItem 
                        sx={{'width': 170}}
                        >
                            <span className="text-slate-600 w-full group">
                            <span className="text-xl ml-2 text-slate-600 group-hover:text-palete-5-400 align-middle transition-all duration-150"><FontAwesomeIcon icon={faPowerOff} className='align-middle'/></span>
                                خروج
                            </span>
                        </MenuItem>
                    </Link>
                </Menu>
            </section>
        </>
     );
}
 
export default HeaderLeft;