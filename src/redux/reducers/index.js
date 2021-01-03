import {combineReducers} from 'redux'
import pageReducer from './reducers/page.reducer'

export default combineReducers({
    page: pageReducer
})