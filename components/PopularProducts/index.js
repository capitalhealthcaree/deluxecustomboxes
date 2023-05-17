import React from "react";
const data = [
	{
		heading: "Candle Packaging Boxes",
		imageSrc: "/img/popular-packging-product/candle-packaging-boxes.jpg",
		alt: "Candle Packaging Boxes",
	},
	{
		heading: "CBD Boxes",
		imageSrc: "/img/popular-packging-product/cbd-boxes.jpg",
		alt: "CBD Boxes",
	},
	{
		heading: "CB Display Boxes",
		imageSrc: "/img/popular-packging-product/cb-display-boxes.jpg",
		alt: "CB Display Boxes",
	},
	{
		heading: "Cup Cake Boxes",
		imageSrc: "/img/popular-packging-product/cup-cake-boxes.jpg",
		alt: "Cup Cake Boxes",
	},
	{
		heading: "Hemp Boxes",
		imageSrc: "/img/popular-packging-product/hemp-boxes.jpg",
		alt: "Hemp Boxes",
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
		heading: "Vape Cartride Boxes",
		imageSrc: "/img/popular-packging-product/vape-cartride-boxes.jpg",
		alt: "Vape Cartride Boxes",
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
