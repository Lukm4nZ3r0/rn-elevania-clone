const initialState = {
  isLoading:false,
  productsByCategory: [],
  productById: [],
  cartItem:[{name:'test'}]
}
export default products = (state = initialState, action)=>{
  switch(action.type){
      case 'GET_PRODUCT_BY_ID':
      case 'GET_PRODUCT_BY_CATEGORY_PENDING':
      case 'ADD_TO_CART_PENDING':
          return{
              ...state,
              isLoading:true,
          }
      case 'GET_PRODUCT_BY_ID_REJECTED':
      case 'GET_PRODUCT_BY_CATEGORY_REJECTED':
      case 'ADD_TO_CART_REJECTED':
          return{
              ...state,
              isLoading:false,
          }
      case 'GET_PRODUCT_BY_ID_FULFILLED':
          return{
              ...state,
              isLoading:false,
              productById: action.payload.data.data
          }
      case 'GET_PRODUCT_BY_CATEGORY_FULFILLED':
          return{
              ...state,
              isLoading:false,
              productsByCategory: action.payload.data.data
          }
      case 'ADD_TO_CART_FULFILLED':
          return{
            ...state,
            cartItem: [...state.cartItem, ...action.payload.product_price]
          }
      default:
          return state
  }
}