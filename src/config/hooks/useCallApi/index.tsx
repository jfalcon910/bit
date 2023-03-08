import { useEffect, useState } from "react";
import { AxiosResponse } from 'axios';
import api from './request';
import { HTTP_METHODS } from './constants';
import {ApiResponseInterface} from '../../../interface'
import Loader from "./loader";
import { GetAuthCookie } from "../../utils/Auth";

interface State{
    LoadingData: boolean,
    OnError?: Error,
    Data?: any,
}

export function useCallApi(path:string='', method:string=HTTP_METHODS.GET){
    const [status, setStatus] = useState<State>({
        LoadingData: false
    });

    const GetData = async(path:string,method:string,data={}):Promise<ApiResponseInterface> => {
        setStatus({ LoadingData: true });
        try{
            const {token} = GetAuthCookie();
            const response: AxiosResponse<any> = await api({
                method,
                path,
                token,
                data
              })
              setStatus({ LoadingData: false, Data:response.data })
              return response.data;
        }catch(error:any){
            setStatus({ LoadingData: false, OnError:error });
            return {code:500,status:false,message:'Error al obtener la información',data:error}
        }
    }

    const LoaderElement = () => {
        return(<Loader />)
    }

    useEffect(()=>{
        if(path!='' || path != null){
            const data = {};
            GetData(path,method,data);
        }
    },[path])    

    return { ...status, GetData, LoaderElement };
}