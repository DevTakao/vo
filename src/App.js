import "./App.css";
import Footer from "./base/Footer";
import NavBar from "./base/NavBar";
import AboutSection from "./components/AboutSection";
import ChallengesSection from "./components/ChallengesSection";
import HeroSection from "./components/HeroSection";
import HighlightSection from "./components/HighlightSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ChallengesSection />
      <HighlightSection />
      <Footer />
    </div>
  );
}

export default App;
