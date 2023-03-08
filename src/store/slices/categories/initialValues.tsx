import { GetCookie } from "../../../config/utils/Cookies";
import { CategoryStoreInterface } from "./category.interface";
const category = GetCookie(process.env.REACT_APP_PUBLIC_CATEGORY_COOKIE);
export const CategoryDefault: CategoryStoreInterface={
    name: category ? category :'',
} 