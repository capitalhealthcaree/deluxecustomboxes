import React from "react";
const data = [
	{
		heading: "Pink Donut Boxes",
		imageSrc: "/img/popular-packging-product/pink-donut-boxes.jpg",
		alt: "Pink Donut Boxes",
	},
	{
		heading: "Macaron Boxes",
		imageSrc: "/img/popular-packging-product/macaron-boxes.jpg",
		alt: "Macaron Boxes",
	},
	{
		heading: "Custom Popcorn Boxes",
		imageSrc: "/img/popular-packging-product/custom-popcorn-boxes.jpg",
		alt: "Custom Popcorn Boxes",
	},
	{
		heading: "CBD Hemp Oil Boxes",
		imageSrc: "/img/popular-packging-product/cbd-hemp-oil-boxes.jpg",
		alt: "CBD Hemp Oil Boxes",
	},
	{
		heading: "Bath Packaging Boxes",
		imageSrc: "/img/popular-packging-product/Bath-Packaging-Box.jpg",
		alt: "Bath Packaging Boxes",
	},
	{
		heading: "Mailer Boxes",
		imageSrc: "/img/popular-packging-product/mailer-boxes.jpg",
		alt: "Mailer Boxes",
	},
	{
		heading: "Soap Boxes",
		imageSrc: "/img/popular-packging-product/soap-boxes.jpg",
		alt: "Soap Boxes",
	},
	{
		heading: "Vape Boxes",
		imageSrc: "/img/popular-packging-product/vape-boxes.jpg",
		alt: "Vape Boxes",
	},
];
const DoctorsStyleFour = () => {
	return (
		<>
			<div className="doctors-area-two seven pt-5 pb-4">
				<div className="container">
					<div className="section-title">
						<h2>OUR POPULAR PRODUCTS</h2>
						<p>
							Our Online Creative and Support Team Allows You to Order Custom
							Boxes with Specific Design Requirements. Half Price Packaging
							Offers Wide Assortment of Custom Boxes to Choose From
						</p>
					</div>

					<div className="row justify-content-center">
						{data.map((item, i) => {
							return (
								<div className="col-lg-3 col-sm-6" key={i}>
									<div className="single-doctors-two">
										<div className="doctor-img">
											<img src={item.imageSrc} alt={item.alt} />

											<div className="doctors-content">
												<h3>{item.heading}</h3>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default DoctorsStyleFour;
