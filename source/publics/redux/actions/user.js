import axios from 'axios'
import URL from './URL'
import store from '../store'

export const login = (email, password) => {
    return{
        type: 'GET_USER',
        payload: axios.get(`http://192.168.100.67:3000/users?email=${email}&password=${password}`)
    }
}