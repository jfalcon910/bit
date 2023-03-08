import { SetCookie,ReadCookie,RemoveCookie } from "./Cookie";

export const SaveCookie = async (data:any,appCookie) => {
    await SetCookie(data,appCookie);
}

export const GetCookie = (appCookie) => {
    return ReadCookie(appCookie);
}

export const DeleteCookie = async (appCookie) => {
    await RemoveCookie(appCookie);
}
