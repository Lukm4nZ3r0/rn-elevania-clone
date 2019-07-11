import {combineReducers} from 'redux'
import notes from './notes'
import categories from './categories'
import user from './user'

const appReducer = combineReducers({
    notes,
    categories,
    user
})

export default appReducer