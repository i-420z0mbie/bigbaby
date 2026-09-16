import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Menu from "./components/Menu.jsx";
import PullQuote from "./components/PullQuote.jsx";
import Maker from "./components/Maker.jsx";
import Gallery from "./components/Gallery.jsx";
import Reviews from "./components/Reviews.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Story />
        <HowItWorks />
        <Menu />
        <PullQuote />
        <Maker />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
