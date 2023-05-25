import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";

const NavbarFour = () => {
	// Add active class
	const [currentPath, setCurrentPath] = useState("");
	const router = useRouter();
	// console.log(router.asPath)

	useEffect(() => {
		setCurrentPath(router.asPath);
	}, [router]);

	const [menu, setMenu] = React.useState(true);

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<header className="header-area">
				<TopHeader />

				<div className="nav-area nav-area-seven">
					<div id="navbar" className="navbar-area">
						<div className="main-nav">
							<nav className="navbar navbar-expand-md navbar-light">
								<div className="container">
									<Link href="/" className="navbar-brand">
										<img src="/img/logo.png" alt="logo" />
									</Link>

									<button
										onClick={toggleNavbar}
										className={classTwo}
										type="button"
										data-toggle="collapse"
										data-target="#navbarSupportedContent"
										aria-controls="navbarSupportedContent"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										<span className="icon-bar top-bar"></span>
										<span className="icon-bar middle-bar"></span>
										<span className="icon-bar bottom-bar"></span>
									</button>

									<div className={classOne} id="navbarSupportedContent">
										<ul className="navbar-nav m-auto">
											<li className="nav-item">
												<Link href="/" className="nav-link">
													Home
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="#"
													onClick={(e) => e.preventDefault()}
													className="nav-link"
												>
													Boxes by Industry <i className="bx bx-plus"></i>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/custom-cosmetics-boxes"
															className={`nav-link ${
																currentPath == "/custom-cosmetics-boxes" &&
																"active"
															}`}
														>
															Custom Cosmetics Boxes
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/custom-apparel-boxes"
															className={`nav-link ${
																currentPath == "/custom-apparel-boxes" &&
																"active"
															}`}
														>
															Custom Apparel Boxes
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/custom-bakery-boxes"
															className={`nav-link ${
																currentPath == "/custom-bakery-boxes" &&
																"active"
															}`}
														>
															Custom Bakery Boxes
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/custom-mailer-boxes"
															className={`nav-link ${
																currentPath == "/custom-mailer-boxes" &&
																"active"
															}`}
														>
															Custom Mailer Boxes
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/custom-retail-boxes"
															className={`nav-link ${
																currentPath == "/custom-retail-boxes" &&
																"active"
															}`}
														>
															Custom Retail Boxes
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/custom-food-boxes"
															className={`nav-link ${
																currentPath == "/custom-food-boxes" && "active"
															}`}
														>
															Custom Food Boxes
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/custom-vape-boxes"
															className={`nav-link ${
																currentPath == "/custom-vape-boxes" && "active"
															}`}
														>
															Custom Vape Boxes
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/custom-cbd-boxes"
															className={`nav-link ${
																currentPath == "/custom-cbd-boxes" && "active"
															}`}
														>
															Custom CBD Boxes
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/custom-gift-boxes"
															className={`nav-link ${
																currentPath == "/custom-gift-boxes" && "active"
															}`}
														>
															Custom Gift Boxes
														</Link>
													</li>
												</ul>
											</li>

											<li className="nav-item">
												<Link
													href="#"
													onClick={(e) => e.preventDefault()}
													className="nav-link"
												>
													Boxes by Materials <i className="bx bx-plus"></i>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/corrugated-boxes"
															className={`nav-link ${
																currentPath == "/corrugated-boxes" && "active"
															}`}
														>
															Corrugated Bboxes
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/cardboard-boxes"
															className={`nav-link ${
																currentPath == "/cardboard-boxes" && "active"
															}`}
														>
															Cardboard Boxes
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/kraft-boxes"
															className={`nav-link ${
																currentPath == "/kraft-boxes" && "active"
															}`}
														>
															Kraft Boxes
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/rigid-boxes"
															className={`nav-link ${
																currentPath == "/rigid-boxes" && "active"
															}`}
														>
															Rigid Boxes
														</Link>
													</li>
												</ul>
											</li>
											<li className="nav-item">
												<Link
													href="#"
													onClick={(e) => e.preventDefault()}
													className="nav-link"
												>
													Boxes by Style <i className="bx bx-plus"></i>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/stickers-and-labels"
															className={`nav-link ${
																currentPath == "/stickers-and-labels" &&
																"active"
															}`}
														>
															Stickers and Labels
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/trays-and-sleeves"
															className={`nav-link ${
																currentPath == "/trays-and-sleeves" && "active"
															}`}
														>
															Trays and Sleeves
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/display-boxes/"
															className={`nav-link ${
																currentPath == "/display-boxes/" && "active"
															}`}
														>
															Display Boxes
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/pillow-boxes"
															className={`nav-link ${
																currentPath == "/pillow-boxes" && "active"
															}`}
														>
															Pillow Boxes
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/gable-boxes"
															className={`nav-link ${
																currentPath == "/gable-boxes" && "active"
															}`}
														>
															Gable Boxes
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/mylar-bags"
															className={`nav-link ${
																currentPath == "/mylar-bags" && "active"
															}`}
														>
															Mylar Bags
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/paper-bags/"
															className={`nav-link ${
																currentPath == "/paper-bags/" && "active"
															}`}
														>
															Paper Bags
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/tuck-boxes"
															className={`nav-link ${
																currentPath == "/tuck-boxes" && "active"
															}`}
														>
															Tuck Boxes
														</Link>
													</li>
													<li className="nav-item">
														<Link
															href="/hang-tags"
															className={`nav-link ${
																currentPath == "/hang-tags" && "active"
															}`}
														>
															Hang Tags
														</Link>
													</li>
												</ul>
											</li>

											<li className="nav-item">
												<Link
													href="#"
													onClick={(e) => e.preventDefault()}
													className="nav-link"
												>
													Company <i className="bx bx-plus"></i>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/services-1/"
															className={`nav-link ${
																currentPath == "/services-1/" && "active"
															}`}
														>
															Services Style One
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/services-2/"
															className={`nav-link ${
																currentPath == "/services-2/" && "active"
															}`}
														>
															Services Style Two
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/services-3/"
															className={`nav-link ${
																currentPath == "/services-3/" && "active"
															}`}
														>
															Services Style Three
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/service-details/"
															className={`nav-link ${
																currentPath == "/service-details/" && "active"
															}`}
														>
															Service Details
														</Link>
													</li>
												</ul>
											</li>
											<li className="nav-item">
												<Link
													href="#"
													onClick={(e) => e.preventDefault()}
													className="nav-link"
												>
													Blog
												</Link>
											</li>
										</ul>
									</div>

									<div className="others-option">
										<div className="subscribe">
											<Link href="/contact" className="default-btn">
												Request For Quote
											</Link>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default NavbarFour;
