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
									<img src="/img/home-eight/1.jpeg" alt="Image" />
									<div className="services-content">
										<h3>Dental Implant</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/home-eight/1.jpeg" alt="Image" />
									<div className="services-content">
										<h3>Dental Implant</h3>
									</div>
								</div>
							</Link>
						</div>

						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/home-eight/1.jpeg" alt="Image" />
									<div className="services-content">
										<h3>Dental Implant</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/home-eight/1.jpeg" alt="Image" />
									<div className="services-content">
										<h3>Dental Implant</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/home-eight/1.jpeg" alt="Image" />
									<div className="services-content">
										<h3>Dental Implant</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/home-eight/1.jpeg" alt="Image" />
									<div className="services-content">
										<h3>Dental Implant</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/home-eight/1.jpeg" alt="Image" />
									<div className="services-content">
										<h3>Dental Implant</h3>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6">
							<Link href="/service-details">
								<div className="single-services">
									<img src="/img/home-eight/1.jpeg" alt="Image" />
									<div className="services-content">
										<h3>Dental Implant</h3>
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
