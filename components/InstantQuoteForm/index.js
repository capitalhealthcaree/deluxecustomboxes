import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
	MySwal.fire({
		title: "Congratulations!",
		text: "Your message was successfully send and will back to you soon",
		icon: "success",
		timer: 2000,
		timerProgressBar: true,
		showConfirmButton: false,
	});
};

// Form initial state
const INITIAL_STATE = {
	name: "",
	email: "",
	number: "",
	subject: "",
	text: "",
};

const ContactForm = () => {
	const [contact, setContact] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevState) => ({ ...prevState, [name]: value }));
		// console.log(contact)
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `${baseUrl}/api/contact`;
			const { name, email, number, subject, text } = contact;
			const payload = { name, email, number, subject, text };
			const response = await axios.post(url, payload);
			console.log(response);
			setContact(INITIAL_STATE);
			alertContent();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="main-contact-area contact">
				<div className="container">
					{/* <div className="section-title">
						{/* <span className="top-title">Instant Quote</span> */}
					{/* <h2>Instant Quote</h2> */}
					{/* <p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
							quibusdam deleniti porro praesentium. Aliquam minus quisquam velit
							in at nam.
						</p> */}
					{/* </div>  */}

					<div className="contact-wrap contact-pages mb-0">
						<div className="contact-form">
							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-12">
										<div className="form-group">
											<label>Name</label>
											<input
												type="text"
												name="name"
												placeholder="Your Name"
												className="form-control"
												value={contact.name}
												onChange={handleChange}
												required
											/>
										</div>
									</div>

									<div className="col-12">
										<div className="form-group">
											<label>Email</label>
											<input
												type="text"
												name="email"
												placeholder="Your Email"
												className="form-control"
												value={contact.email}
												onChange={handleChange}
												required
											/>
										</div>
									</div>

									<div className="col-12">
										<div className="form-group">
											<label>Number</label>
											<input
												type="text"
												name="number"
												placeholder="Phone Number"
												className="form-control"
												value={contact.number}
												onChange={handleChange}
												required
											/>
										</div>
									</div>

									<div className="col-12">
										<label>Select Product</label>
										<div className="form-group">
											<select className="form-control">
												<option value="0">Select Service</option>
												<option value="1">Surgery & Radiology</option>
												<option value="2">Children Care</option>
												<option value="3">Orthopedics</option>
												<option value="4">Nuclear Magnetic</option>
												<option value="5">Eye Treatment</option>
												<option value="6">X-Ray</option>
											</select>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label>Quantity</label>
											<input
												type="Number"
												name="number"
												placeholder="Quantity"
												className="form-control"
												value={contact.number}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className="col-12 mb-3">
										<label>Description</label>

										<div className="form-group">
											<textarea
												name="text"
												cols="30"
												rows="6"
												placeholder="Write your message..."
												className="form-control"
												value={contact.text}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className="col-12">
										<button type="submit" className="default-btn btn-two">
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
