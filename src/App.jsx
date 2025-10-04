import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SectionTwo from "./components/SectionTwo.jsx";
import SectionThree from "./components/SectionThree.jsx";
import SectionFour from "./components/SectionFour.jsx";
import SectionFive from "./components/SectionFive.jsx";
import SectionSix from "./components/SectionSix.jsx";

function App() {
  return (
    <div className="font-sans antialiased scroll-smooth bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default App;
