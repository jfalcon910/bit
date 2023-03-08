import {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Container,Button,Form} from 'react-bootstrap';
import { Wrapper } from '../../components/styles';
import { lang } from './langs';
import { useToast } from '../../config/hooks/useToast';
// <--REDUX--> //
import { useAppSelector } from '../../store/hooks';
import { UserStoreInterface } from '../../store/slices/users/user.interface';
// <--REDUX--> //
// <--CALL_APIS--> //
import { HTTP_METHODS } from '../../config/hooks/useCallApi/constants';
import { useCallApi } from '../../config/hooks/useCallApi';
import { VerifyEmail } from '../../config/service';
// <--CALL_APIS--> //
import '../../scss/global/global.scss';

interface Params {
    id: string,
    code: string,
}

const Activation = () => {
    const params = useParams();
    const {ConfigToast,setConfigToast, ToastElement,toastManagerRef} = useToast();
    const {preferences}:UserStoreInterface = useAppSelector((state) => state.users);
    const defaultLang:string=preferences.lang;
    const navigate = useNavigate();
    const {GetData,LoadingData,LoaderElement} = useCallApi();

    useEffect(()=>{
        Verify(params);
    },[])

    const Verify = async(params) => {
        const response = await GetData(`${VerifyEmail}?id=${params.id}&code=${params.code}`,HTTP_METHODS.GET);
        if(response.status){
            navigate('/login');
        }else{
            // ConfigToast.text = response.data.response.data.message;
            ConfigToast.text = lang[defaultLang].errorMessage;
            ConfigToast.backColor = 'color-error';
            setConfigToast(ConfigToast);
            setTimeout(() => {
                navigate('/login');
            },5000);
        }
    }

    return(
        <Container>
            <ToastElement ref={toastManagerRef} />
            <Wrapper>
                <h1>{lang[defaultLang].title}</h1>
            </Wrapper>
        </Container>
    )
}

export default Activation;