import { ClientsSection } from "../components/website/ClientsSection";
import Banner from "../components/about/Banner";
import CompanyOverviewSection from "../components/about/CompanyOverviewSection ";
const About = () => {
  return (
    <div className="m-4">
      <Banner />
      <div className="lg:w-[60%] text-center mx-auto my-12">
        <h2 className=" text-2xl md:text-4xl mb-2 font-bold">Who We Are</h2>
        <p className=" text-md md:text-lg">
          Kodaima is a team of innovators dedicated to making AI automation
          simple and effective. We help businesses streamline workflows, boost
          efficiency, and scale with smart, AI-driven solutions.
        </p>
      </div>
      <ClientsSection />
      <CompanyOverviewSection/> 
      <div className=" bg-[#222222] sm:bg-[url('/background/servicecontactbg.png')] rounded-2xl py-6 sm:py-10 md:py-16 mb-12 mx-4 md:mx-8 lg:mx-12 ">
        <section className=" flex justify-center items-center ">
          {/* Background pattern */}
          {/* Navigation */}

          {/* Hero Content */}
          <div className=" flex items-center  h-full justify-center  px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl sm:text-3xl md:5xl text-white  font-semibold text-dark-text leading-tight mb-8">
                Let
                <span className="text-[#8FE89C] ml-2">AI</span>do the Work so
                you can <span className="text-[#8FE89C]">Scale Faster</span>
              </p>

              <p className="text-lg sm:text-xl md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-12">
                It’s in Webandcrafts’ DNA to transform your brand into its best
                digital self. We are driven by a customer centric approach in
                creating engaging, interactive and immersive experiences that
                deliver only the best.{" "}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className=" px-4 md:px-8 py-[6px] mx-auto w-fit
                 md:py-2 bg-[#8FE89C] rounded-lg font-semibold text-md md:text-lg transition-all duration-300 transform hover:scale-105">
                  Consult Our Experts
                </button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
        </section>
      </div>
    </div>
  );
};

export default About;
