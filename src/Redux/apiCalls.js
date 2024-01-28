import publicRequest from '../RequestMethod.js'
import { loginStart , loginSuccess,loginFailure } from './userSlice'

export const login = async (dispatch , user) =>{
    try{
        dispatch(loginStart())
        const res = await publicRequest.post("http://localhost:7000/api/auth/login" , user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure(err))
    }
}