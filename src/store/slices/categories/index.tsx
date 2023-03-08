import { createSlice } from "@reduxjs/toolkit";
import { CategoryDefault } from './initialValues';

export const userSlice = createSlice({
    name:'categories',
    initialState: CategoryDefault,
    reducers:{
        setCategorySelected:(state, action) => {
            const data=action.payload;
            state.name = data;
        },
    }
});

export const { setCategorySelected } = userSlice.actions;

export default userSlice.reducer;