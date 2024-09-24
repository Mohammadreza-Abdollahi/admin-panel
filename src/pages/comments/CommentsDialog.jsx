import { useSelector } from "react-redux";
import MiniDialog from "../../components/Dialog";
import TextareaInput from "../../components/TextareaInput";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import { commentsOpenClose } from "../../redux/comments/commentsDialog";

const CommentsDialog = () => {
    const {isOpen} = useSelector(state=>state.commentsDialog);
    return ( 
        <>
            <MiniDialog maxWidth={'md'}  dialogTitle={'افزودن نظر برای محصول'} isOpen={isOpen} myDispatch={commentsOpenClose} btnText={'بستن'}>
                <section dir="rtl" className="w-full mx-auto py-5 overflow-y-auto px-3">
                    <div className="text-center mb-6">
                        <TextareaInput label={'متن نظر :'} name={'Comment'} row={6} placeholder={'سوال / نظر خود را وارد کنید...'}/>
                    </div>
                    <div className="text-center mb-6">
                        <Input label={'برای محصول :'} name={'Group'} type={'text'} placeholder={'نام محصول را وارد کنید...'}/>
                    </div>
                    <div className="text-center mb-0">
                        <Btn btnTxt={'ذخیره'} width={'w-full'}/>
                    </div>
                </section>
            </MiniDialog>
        </>
     );
}
 
export default CommentsDialog;