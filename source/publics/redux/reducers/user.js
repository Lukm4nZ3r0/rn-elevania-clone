const initialState = {
    user: [{name:'Default', email:'default@gmail.com'}],
    token: '',
    categories: [],
    categoriesById: [],
    isLoading:false,
}
export default user = (state = initialState, action)=>{
    switch(action.type){
        case 'POST_USER_PENDING':
        case 'POST_REGISTER_PENDING':
        case 'GET_CATEGORIES_PENDING':
        case 'GET_PRODUCT_BY_CATEGORY_PENDING':
            return{
                ...state,
                isLoading:true,
            }
        case 'POST_USER_REJECTED':
        case 'POST_REGISTER_REJECTED':
        case 'GET_CATEGORIES_REJECTED':
        case 'GET_PRODUCT_BY_CATEGORY_REJECTED':
            return{
                ...state,
                isLoading:false,
            }
        case 'POST_USER_FULFILLED':
            return{
                ...state,
                isLoading:false,
                user: action.payload.data.user,
                token: action.payload.data.token
            }
        case 'POST_REGISTER_FULFILLED':
            return{
                ...state,
                isLoading:false,
                user: action.payload.data.createdUser
            }
        case 'GET_CATEGORIES_FULFILLED':
            return{
                ...state,
                isLoading:false,
                categories: action.payload.data.data
            }
        case 'GET_PRODUCT_BY_CATEGORY_FULFILLED':
            return{
                ...state,
                isLoading:false,
                categoriesById: action.payload.data.data
            }
        default:
            return state
    }
}