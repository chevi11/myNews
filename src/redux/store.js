import { createStore ,applyMiddleware,combineReducers} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import pageReducer from './reducers/page.reducer'

const reducer=combineReducers({
    page: pageReducer
})
const store = createStore(
    reducer
)
window.store=store
export default store;


