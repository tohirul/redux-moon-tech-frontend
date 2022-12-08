import { fetchProducts } from "./../../actions/productAction";

const GET_products = () => {
	return async (dispatch, getState) => {
		const res = await fetch("http://localhost:5000/products");
		const products = await res.json();
		products.data.length && dispatch(fetchProducts(products.data));
	};
};
export default GET_products;
