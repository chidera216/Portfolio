import BackToTop from "./components/BackToUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Works from "./pages/Work";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
