import axios from 'axios'
import URL from './URL'

export const getProductByCategory = (idCategory) =>{
    
    return{
        type: 'GET_PRODUCT_BY_CATEGORY',
        payload: axios.get(`${URL}/products/${idCategory}`)
    }
}

export const getProductById = (id) => {
  return{
    type: 'GET_PRODUCT_BY_ID',
    payload: axios.get(`${URL}/products/getById/${id}`)
  }
}