import axios from 'axios'
import URL from './URL'

export const login = (dataLogin) => {
    return{
        type: 'POST_USER',
        payload: axios.post(`${URL}/users/login`,
            { email: dataLogin.email,
              password: dataLogin.password
        })
    }
}
export const register = (data) => {
    return{
        type: 'POST_REGISTER',
        payload: axios.post(`${URL}/users/register`,
            { 
                email: data.email,
                password: data.password,
                name: data.name,
                gender: data.gender,
                phone: data.phone,
                birthDate: data.birthDate,
                role: data.role
            })
    }
}
export const getAllCategories = () => {
    return{
        type: 'GET_CATEGORIES',
        payload: axios.get(`${URL}/categories`)
    }
}
export const getWishList = (id) => {
    return{
        type: 'GET_WISHLIST',
        payload: axios.get(`${URL}/wishlist/${id}`)
    }
}

export const getProductByCategory = (idCategory) =>{
    return{
        type: 'GET_PRODUCT_BY_CATEGORY',
        payload: axios.get(`${URL}/products/${idCategory}`)
    }
}
export const profile = (id) => {
    return{
        type: 'GET_PROFILE',
        payload: axios.post(`http://192.168.100.67:3000/users/${id}`)
    }
}