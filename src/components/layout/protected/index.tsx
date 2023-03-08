import React,{useEffect, useState} from 'react';
import jwtDecode from 'jwt-decode';
import { GetAuthCookie, Logout } from '../../../config/utils/Auth';
import { ValidateLogin } from '../../../config/service';
import { useCallApi } from '../../../config/hooks/useCallApi';
import { HTTP_METHODS } from '../../../config/hooks/useCallApi/constants';

const Security = (props:any) => {

    const {GetData,LoaderElement} = useCallApi();
    const [ready, setReady] = useState<boolean>(false);

    useEffect(()=>{
        Verify();
    },[])

    const Verify = async() =>{
        const {token} = GetAuthCookie();
        if(token===null || token===''){
            Logout();
        }else{
            try{
                jwtDecode(token);
                setReady(true);
            }catch(error){
                Logout();
            }
            // try {
            //     const data = await GetData(ValidateLogin,HTTP_METHODS.POST,{token});
            //     if(!data.status){
            //         Logout();
            //     }else{
            //         jwtDecode(token);
            //         setReady(true);
            //     }
            // } catch (error) {
            //     Logout();
            // }
        }
    }

    return(
        <>
            {!ready ? <LoaderElement /> : props.children}
        </>
    )
}

export default Security;