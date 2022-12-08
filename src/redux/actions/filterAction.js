import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const toggleBrand = (brandName) => {
	// console.log(brandName);
	return {
		type: TOGGLE_BRAND,
		payload: brandName,
	};
};

export const toggleStock = () => {
	return {
		type: TOGGLE_STOCK,
	};
};
