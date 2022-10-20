import {createStore , combineReducers , applyMiddleware} from  "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {todoReducer} from "./reducer/todoReduer";
const reducer = combineReducers({
   todos:todoReducer
})
const middleware =  [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;