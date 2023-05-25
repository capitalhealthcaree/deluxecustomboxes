import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import CategoryBanner from "../components/Common/CategoryBanner";
import PopularProducts from "../components/PopularProducts";
import CategoryDetails from "../components/CategoryDetails";
import NewsStyleTwo from "../components/Common/NewsStyleTwo";
import Footer from "../components/_App/Footer";

const bannerData = [
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-retail-boxes.jpg",
		category: "custom-retail-boxes",
	},
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-food-boxes.jpg",
		category: "custom-food-boxes",
	},
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-cosmetics-boxes.jpg",
		category: "custom-cosmetics-boxes",
	},
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-bakery-boxes.jpg",
		category: "custom-bakery-boxes",
	},
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-vape-boxes.jpg",
		category: "custom-vape-boxes",
	},
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-cbd-boxes.jpg",
		category: "custom-cbd-boxes",
	},
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-apparel-boxes.jpg",
		category: "custom-apparel-boxes",
	},
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-gift-boxes.jpg",
		category: "custom-gift-boxes",
	},
	{
		h: "Packaging Solutions that Protect and Impress",
		p: "Deluxe Custom Boxes offers custom printed boxes with logos & packaging boxes for product packaging at wholesale with free shipping and 20% Discount.",
		bannerIamge: "/img/category-banner/custom-mailer-boxes.jpg",
		category: "custom-mailer-boxes",
	},
];

function CategoryPage({ data, categoryBanner }) {
	return (
		<>
			<NavbarFour />
			<CategoryBanner categoryBanner={categoryBanner} />
			<PopularProducts />
			<CategoryDetails />
			<NewsStyleTwo />
			<Footer />
		</>
	);
}

export default CategoryPage;

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
			category: "custom-mailer-boxes",
		},
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
	];

	const categoryBanner = bannerData.find(
		(item) => item.category === category_name
	);

	return { props: { data, categoryBanner } };
}
