import { Formik } from 'formik';
import LoginImg from '../../assets/img/login.jpg'
import FormControler from '../../formControl/FormControler';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../utils/alert';
import { loginService } from '../../services/authService';

const initialValues = {
    phone: '',
    password: '',
    remember: false,
};
const validationSchema = Yup.object({
    phone: Yup.string()
              .required('شماره موبایل نمیتواند خالی باشد!'),
    password: Yup.string()
                 .required('رمز عبور نمیتواند خالی باشد!'),
    remember: Yup.boolean()
});
const handleSubmit = async (values , navigate , submitMethods)=>{
    try{
        const res = await loginService(values);
        if(res.status === 200){
            Alert('success','ورود شما موفقیت امیز بود');
            localStorage.setItem('loginToken' , JSON.stringify(res.data));
            navigate('/');
        }else{
            Alert('error', 'مشکلی پیش امده است!');
        }
    } catch(error){
            Alert('error', error);
            submitMethods.setSubmitting(false);
    }
};
const formOption = [
    {
        id: 1,
        eValue: 'RememberMe',
        pValue: 'مرا بخاطر داشته باش',
    }
];

const Login = () => {
    const navigate = useNavigate();
    return ( 
        <>
            <section className="w-full hfill py-32 bg-gradient-to-br from-gradient-1 to-gradient-2">
                <div className="w-2/3 m-auto rounded-lg shadow-lg bg-white overflow-hidden">
                    <section className='px-10 flex justify-around items-start'>
                        <Formik
                        initialValues={initialValues}
                        onSubmit={(values , submitMethods)=>handleSubmit(values , navigate , submitMethods)}
                        validationSchema={validationSchema} >
                            {
                                Formik=>{
                                    return(
                                    <section className='w-full pe-3 py-20'>
                                        <h1 className='text-4xl mb-12 text-slate-800'>ورود</h1>
                                        <div className='mb-10'>
                                            <FormControler formik={Formik} control={'input'} name={'phone'} label={'شماره همراه'}type={'text'} placeholder={'شماره همراه خود را وارد کنید...'}/>
                                        </div>
                                        <div className='mb-10'>
                                            <FormControler formik={Formik} control={'password'} name={'password'} label={'رمزعبور :'}type={'number'} placeholder={'رمزعبور خود را وارد کنید...'}/>
                                        </div>
                                        <div className='mb-10'>
                                            <FormControler formik={Formik} control={'checkbox'} option={formOption} name={'remember'}/>
                                        </div>
                                        <div className='mb-10'>
                                            <FormControler formik={Formik} control={'button'} btnTxt={'ورود'} width={'w-full'}/>
                                        </div>
                                    </section>
                                )
                            }
                        }
                        </Formik>
                        <section className='w-full overflow-hidden flex justify-center items-center'>
                            <img className='w-fit h-fit' src={LoginImg} alt="LoginImage" />
                        </section>
                    </section>
                </div>
            </section>
        </>
    );
}
 
export default Login;