import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DialogContent, DialogTitle, IconButton, Slide, Toolbar, Tooltip, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { useDispatch } from "react-redux";

const MiniDialog = ({children , myDispatch , maxWidth , isOpen , btnText , dialogTitle}) => {
    const dispatch = useDispatch();
    return ( 
        <>
        <Dialog dir="ltr" TransitionComponent={Slide} fullWidth={true} maxWidth={maxWidth} open={isOpen}>
                    <Toolbar className="bg-gray-500 text-white align-middle">
                        <Tooltip arrow placement="bottom" title={<><span className="text-base">بستن</span></>}>
                            <IconButton onClick={()=>dispatch(myDispatch())} className="align-middle group" edge="start" color="inherit" aria-label="close">
                                <FontAwesomeIcon icon={faXmark} className="align-middle text-2xl rounded-full px-2.5 py-1 transition-all duration-300 group-hover:bg-palete-3-500 group-hover:text-palete-5-400"/>
                            </IconButton>
                        </Tooltip>  
                        <Typography fontSize={18} style={{fontFamily: 'font' , verticalAlign: 'middle'}} sx={{ ml: 0 , flex: 5 }} component="span">{btnText}</Typography>
                        <Typography fontSize={20} className="text-end" style={{fontFamily: 'font'}} sx={{ mr: 0 , flex: 5 }} component="span">{dialogTitle}</Typography>
                    </Toolbar>
            {/* <DialogTitle>dasdasdasdas</DialogTitle> */}
            <DialogContent>
                {
                    children
                }
            </DialogContent>
        </Dialog>
        </>
    );
}
 
export default MiniDialog;