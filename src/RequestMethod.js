import axios from 'axios'

const base_URL = 'http://localhost:7000/api/'
const Token = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).token

const publicRequest =  axios.create({
    baseURL: base_URL,

})

const userRequest =  axios.create({
    baseURL: base_URL,
    headers: {
        
        token : `Bearer ${Token}`
    }
})

export default (publicRequest , userRequest)