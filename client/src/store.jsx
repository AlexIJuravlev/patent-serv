import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import { thunk } from "redux-thunk";
import { appReducer, todoReducer,userReducer } from "./reducer";


const reducer = combineReducers({
	app: appReducer,
	todo: todoReducer,
	user: userReducer
})

const composeEnhangers = window.___RERUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhangers(applyMiddleware(thunk)))
