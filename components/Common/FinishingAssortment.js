import React from "react";
const data = [
	{
		heading: "Cardboard",
		imageSrc: "/img/StockTypeAndThickness/Cardboard.jpg",
		alt: "Cardboard",
	},
	{
		heading: "Corrugated",
		imageSrc: "/img/StockTypeAndThickness/Corrugated.jpg",
		alt: "Corrugated",
	},
	{
		heading: "Kraft",
		imageSrc: "/img/StockTypeAndThickness/kraft.jpg",
		alt: "Kraft",
	},
	{
		heading: "Rigid",
		imageSrc: "/img/StockTypeAndThickness/rigid.jpg",
		alt: "Rigid",
	},
];
const FinishingAssortment = () => {
	return (
		<>
			<div className="doctors-area-two seven pt-5 pb-4">
				<div className="container">
					<div className="mb-4">
						<h2>Stock Type & Thickness</h2>
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

			<div className="about-area-seven">
				<div className="container">
					<div className="mb-4">
						<h2>Finishing Assortment</h2>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-6">
									<div className="about-img-1"></div>
								</div>
								<div className="col-lg-6">
									<div className="row">
										<div className="col-lg-12">
											<div className="about-img mb-30">
												<img
													src="/img/home-eight/debossing.jpg"
													alt="Image"
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="about-img">
												<img
													src="/img/home-eight/holographic-foiling.jpg"
													alt="Image"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-6">
									<div className="about-img-2"></div>
								</div>
								<div className="col-lg-6">
									<div className="row">
										<div className="col-lg-12">
											<div className="about-img mb-30">
												<img
													src="/img/home-eight/soft-touch-silk-lamination.jpg"
													alt="Image"
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="about-img">
												<img
													src="/img/home-eight/aqueous-coating.jpg"
													alt="Image"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FinishingAssortment;
