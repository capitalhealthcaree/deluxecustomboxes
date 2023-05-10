import React from "react";
import Link from "next/link";

const Department = () => {
	return (
		<>
			<div className="services-area-seven pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						{/* <span className="top-title">Department</span> */}
						<h2>OUR POPULAR PRODUCTS</h2>
						<p>
							Our Online Creative and Support Team Allows You to Order Custom
							Boxes with Specific Design Requirements. Half Price Packaging
							Offers Wide Assortment of Custom Boxes to Choose From
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/popular-packging-product/candle-packaging-boxes.jpg" alt="Image" />
									<div className="services-content">
										<h3>Candle Packaging Boxes</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/popular-packging-product/cbd-boxes.jpg" alt="Image" />
									<div className="services-content">
										<h3>CBD Boxes</h3>
									</div>
								</div>
							</Link>
						</div>

						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/popular-packging-product/cb-display-boxes.jpg" alt="Image" />
									<div className="services-content">
										<h3>CB Display Boxes</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/popular-packging-product/cup-cake-boxes.jpg" alt="Image" />
									<div className="services-content">
										<h3>Cup Cake Boxes</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/popular-packging-product/hemp-boxes.jpg" alt="Image" />
									<div className="services-content">
										<h3>Hemp Boxes</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/popular-packging-product/mailer-boxes.jpg" alt="Image" />
									<div className="services-content">
										<h3>Mailer Boxes</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/popular-packging-product/soap-boxes.jpg" alt="Image" />
									<div className="services-content">
										<h3>Soap-Boxes</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/popular-packging-product/vape-cartride-boxes.jpg" alt="Image" />
									<div className="services-content">
										<h3>Vape Cartride Boxes</h3>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Department;
