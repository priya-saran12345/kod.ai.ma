import { ClientsSection } from "../components/website/ClientsSection";
import { CaseStudy } from "../components/website/caseStudy";
import ContactForm from "../components/website/contact";
// import { Footer } from "../components/website/Footer";
import { HeroBanner } from "../components/website/HeroBanner";
import  IndustriesSection1  from "../components/website/IndustriesSection1";
import { IndustriesSection } from "../components/website/IndustriesSection";
import { ServicesSection } from "../components/website/ServicesSection";
export const LandingPage = () => {
    return (
    <>
    <div className="min-h-screen p-4">
      <HeroBanner/>
      <ServicesSection/>
      <IndustriesSection/>
      <ClientsSection/>
      <CaseStudy/>
      <IndustriesSection1/>
      <ContactForm/>
    </div>
      {/* <Footer/> */}
    </>
  );
};