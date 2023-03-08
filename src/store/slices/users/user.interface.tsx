import {UserDataResponseInterface} from '../../../interface/index';

interface UserPreferenceInterface{
    lang: string,
}

export interface UserStoreInterface{
    userData: UserDataResponseInterface,
    isLoged: boolean,
    preferences: UserPreferenceInterface,
}