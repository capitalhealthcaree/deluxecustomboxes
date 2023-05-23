import React, { useState } from "react";
import axios from "axios";
// Form initial state
const INITIAL_STATE = {
	name: "",
	email: "",
	number: "",
	subject: "",
	text: "",
};
const AppointmentForm = () => {
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
			<div className="appointment-area jarallax ptb-50">
				<div className="container">
					<div className="appointment-here-form">
						<span className="top-title">Make An Appointment</span>
						<h2>We Are Here For You</h2>

						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-lg-6 col-sm-12 mb-3">
									<label>Product Information</label>
									{/* <div className="form-group"> */}
									<select className="form-control">
										<option value="0">Select Service</option>
										<option value="1">Surgery & Radiology</option>
										<option value="2">Children Care</option>
										<option value="3">Orthopedics</option>
										<option value="4">Nuclear Magnetic</option>
										<option value="5">Eye Treatment</option>
										<option value="6">X-Ray</option>
									</select>
									{/* </div> */}
								</div>
								<div className="col-lg-6 col-sm-12 mb-3">
									<label>Quantity</label>
									<input
										type="text"
										name="name"
										placeholder="Enter Quantity"
										className="form-control"
										value={contact.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="col-lg-12 mb-3">
									<label>Enter Size</label>
									<div className="row">
										<div className="col-4">
											{/* <div className="form-group"> */}
											{/* <label>Enter Size</label> */}
											<input
												type="text"
												name="length"
												placeholder="Length"
												className="form-control"
												value={contact.name}
												onChange={handleChange}
												required
											/>
											{/* </div> */}
										</div>
										<div className="col-4">
											{/* <div className="form-group"> */}
											{/* <label>Enter Size</label> */}
											<input
												type="text"
												name="width"
												placeholder="Width"
												className="form-control"
												value={contact.name}
												onChange={handleChange}
												required
											/>
											{/* </div> */}
										</div>
										<div className="col-4">
											{/* <div className="form-group"> */}
											{/* <label>Enter Size</label> */}
											<input
												type="text"
												name="depth"
												placeholder="Depth"
												className="form-control"
												value={contact.name}
												onChange={handleChange}
												required
											/>
											{/* </div> */}
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<label>Choose Materials</label>
									<div className="row">
										<div className="col-4">
											{/* <div className="form-group"> */}
											<select className="form-control">
												<option value="0">Materials</option>
												<option value="1">Surgery & Radiology</option>
												<option value="2">Children Care</option>
												<option value="3">Orthopedics</option>
												<option value="4">Nuclear Magnetic</option>
												<option value="5">Eye Treatment</option>
												<option value="6">X-Ray</option>
											</select>
											{/* </div> */}
										</div>
										<div className="col-4">
											<select className="form-control">
												<option value="0">Printing</option>
												<option value="1">Surgery & Radiology</option>
												<option value="2">Children Care</option>
												<option value="3">Orthopedics</option>
												<option value="4">Nuclear Magnetic</option>
												<option value="5">Eye Treatment</option>
												<option value="6">X-Ray</option>
											</select>
										</div>
										<div className="col-4">
											<select className="form-control">
												<option value="0">E-flute</option>
												<option value="1">Surgery & Radiology</option>
												<option value="2">Children Care</option>
												<option value="3">Orthopedics</option>
												<option value="4">Nuclear Magnetic</option>
												<option value="5">Eye Treatment</option>
												<option value="6">X-Ray</option>
											</select>
										</div>
										<div className="col-4 mt-3 mb-3">
											<select className="form-control">
												<option value="0">Extra Finshes</option>
												<option value="1">Surgery & Radiology</option>
												<option value="2">Children Care</option>
												<option value="3">Orthopedics</option>
												<option value="4">Nuclear Magnetic</option>
												<option value="5">Eye Treatment</option>
												<option value="6">X-Ray</option>
											</select>
										</div>
										<div className="col-4 mt-3 mb-3">
											<select className="form-control">
												<option value="0">Coating / Lamination</option>
												<option value="1">Surgery & Radiology</option>
												<option value="2">Children Care</option>
												<option value="3">Orthopedics</option>
												<option value="4">Nuclear Magnetic</option>
												<option value="5">Eye Treatment</option>
												<option value="6">X-Ray</option>
											</select>
										</div>
										<div className="col-4 mt-3">
											<select className="form-control">
												<option value="0">Color</option>
												<option value="1">Surgery & Radiology</option>
												<option value="2">Children Care</option>
												<option value="3">Orthopedics</option>
												<option value="4">Nuclear Magnetic</option>
												<option value="5">Eye Treatment</option>
												<option value="6">X-Ray</option>
											</select>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-sm-12 mb-3">
									<label>Your Name</label>
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
								<div className="col-lg-6 col-sm-12 mb-3">
									<label>Your Email</label>
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

								<div className="col-lg-6 mb-3">
									<label>Phone Number</label>
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
								<div className="col-lg-6 mb-3">
									<label>Upload Artwork</label>
									<input
										type="file"
										name="number"
										className="form-control"
										placeholder="Phone Number"
										value={contact.number}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="col-lg-12 col-md-12 mb-3">
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

								<div className="col-lg-6 col-sm-6">
									<button type="submit" className="default-btn">
										Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AppointmentForm;
