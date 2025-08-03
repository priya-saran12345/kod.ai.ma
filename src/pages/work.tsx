import { CaseStudy } from "../components/website/caseStudy"
import { ServicesSection } from "../components/website/ServicesSection";
import Banner from "../components/work/Banner"
import { IoIosArrowDown } from "react-icons/io";
const Work = () => {
  return (
    <div>
      <div className="m-4">
        <Banner/>
    </div>
<div className="flex mx-12 my-8 justify-between items-center">
  <h2 className="text-3xl font-semibold">
    Our Case Studies <span className="text-green-400 text-lg">(230)</span>
  </h2>
<div className="flex gap-3">
  <button className="bg-[#8FE89C] text-black px-4 py-2 rounded-md hover:bg-green-500 transition flex items-center gap-1">
    Industries <IoIosArrowDown className="text-black text-sm" />
  </button>
  <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition flex items-center gap-1">
    Experties <IoIosArrowDown className="text-black text-sm" />
  </button>
</div>
</div>
    <CaseStudy/>
    <ServicesSection/>
      <div className="bg-[#222222] rounded-2xl mb-12 mx-12 pt-3">
        <section className=" flex justify-center items-center  min-h-[80vh]">
          {/* Background pattern */}
          {/* Navigation */}
          
          {/* Hero Content */}
          <div className=" flex items-center  h-full justify-center  px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
    
              <p className="text-5xl md:text-5xl text-white  font-semibold text-dark-text leading-tight mb-8">
                Let 
                 <span className="text-[#8FE89C] ml-2">AI</span>do the Work so you can  <span className="text-[#8FE89C]">Scale Faster</span>
              </p>
              
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
    
    </div>
  )
}

export default Work
