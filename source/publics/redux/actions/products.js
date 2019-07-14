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

export const getAllCartItems = (id) =>{
  return{
    type: 'GET_CART_ITEMS',
    payload: axios.get(`http://192.168.6.163:3000/tmpCart/users/${id}`)
  }
}

export const addToCart = (productId,userId) =>{
  console.log('dari action');
  
  return{
    type: 'ADD_TO_CART',
    payload : axios.patch(`http://192.168.6.163:3000/tmpCart/${userId}`,[
      {field: products, value: [productId]}
    ]
    )
  }
}