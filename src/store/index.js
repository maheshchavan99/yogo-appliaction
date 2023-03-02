import { configureStore } from '@reduxjs/toolkit';
import  userdetails  from './userDetails';
export const store = configureStore({
  reducer: 
  {
    classDeatails:userdetails,
  }

},)

