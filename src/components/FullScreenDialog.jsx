import { Dialog, IconButton, Slide, Toolbar, Tooltip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const FullScreenDialog = ({btnText = 'بازگشت' , dialogTitle , open , myDispatch , children}) => {
    const dispatch = useDispatch();
    return ( 
        <>
            <Dialog dir="ltr" fullScreen open={open} TransitionComponent={Slide}>
                    <Toolbar className="bg-gray-500 text-white align-middle py-2.5">
                        <Tooltip arrow placement="bottom" title={<><span className="text-base">بستن</span></>}>
                            <IconButton onClick={()=>dispatch(myDispatch())} className="align-middle group" edge="start" color="inherit" aria-label="close">
                                <i className="fa-solid fa-xmark align-middle text-3xl rounded-full px-2.5 py-1 transition-all duration-300 group-hover:bg-palete-3-500 group-hover:text-palete-5-400"></i>
                            </IconButton>
                        </Tooltip>
                        <Typography fontSize={20} style={{fontFamily: 'font'}} sx={{ ml: 0 , flex: 5 }} component="span">{btnText}</Typography>
                        <Typography fontSize={28} className="text-end" style={{fontFamily: 'font'}} sx={{ mr: 0 , flex: 5 }} component="span">{dialogTitle}</Typography>
                    </Toolbar>
                    {
                        children
                    }
            </Dialog>
        </>
     );
}
 
export default FullScreenDialog;