import Header from "./components/Header";
import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import BeforeAfter from "./components/BeforeAfter";
import BenefitsSection from "./components/BenefitsSection";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg text-text overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProcessSection />
        <ServicesSection />
        <BeforeAfter />
        <BenefitsSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
