import { createSlice } from "@reduxjs/toolkit";
import { UserDefault } from './initialValues';

export const userSlice = createSlice({
    name:'users',
    initialState: UserDefault,
    reducers:{
        setUserPreferences:(state, action) => {
            const data=action.payload;
            state.preferences=data;
        },
        setUserData:(state, action) => {
            const data=action.payload;
            state.userData=data;
        },
        setIsLoged:(state, action) => {
            const data=action.payload;
            state.isLoged=data;
        },
    }
});

export const { setUserPreferences,setUserData,setIsLoged } = userSlice.actions;

export default userSlice.reducer;