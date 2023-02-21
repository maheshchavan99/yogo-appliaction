import { createSlice } from '@reduxjs/toolkit'
export const user = createSlice({
  name: 'user',
  initialState:{},
  reducers: {
   userdetails:(state,action)=>{
    return{
        ...state,
        ...action.payload
    }
   }
  },
})

export default user.reducer
export const {userdetails  } = user.actions
export const userDetails=(param)=> async dispatch=>{
    try {
        dispatch(userdetails(param))
    } catch (error) {
        return console.log(error)  
    }

}