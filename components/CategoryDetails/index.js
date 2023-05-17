import InstantQuoteForm from "../../components/InstantQuoteForm";
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
					{/* <div className="section-title">
						<h2>OUR POPULAR PRODUCTS</h2>
						<p>
							Our Online Creative and Support Team Allows You to Order Custom
							Boxes with Specific Design Requirements. Half Price Packaging
						</p>
					</div> */}
					<div className="row">
						<div
							className="col-sm-12 col-md-8  bg-info"
							style={{ overflowWrap: "break-word" }}
						>
							Our Online Creative and Support Team Allows You to Order Custom
							Boxes with Specific Design Requirements. Half Price PackaginOur
							Online Creative and Support Team Allows You to Order Custom Boxes
							with Specific Design Requirements. Half Price PackaginOur Online
							Creative and Support Team Allows You to Order Custom Boxes with
							Specific Design Requirements. Half Price PackaginOur Online
							Creative and Support Team Allows You to Order Custom Boxes with
							Specific Design Requirements. Half Price PackaginOur Online
							Creative and Support Team Allows You to Order Custom Boxes with
							Specific Design Requirements. Half Price Packagin
						</div>
						<div className="col-sm-12 col-md-4">
							<InstantQuoteForm />
						</div>
						{/* <div className="col-12">pppppppppppppppp</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default DoctorsStyleFour;
