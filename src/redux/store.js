import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../redux/login-register-data/loginRegister'

const store = configureStore({
  reducer: {
    form: formReducer,
  },
})

export default store;
