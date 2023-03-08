import { SetCookie,ReadCookie,RemoveCookie } from "./Cookie";
const appCookie = "testplaning-auth";

export const SetAuthCookie = async (data:any) => {
    await SetCookie(data,appCookie);
}

export const GetAuthCookie = () => {
    return ReadCookie(appCookie);
}

export const Logout = async () => {
    await RemoveCookie(appCookie);
    await RemoveCookie(process.env.REACT_APP_PUBLIC_USER_DATA_COOKIE);
    const host = window.location.protocol + "//" + window.location.host;
    window.location.href = host+"/login";
}