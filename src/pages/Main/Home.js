import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand, toggleStock } from "./../../redux/actions/filterAction";
import GET_products from "./../../redux/thunk/products/GET_products";

const Home = () => {
	const products = useSelector((state) => state.reducerProducts.products);
	const { brands, stock } = useSelector(
		(state) => state.reducerFilters.filters
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GET_products());
	}, [dispatch]);

	let content;
	const activeClass = "text-white  bg-indigo-500 border-white";
	if (products.length)
		content = products.map((product) => (
			<ProductCard key={product.model} product={product} />
		));

	if (products.length && (stock || brands.length)) {
		content = products
			.filter((product) => {
				// * stock === true returns the products that are in stock
				if (stock) {
					return product.status === true ? product : null;
				}
				// * stock === false returns all products
				return product;
			})
			.filter((product) => {
				// * brands.length enables the products to be filtered by brand names
				if (brands.length) {
					return brands.includes(product.brand);
				}
				// * brand.length === 0 disables the filtering by brand names
				return product;
			})
			.map((product) => (
				<ProductCard key={product._id} product={product} />
			));
	}
	return (
		<div className="max-w-7xl gap-14 mx-auto my-10">
			<div className="mb-10 flex justify-end gap-5">
				<button
					className={`border px-3 py-2 rounded-full font-semibold ${
						stock ? activeClass : null
					} `}
					onClick={() => dispatch(toggleStock())}
				>
					In Stock
				</button>
				<button
					className={`border px-3 py-2 rounded-full font-semibold ${
						brands.includes("amd") ? activeClass : null
					}`}
					onClick={() => {
						dispatch(toggleBrand("amd"));
					}}
				>
					AMD
				</button>
				<button
					className={`border px-3 py-2 rounded-full font-semibold ${
						brands.includes("intel") ? activeClass : null
					}`}
					onClick={() => {
						dispatch(toggleBrand("intel"));
					}}
				>
					Intel
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
				{content}
			</div>
		</div>
	);
};

export default Home;
