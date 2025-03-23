import BackgroundSite from "./layout/BackgroundSite";
import Books from "./layout/Books";
import CallToAction from "./layout/CallToAction";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";
import Info from "./layout/Info";

const App = () => {
  return (
    <>
      <BackgroundSite />
      <Hero />
      <Info />
      <Books />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
