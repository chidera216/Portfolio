import BackToTop from "./components/BackToUp";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Services from "./pages/Services";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <BackToTop />
    </div>
  );
};

export default App;
