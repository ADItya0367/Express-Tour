import axios from 'axios';

const API_URL = 'http://localhost:5000';

const registerUser=(data)=>{
   return axios.post(API_URL+'/register',data)
}

const loginUser=(data)=>{
    return axios.post(API_URL+'/login',data)
}

const AuthServices = {
    registerUser,
    loginUser
}

export default AuthServices;