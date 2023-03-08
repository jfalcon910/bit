import axios from 'axios';
import {ApiRequest} from './request.interface';

const api = async ({method='',path='',token='',data}:ApiRequest) => {
    return await axios.request({
        method,
        baseURL:`${path}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        data
    })
};

export default api;