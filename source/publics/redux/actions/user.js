import axios from 'axios'
import URL from './URL'
import store from '../store'

export const login = (email, password) => {
    return{
        type: 'POST_USER',
        payload: axios.post(`http://192.168.100.67:3000/users/login`,
            { email: email,
              password: password
        })
    }
}
export const register = (data) => {
    return{
        type: 'POST_REGISTER',
        payload: axios.post(`http://192.168.100.67:3000/users/register`,
            { email: email,
              password: password
        })
    }
}
export const profile = (id) => {
    return{
        type: 'GET_PROFILE',
        payload: axios.post(`http://192.168.100.67:3000/users/${id}`)
    }
}