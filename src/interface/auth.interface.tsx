export interface UserFormikInterface {
    handleSubmit?: any,
    handleChange?: any,
    handleBlur?: any,
    values?: any,
    errors?: any,
    resetForm?: any,
}

export interface UserDataResponseInterface{
    id: string,
    name: string,
    email: string,
    isAdmin: boolean,
}

export interface UserAuthResponseInterface {
    token: string,
    userData: UserDataResponseInterface,
}

export interface UserFomLoginInterface {
    email: string,
    password: string,
}

export const LoginFormValues:UserFomLoginInterface = {
    email: '',
    password: '',
}