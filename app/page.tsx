import AboutMe from "./Sections/AboutMe";
import LandingPage from "./Sections/LandingPage";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Contact from "./Sections/Contact";
import ResumeDownload from "./Sections/ResumeDownload";
import Education from "./Sections/Education";
import Footer from "./Sections/Footer";
import CTA from "./Sections/CTA";
import ScrollHorizontal from "./_components/ScrollHorizontall";

export default function Home() {
  return (
    <div className="py-20">
      <LandingPage />
      <ScrollHorizontal/>
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
