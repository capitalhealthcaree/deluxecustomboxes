import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import MainBanner from "../components/HomeFive/MainBanner";
import PopularProducts from "../components/PopularProducts";
import CategoryDetails from "../components/CategoryDetails";
import NewsStyleTwo from "../components/Common/NewsStyleTwo";
import Footer from "../components/_App/Footer";

function CategoryPage({ data }) {
	return (
		<>
			<NavbarFour />
			<MainBanner />
			<PopularProducts />
			<CategoryDetails />
			<NewsStyleTwo />
			<Footer />
		</>
	);
}

export default CategoryPage;

// pages/[category name].js

export async function getStaticPaths() {
	// Fetch all the category names from your API or database
	// const categories = await fetch(`/api/categories`).then((res) => res.json());
	let data = [
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-retail-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-food-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-cosmetics-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-bakery-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-vape-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-cbd-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-apparel-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-gift-boxes" },
		{
			name: "Ram",
			email: "Ram@gmail.com",
			category: "custom-stationery-boxes",
		},
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-health-boxes" },
	];
	// Generate the dynamic routes based on the category names
	const paths = data.map((categories) => ({
		params: { category_name: categories.category },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps(context) {
	const { category_name } = context.params;

	// // Use the category name to fetch data from your API or database
	// const data = await fetch(`/api/category/${category_name}`).then((res) =>
	// 	res.json()
	// );
	let data = [
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-retail-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-food-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-cosmetics-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-bakery-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-vape-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-cbd-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-apparel-boxes" },
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-gift-boxes" },
		{
			name: "Ram",
			email: "Ram@gmail.com",
			category: "custom-stationery-boxes",
		},
		{ name: "Ram", email: "Ram@gmail.com", category: "custom-health-boxes" },
	];
	return { props: { data } };
}
