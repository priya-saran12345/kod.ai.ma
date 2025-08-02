import { Header } from "../website/Header";

const HeroSection = () => {
  return (
  <div className="bg-[#222222] rounded-2xl pt-3">
      <Header/>
    <section className=" flex justify-center items-center  min-h-[80vh]">
      {/* Background pattern */}
      {/* Navigation */}
      
      {/* Hero Content */}
      <div className=" flex items-center  h-full justify-center  px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
                      <button className=" px-8 py-2 border border-[#8FE89C] text-[#8FE89C]  mb-2 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
Work            </button>

          <h1 className="text-5xl md:text-5xl text-white  font-bold text-dark-text leading-tight mb-8">
             <span className="text-[#8FE89C]">Design.</span>Build.Market
          </h1>
          
          <p className="text-xl md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-12">
It’s in Webandcrafts’ DNA to transform your brand into its best digital self. We are driven by a customer centric approach in creating engaging, interactive and immersive experiences that deliver only the best.          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
            <button className=" px-8 py-2 bg-[#8FE89C] rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Consult Our Experts
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
    </section>

      </div>

  );
};

export default HeroSection;