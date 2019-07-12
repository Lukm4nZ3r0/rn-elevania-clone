import axios from 'axios'
import URL from './URL'
import store from '../store'

const ip = 'http://elevenia.herokuapp.com/'

export const getUserById = (sort) => {
    return {
        type: 'GET_NOTES',
        payload : axios.get(ip+`notes?sort=${sort}`)
    }
}