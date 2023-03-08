export interface UserRegisterResponseInterface {
    name: string,
    lastName: string,
    email: string,
    password?: string,
    phone: string,
    state: number,
    activationToken?: string,
    resetPasswordToken?: string,
    id: string,
    createdAt: string,
    updatedAt: string,
}

export interface UserFomRegisterInterface {
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
}

export const RegisterFormValues:UserFomRegisterInterface = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
}