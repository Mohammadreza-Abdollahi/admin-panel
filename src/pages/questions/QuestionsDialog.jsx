import { useSelector } from "react-redux";
import { questionsOpenClose } from "../../redux/questions/questionsDialog";
import MiniDialog from "../../components/Dialog";
import SwitchInput from "../../components/SwitchInput";
import TextareaInput from "../../components/TextareaInput";
import Input from "../../components/Input";
import Btn from "../../components/Btn";

const QuestionsDialog = () => {
    const {isOpen} = useSelector(state=>state.questionsDialog);
    return ( 
        <>
            <MiniDialog maxWidth={'md'}  dialogTitle={'افزودن سوال و پاسخگویی'} isOpen={isOpen} myDispatch={questionsOpenClose} btnText={'بستن'}>
                <section dir="rtl" className="w-full mx-auto py-5 overflow-y-auto px-3">
                    <div className="text-center mb-6">
                        <SwitchInput label={'عملیات :'} name={'switchAction'} activeLabel={'پاسخ'} disableLabel={'سوال'}/>
                    </div>
                    <div className="text-center mb-6">
                        <TextareaInput label={'متن سوال / پاسخ'} name={'questionBox'} row={6} placeholder={'سوال / پاسخ خود را وارد کنید...'}/>
                    </div>
                    <div className="text-center mb-6">
                        <Input label={'گروه'} name={'Group'} type={'text'} placeholder={'نام گروه را وارد کنید...'}/>
                    </div>
                    <div className="text-center mb-6">
                        <Input label={'انتخاب سوال'} name={'Group'} type={'number'} placeholder={'شناسه سوال مورد نر را وارد کنید...'}/>
                    </div>
                    <div className="text-center mb-0">
                        <Btn btnTxt={'ذخیره'} width={'w-full'}/>
                    </div>
                </section>
            </MiniDialog>
        </>
     );
}
 
export default QuestionsDialog;