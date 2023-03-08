import {useEffect, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {Container,Button,Form} from 'react-bootstrap';
import { Wrapper } from '../../../components/styles';
import { SetAuthCookie,GetAuthCookie } from '../../../config/utils/Auth';
import { UserFomLoginInterface, LoginFormValues, UserFormikInterface, UserAuthResponseInterface } from '../../../interface';
import { lang } from './langs';
import { useToast } from '../../../config/hooks/useToast';
// <--REDUX--> //
import { useAppSelector,useAppDispatch } from '../../../store/hooks';
import { UserStoreInterface } from '../../../store/slices/users/user.interface';
import { setUserData,setIsLoged } from '../../../store/slices/users';
// <--REDUX--> //
// <--CALL_APIS--> //
import { HTTP_METHODS } from '../../../config/hooks/useCallApi/constants';
import { useCallApi } from '../../../config/hooks/useCallApi';
import { Login } from '../../../config/service';
// <--CALL_APIS--> //
import '../../../scss/global/global.scss';
import './category.scss';
// <--FORMS--> //
import { Formik } from "formik";
import { SaveCookie } from '../../../config/utils/Cookies';
const yup = require('yup')
const schema = yup.object({
    email: yup.string().required('Este campo es requerido').min(3, 'Mínimo 3 carateres').max(60, 'Máximo 60 caracteres').email('Ingrese un email válido'),
    password: yup.string().required('Este campo es requerido').min(3, 'Mínimo 3 carateres').max(20, 'Máximo 20 caracteres'),
})
// <--FORMS--> //
const CategoryAdmin = () => {
    const {ConfigToast,setConfigToast, ToastElement,toastManagerRef} = useToast();
    const dispatch = useAppDispatch();
    const {preferences}:UserStoreInterface = useAppSelector((state) => state.users);
    const defaultLang:string=preferences.lang;
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const {GetData,LoadingData,LoaderElement} = useCallApi();
    

    useEffect(()=>{
        const access = GetAuthCookie();
        if(access){
            navigate('/');
        }
    },[])

    const OnLogin = async(loginData:UserFomLoginInterface) => {
        const response = await GetData(Login,HTTP_METHODS.POST,loginData);
        const data:UserAuthResponseInterface = response.data;
        const {token,userData} = data;
        if(response.status){
            dispatch(setUserData(userData));
            dispatch(setIsLoged(true));
            SaveCookie(userData,process.env.REACT_APP_PUBLIC_USER_DATA_COOKIE);
            await SetAuthCookie({token});
            navigate('/');
        }else{
            ConfigToast.text = response.data.response.data.message;
            ConfigToast.backColor = 'color-error';
            setConfigToast(ConfigToast);
        }
    }

    const Cancel = (OnCancel:any) => {
        OnCancel();
        FocusOn(emailRef);
    }

    const FocusOn = (ref:any) => {
        ref.current.focus();
    };

    const GoToRegister = () => {
        navigate('/register');
    }

    return(
        <Container className="_login">
            <ToastElement ref={toastManagerRef} />
            <figure className='_login__ctlogo _d_flex__center'>
                <img className='_login__ctlogo__logo' src="/logo.svg" alt="Logo login" />
            </figure>
            <h1 className='_login__title'>{lang[defaultLang].title}</h1>
            <Wrapper className="_login__wrapper">
                <Formik
                    validationSchema={schema}
                    onSubmit={OnLogin}
                    initialValues={LoginFormValues}
                    validateOnChange={false}
                    validateOnBlur={false}

                >
                    {
                        ({handleSubmit,handleChange,handleBlur,values,errors,resetForm}:UserFormikInterface) => (
                            <Form className='_login__form' noValidate onSubmit={handleSubmit} >
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>{lang[defaultLang].form.email.label}</Form.Label>
                                    <Form.Control
                                        required
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder={lang[defaultLang].form.email.input}
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        isInvalid={!!errors.email}
                                        ref={emailRef}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>{lang[defaultLang].form.password.label}</Form.Label>
                                    <Form.Control
                                        required
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder={lang[defaultLang].form.password.input}
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </Form.Group>
                                <Wrapper className="_d_flex__center childs_uniform">
                                    <Button className='button_blue' onClick={() => Cancel(resetForm)}>{lang[defaultLang].form.buttons.errase}</Button>
                                    <Button className='button_blue' type='submit'>{lang[defaultLang].form.buttons.getInto}</Button>
                                </Wrapper>
                                <Wrapper className="relative _d_flex__center childs_100">
                                    <hr className="_login__form__cl_white" />
                                    <span className='_login__form__o_separator absolute'>o</span>
                                </Wrapper>
                                <Wrapper className="_d_flex__center">
                                    <Button variant="link" className='_cl_blue bold' onClick={GoToRegister} > {lang[defaultLang].form.buttons.register} </Button>
                                </Wrapper>
                            </Form>
                        )
                    }
                </Formik>              
            </Wrapper>
            {LoadingData&& <LoaderElement />}
        </Container>   
    )
}

export default CategoryAdmin;