import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import combinedReducer from "./combinedReducer";
import logger from "redux-logger";
import cartCounter from "./middleware/cartCounter";
import thunk from "redux-thunk";

const middlewares = [cartCounter, thunk, logger];

const store = createStore(
	combinedReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
