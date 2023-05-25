import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const CategoryBanner = ({ categoryBanner }) => {
	return (
		<>
			<div className="hero-slider-area">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					className="hero-slider-wrap"
					style={{ height: "65vh" }}
				>
					<SwiperSlide>
						<div
							className="slider-item"
							style={{
								backgroundImage: `url(${categoryBanner.bannerIamge})`,
								height: "65vh",
							}}
						>
							<div className="d-table">
								<div className="d-table-cell">
									<div className="container">
										<div className="row align-items-center">
											<div className="col-lg-9">
												<div className="slider-text one d-none d-sm-block">
													<span className="top-title">Order Now</span>
													<h1>{categoryBanner.h}</h1>
													<p>{categoryBanner.p}</p>

													<div className="slider-btn">
														<Link href="/appointment" className="default-btn">
															Request For Quote
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default CategoryBanner;
