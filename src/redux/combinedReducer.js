import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import filterReducer from "./reducers/filterReducer";

const combinedReducer = combineReducers({
	reducerProducts: productReducer,
	reducerFilters: filterReducer,
});
export default combinedReducer;
