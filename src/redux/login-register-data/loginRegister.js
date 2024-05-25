import { createSlice } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit';

export const sendFormDataToServices = createAction('src/services/Login.js');

const initialState = {
    name: "",
    email: '',
    password: '',
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        sendFormData: (state, action) => {
            const { name, email, password } = action.payload;
            state.name = name
            state.email = email
            state.password = password
        },
        resetFormData: (state) => {
            return initialState;
        },

        sendLoginData :(state, action) =>{
            const {email, password} = action.payload
            state.email = email
            state.password = password
            
        },
    }
})




// Action creators are generated for each case reducer function
export const { sendFormData, resetFormData, sendLoginData } = formSlice.actions;

export default formSlice.reducer;