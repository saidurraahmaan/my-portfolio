import HeroSection from "./components/HeroSection";
import './style.css';
import AboutMe from "./components/aboutMe/AboutMe";
import Resume from "./components/resume/Resume";

function App() {
    return (
        <>
            <HeroSection/>
            <AboutMe/>
            <Resume/>
        </>
    );
}

export default App;
