import SmoothScroll from "./components/ui/SmoothScroll";
import ScrollTop from "./components/ui/ScrollTop";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import StatsCounter from "./components/sections/StatsCounter";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Pricing from "./components/sections/Pricing";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Team from "./components/sections/Team";
import Careers from "./components/sections/Careers";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <StatsCounter />
      <Portfolio />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Team />
      <Careers/>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;