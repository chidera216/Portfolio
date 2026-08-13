import { BrowserRouter, Routes, Route } from "react-router-dom";

import BackToTop from "./components/BackToUp";
import ScrollToHash from "./components/ScrollToHash";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Works from "./pages/Work";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
