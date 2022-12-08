import { ADD_TO_CART } from "./../actionTypes/actionTypes";
// import store from './../store';

const cartCounter = (store) => (next) => (action) => {
	// console.log("Current State:", state.getState());
	// console.log("Action:", action);
	const state = store.getState();
	const cart = state.reducerProducts.cart;

	if (action.type === ADD_TO_CART) {
		const updateAction = {
			...action,
			payload: { ...action.payload, orderPosition: cart.length + 1 },
		};
		return next(updateAction);
	}
	return next(action);
};
export default cartCounter;
