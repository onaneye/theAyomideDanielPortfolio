import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Footer from "./sections/Footer";
import Testimonial from "./sections/Testimonial";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Services />
    <About/>
    <Portfolio/>
    <Testimonial />
    <Footer/>
    </>
  );
}
