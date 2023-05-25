import React from "react";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="footer-top-area f-bg pt-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div
								className="single-widget"
								data-aos="fade-in"
								data-aos-delay="100"
								data-aos-duration="1200"
							>
								<Link href="/">
									<img src="/img/logo.png" alt="Image" />
								</Link>

								<p>
									Lorem ipsum dolor, sit amet earum consectetur adipisicing
									elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae
									perspiciatis, repudiandae ipsam minus et ex, aliquid dolor
									molestias, earum enim officiis porro obcaecati.
								</p>

								<div className="social-area">
									<ul>
										<li>
											<a href="https://www.facebook.com/" target="_blank">
												<i className="bx bxl-facebook"></i>
											</a>
										</li>
										<li>
											<a href="https://www.twitter.com/" target="_blank">
												<i className="bx bxl-twitter"></i>
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/" target="_blank">
												<i className="bx bxl-linkedin"></i>
											</a>
										</li>
										<li>
											<a
												href="https://www.facebyoutubeook.com/"
												target="_blank"
											>
												<i className="bx bxl-youtube"></i>
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/" target="_blank">
												<i className="bx bxl-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-2 col-md-6">
							<div
								className="single-widget"
								data-aos="fade-in"
								data-aos-delay="200"
								data-aos-duration="1200"
							>
								<h3>Categories</h3>
								<ul>
									<li>
										<Link href="/custom-cosmetics-boxes">
											Custom Cosmetics Boxes
										</Link>
									</li>
									<li>
										<Link href="/custom-apparel-boxes">
											Custom Apparel Boxes
										</Link>
									</li>
									<li>
										<Link href="/custom-bakery-boxes">Custom Bakery Boxes</Link>
									</li>
									<li>
										<Link href="/custom-mailer-boxes">Custom Mailer Boxes</Link>
									</li>
									<li>
										<Link href="/custom-retail-boxes">Custom Retail Boxes</Link>
									</li>
									<li>
										<Link href="/custom-food-boxes">Custom Food Boxes</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div
								className="single-widget"
								data-aos="fade-in"
								data-aos-delay="200"
								data-aos-duration="1200"
							>
								<h3>Hot Products</h3>
								<ul>
									<li>
										<Link href="/corrugated-boxes/">Corrugated Bboxes</Link>
									</li>
									<li>
										<Link href="/cardboard-boxes">Cardboard Boxes</Link>
									</li>
									<li>
										<Link href="/display-boxes">Display Boxes</Link>
									</li>
									<li>
										<Link href="/custom-pillow-boxes">Pillow Boxes</Link>
									</li>
									<li>
										<Link href="/gable-boxes">Gable Boxes</Link>
									</li>
									<li>
										<Link href="/mylar-bags/">Mylar Bags</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div
								className="single-widget"
								data-aos="fade-in"
								data-aos-delay="200"
								data-aos-duration="1200"
							>
								<h3>Company</h3>
								<ul>
									<li>
										<Link href="/corrugated-boxes/">About Us</Link>
									</li>
									<li>
										<Link href="/cardboard-boxes">Contact Us</Link>
									</li>
									<li>
										<Link href="/display-boxes">Shipping Policy</Link>
									</li>
									<li>
										<Link href="/custom-pillow-boxes">
											Refund / Cancellation Policy
										</Link>
									</li>
									<li>
										<Link href="/gable-boxes">Terms & Conditions</Link>
									</li>
									<li>
										<Link href="/mylar-bags/">Blog</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div
								className="single-widget contact"
								data-aos="fade-in"
								data-aos-delay="400"
								data-aos-duration="1200"
							>
								<h3>Get In Touch</h3>
								<ul>
									<li>
										<a href="tel:+822456974">
											<i className="bx bx-phone-call"></i>
											<span>Hotline:</span>
											Phone: +822456974
										</a>
									</li>
									<li>
										<a href="mailto:hello@corf.com">
											<i className="bx bx-envelope"></i>
											<span>Email:</span>
											hello@corf.com
										</a>
									</li>
									<li>
										<i className="bx bx-location-plus"></i>
										<span>Address:</span>
										123, Western Road, Melbourne Australia
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="footer-bottom-area">
				<div className="container">
					<div className="copy-right">
						<p>
							Copyright &copy; {currentYear} All Rights Reserved by{" "}
							<a href="https://deluxecustomboxes.vercel.app" target="blank">
								Deluxe Custom Boxes
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
