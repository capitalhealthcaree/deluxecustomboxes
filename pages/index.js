import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import MainBanner from "../components/HomeEight/MainBanner";
import Facilities from "../components/HomeFive/Facilities";
import AboutUs from "../components/HomeEight/AboutUs";
import Department from "../components/HomeEight/Department";
import VirusSymptoms from "../components/HomeTwo/VirusSymptoms";
import OurServices from "../components/HomeEight/OurServices";
import DoctorsStyleFour from "../components/Common/DoctorsStyleFour";
import HowItWorks from "../components/HomeThree/HowItWorks";
import Faqs from "../components/Common/Faqs";
import AppointmentForm from "../components/HomeEight/AppointmentForm";
import TestimonialStyleOne from "../components/Common/TestimonialStyleOne";
import NewsStyleTwo from "../components/Common/NewsStyleTwo";
import FunFactStyleThree from "../components/Common/FunFactStyleThree";
import Footer from "../components/_App/Footer";
// #002868 , #BF0A30
const Index8 = () => {
	return (
		<>
			<NavbarFour />

			<MainBanner />

			<Facilities />

			<AboutUs />

			<Department />

			{/* <FunFactStyleThree /> */}

			{/* <OurServices /> */}

			{/* <div className="bg-color">
        <DoctorsStyleFour />
      </div> */}

			{/* <Pricing /> */}

			<FunFactStyleThree />

			<HowItWorks />

			<DoctorsStyleFour />
      
			<VirusSymptoms />

			<Faqs />

			<NewsStyleTwo />

			{/* <Subscribe /> */}

			<Footer />
		</>
	);
};

export default Index8;
