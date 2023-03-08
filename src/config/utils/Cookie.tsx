import cookie from "react-cookies";
import moment from "moment";
import CryptoJS from "crypto-js";
// import { ignoreRouteForAuth } from "./Routes";

const appSecret = "testplaning-secret";
const expires = moment().add(1, "d").toDate();
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.REACT_APP_PUBLIC_JWT_SECRET;
// const ignoreRouteForAuth = [
//   '/', '/login', '/signup', '/signup/confirm-code', '/signup/password',
// ]


//   constructor() {
//     checkTokenExpiry();
//   }
//   checkTokenExpiry() {
//     if (!ignoreRouteForAuth.includes(window.location.pathname)) {
//       let _token = getSingle("token");
//       jwt.verify(_token, JWT_SECRET, (err, response) => {
//         if (err) {
//           logout();
//         }
//       });
//     }
//   }
  const encodeData=(data:any)=>{
    return CryptoJS.AES.encrypt(JSON.stringify(data), appSecret).toString();
  }

  const decodeData=(data:any)=> {
    var bytes = CryptoJS.AES.decrypt(data, appSecret);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  export const SetCookie=(data:any, name:string, remember = false)=> {
    let timeout:any = remember ? moment().add(1, "y").toDate() : expires;
    cookie.save(name, encodeData(data), { path: "/", maxAge: timeout });
  }

  export const ReadCookie=(name:string)=> {
    if (cookie.load(name) !== undefined) {
      let data = decodeData(cookie.load(name));
      return data;
    } else {
      return false;
    }
  }

  export const RemoveCookie = async (name:string|any) =>{
    await cookie.remove(name);
  }
