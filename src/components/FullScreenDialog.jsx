import { Dialog, IconButton, Slide, Toolbar, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openClose } from "../redux/category/categoryDialog";

const FullScreenDialog = ({btnText = 'بازگشت' , dialogTitle , children}) => {
    const {isOpen} = useSelector(state=>state.categoryDialog);
    const dispatch = useDispatch();
    console.log(isOpen);
    return ( 
        <>
            <Dialog dir="ltr" fullScreen open={isOpen} TransitionComponent={Slide}>
                    <Toolbar className="bg-gray-500 text-white align-middle py-2.5">
                        <Tooltip arrow placement="bottom" title={<><span className="text-base">بستن</span></>}>
                            <IconButton onClick={()=>dispatch(openClose())} className="align-middle group" edge="start" color="inherit" aria-label="close">
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