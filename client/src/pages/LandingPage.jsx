import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Statistics from "../components/landing/Statistics";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import EmptyStates from "../components/landing/EmptyStates";
import Footer from "../components/landing/Footer";

export default function LandingPage({ nav }) {
  return (
    <div
      className="min-h-screen bg-white "
      style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
    >
      <Header nav={nav} />
      <Hero nav={nav} />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA nav={nav} />
      <EmptyStates />
      <Footer />
    </div>
  );
}
