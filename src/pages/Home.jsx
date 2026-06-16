import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PetDashboard from "../components/PetDashboard";
import AIChat from "../components/AIChat";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PetDashboard />
      <AIChat/>
      <Benefits/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default Home;