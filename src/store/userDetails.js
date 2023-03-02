import { createSlice } from '@reduxjs/toolkit'
export const user = createSlice({
  name: 'user',
  initialState:{},
  reducers: {
   yogoDetails:(state,action)=>{
    return{
        ...state,
        ...action.payload
    }
   }
  },
})

export const {yogoDetails} = user.actions
export default user.reducer
export const userDetails=(param)=> async dispatch=>{
    try {
        dispatch(yogoDetails(param))
    } catch (error) {
        return console.log(error)  
    }

}