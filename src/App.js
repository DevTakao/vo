import React from "react";
import "./App.css";
import Footer from "./base/Footer";
import NavBar from "./base/NavBar";
import AboutSection from "./components/AboutSection";
import ChallengesSection from "./components/ChallengesSection";
import HeroSection from "./components/HeroSection";
import HighlightSection from "./components/HighlightSection";
import withSlideInAnimation from "./hoc/withSlideInAnimation";

const animatedSections = [
  AboutSection,
  ChallengesSection,
  HighlightSection,
].map((Section) => withSlideInAnimation(Section));

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      {animatedSections.map((Section, index) => (
        <Section key={index} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
