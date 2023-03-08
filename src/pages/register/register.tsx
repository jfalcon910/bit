import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Container,Button,Form} from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { Wrapper } from '../../components/styles';
import { UserFomRegisterInterface, RegisterFormValues, UserFormikInterface, UserRegisterResponseInterface } from '../../interface';
import { lang } from './langs';
import { useToast } from '../../config/hooks/useToast';
// import Recaptcha from 'react-recaptcha'
// <--REDUX--> //
import { useAppSelector } from '../../store/hooks';
import { UserStoreInterface } from '../../store/slices/users/user.interface';
// <--REDUX--> //
// <--CALL_APIS--> //
import { HTTP_METHODS } from '../../config/hooks/useCallApi/constants';
import { useCallApi } from '../../config/hooks/useCallApi';
import { UserService } from '../../config/service';
// <--CALL_APIS--> //
import '../../scss/global/global.scss';
// import './login.scss';
// <--FORMS--> //
import { Formik } from "formik";
import './register.scss';
const yup = require('yup')
const schema = yup.object({
    name: yup.string().required('Este campo es requerido').min(3, 'Mínimo 3 carateres').max(60, 'Máximo 60 caracteres'),
    lastName: yup.string().required('Este campo es requerido').min(3, 'Mínimo 3 carateres').max(60, 'Máximo 60 caracteres'),
    email: yup.string().required('Este campo es requerido').min(3, 'Mínimo 3 carateres').max(60, 'Máximo 60 caracteres').email('Ingrese un email válido'),
    password: yup.string().required('Este campo es requerido').min(3, 'Mínimo 3 carateres').max(20, 'Máximo 20 caracteres'),
    phone: yup.string().required('Este campo es requerido').min(3, 'Mínimo 7 carateres').max(60, 'Máximo 15 caracteres'),
})
// <--FORMS--> //
const RegisterPage = () => {
    const [captchaValido, cambiarCaptchaValido] = useState<boolean|null>(null);
    const captcha:any = useRef(null);

    const {ConfigToast,setConfigToast, ToastElement,toastManagerRef} = useToast();
    const {preferences}:UserStoreInterface = useAppSelector((state) => state.users);
    const defaultLang:string=preferences.lang;
    const navigate = useNavigate();
    const nameRef = useRef(null);
    const {GetData,LoadingData,LoaderElement} = useCallApi();

    const OnRegister = async(registerData:UserFomRegisterInterface) => {
        if(captcha.current.getValue()){
			//console.log('El usuario no es un robot');
			cambiarCaptchaValido(true);
            /** */
            const response = await GetData(UserService,HTTP_METHODS.POST,registerData);
            if(response.status){
                const data:UserRegisterResponseInterface = response.data;
                ConfigToast.text = response.message;
                ConfigToast.backColor = 'color-success';
                setConfigToast(ConfigToast);
                setTimeout(() => {
                    navigate('/login');
                },5000);
            }else{
                ConfigToast.text = response.data.response.data.message;
                ConfigToast.backColor = 'color-error';
                setConfigToast(ConfigToast);
            }
		} else {
			ConfigToast.text = 'Por favor, verifique que no es un robot';
            ConfigToast.backColor = 'color-warning';
            setConfigToast(ConfigToast);
			cambiarCaptchaValido(false);
		}
    }

    const onChange = () => {
		if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
			cambiarCaptchaValido(true);
		}
	}

    const Cancel = (OnCancel:any) => {
        OnCancel();
        FocusOn(nameRef);
    }

    const FocusOn = (ref:any) => {
        ref.current.focus();
    };

    return(
        <Container className="_login">
            <h1 className='_login__title'>{lang[defaultLang].title}</h1>
            <ToastElement ref={toastManagerRef} />
            <Wrapper className="_login__wrapper">
                <Formik
                    validationSchema={schema}
                    onSubmit={OnRegister}
                    initialValues={RegisterFormValues}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        ({handleSubmit,handleChange,handleBlur,values,errors,resetForm}:UserFormikInterface) => (
                            <Form className='_login__form' noValidate onSubmit={handleSubmit} >
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>{lang[defaultLang].form.name.label}</Form.Label>
                                    <Form.Control
                                        required
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder={lang[defaultLang].form.name.input}
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        isInvalid={!!errors.name}
                                        ref={nameRef}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>{lang[defaultLang].form.lastName.label}</Form.Label>
                                    <Form.Control
                                        required
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder={lang[defaultLang].form.lastName.input}
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                                </Form.Group>
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
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>{lang[defaultLang].form.phone.label}</Form.Label>
                                    <Form.Control
                                        required
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder={lang[defaultLang].form.phone.input}
                                        type="text"
                                        name="phone"
                                        value={values.phone}
                                        isInvalid={!!errors.phone}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                </Form.Group>
                                <div className="recaptcha">
                                    <ReCAPTCHA
                                        ref={captcha}
                                        sitekey={process.env.REACT_APP_PUBLIC_CAPCHA_SITEKEY}
                                        width="100%"
                                        onChange={onChange}
                                    />
                                </div>
                                {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
                                <Wrapper className="_d_flex__center childs_uniform">
                                    <Button className='button_blue' onClick={() => Cancel(resetForm)}>{lang[defaultLang].form.buttons.errase}</Button>
                                    <Button className='button_blue' type='submit'>{lang[defaultLang].form.buttons.register}</Button>
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

export default RegisterPage;