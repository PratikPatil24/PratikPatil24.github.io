import React from "react";
// Sections
import TopNavbar from "../Components/Nav/TopNavbar";
import Header from "../Components/Sections/Header";
import Services from "../Components/Sections/Services";
import Projects from "../Components/Sections/Projects";
import Blog from "../Components/Sections/Blog";
import Pricing from "../Components/Sections/Pricing";
import Contact from "../Components/Sections/Contact";
import Footer from "../Components/Sections/Footer"
import TestimonialSlider from "../Components/Elements/TestimonialSlider";

export default function HomePage() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <TestimonialSlider />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


