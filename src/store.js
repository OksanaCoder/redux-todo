import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunk from "redux-thunk";
const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const initialState = {
    items: [], 
    tasks : [],
    // tasks: ''
}
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
)

export default  store