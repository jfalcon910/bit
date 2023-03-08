import { GetCookie } from "../../../config/utils/Cookies";
import { UserStoreInterface } from "./user.interface";

const UserData = GetCookie(process.env.REACT_APP_PUBLIC_USER_DATA_COOKIE);
const userDataIni = {
    email:'',
    id: '',
    name: '',
};

export const UserDefault: UserStoreInterface={
    userData:UserData ? UserData : userDataIni,
    isLoged: UserData ? true : false,
    preferences: {
        lang: 'es',
    }
} 