import { createPortal } from "react-dom";

const ModalContainer = ({ children }) => {
    return createPortal( 
        <>
            {
                children
            }
        </>,
        document.getElementById('portal-root')
     );
}
 
export default ModalContainer;