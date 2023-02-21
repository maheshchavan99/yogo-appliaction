
import { combineReducers } from '@reduxjs/toolkit'
import { userdetails } from './userDetails'
const appReducer = combineReducers(
    {
        admin: userdetails
    }
)
const rootReducer = (state, action) => {
    if (action.type === 'clearResult') {
        window.sessionStorage.clear()
        state = {}
    }
    return appReducer(state, action)
}

export default rootReducer
