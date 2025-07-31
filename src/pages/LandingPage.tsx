import { ClientsSection } from "../components/website/ClientsSection";
import ContactForm from "../components/website/contact";
import { Footer } from "../components/website/Footer";
import { Header } from "../components/website/Header";
import { HeroBanner } from "../components/website/HeroBanner";
import  IndustriesSection1  from "../components/website/IndustriesSection1";
import { IndustriesSection } from "../components/website/IndustriesSection";
import { ServicesSection } from "../components/website/ServicesSection";

export const LandingPage = () => {
  return (
    <>
    <div className="min-h-screen p-4">
      <Header/>
      <HeroBanner/>
      <ServicesSection/>
      <IndustriesSection/>
      <ClientsSection/>
      <IndustriesSection1/>
      <ContactForm/>
    </div>
      <Footer/>
    </>
  );
};