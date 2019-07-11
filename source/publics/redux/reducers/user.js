const initialState = {
    user: [],
    isLoading:false,
}
export default user = (state = initialState, action)=>{
    switch(action.type){
        case 'POST_USER_PENDING':
            return{
                ...state,
                isLoading:true,
            }
        case 'POST_USER_REJECTED':
            return{
                ...state,
                isLoading:false,
            }
        case 'POST_USER_FULFILLED':
            return{
                ...state,
                isLoading:false,
                user: action.payload.data.user
            }
        default:
            return state
    }
}