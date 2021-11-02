import { productsreducer,selectedproductreducer } from "./reducers/reducers";
import { createStore } from "redux";
import { combineReducers } from "redux";

const reducer=combineReducers({
    productsreducer:productsreducer,
    selectedproductreducer:selectedproductreducer
})

export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());