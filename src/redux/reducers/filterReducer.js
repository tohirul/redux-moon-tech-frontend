import { TOGGLE_BRAND } from "../actionTypes/actionTypes";
import { TOGGLE_STOCK } from "./../actionTypes/actionTypes";

const initiateState = {
	filters: {
		brands: [],
		stock: false,
	},
	keyword: "",
};

const filterReducer = (state = initiateState, action) => {
	switch (action.type) {
		case TOGGLE_BRAND:
			return !state.filters.brands.includes(action.payload)
				? {
						...state,
						filters: {
							...state.filters,
							brands: [...state.filters.brands, action.payload],
						},
				  }
				: {
						...state,
						filters: {
							...state.filters,
							brands: state.filters.brands.filter(
								(brand) => brand !== action.payload
							),
						},
				  };

		case TOGGLE_STOCK:
			return {
				...state,
				filters: {
					...state.filters,
					stock: !state.filters.stock,
				},
			};
		default:
			return state;
	}
};

export default filterReducer;
