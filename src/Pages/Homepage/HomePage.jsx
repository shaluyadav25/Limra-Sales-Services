import AboutSection from "./Components/HeroSection/AboutSection"
import HeroSection from "./Components/HeroSection/HeroSection"
import Navbar from "./Components/HeroSection/Navbar"
import OtherServices from "./Components/HeroSection/OtherServices"
import ServicesSection from "./Components/HeroSection/ServicesSection"
import SolutionSection from "./Components/HeroSection/SolutionSection"


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <SolutionSection/>
      <OtherServices/>
    </div>
  )
}

export default HomePage