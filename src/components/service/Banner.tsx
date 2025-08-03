import { Header } from "../website/Header";

const HeroSection = () => {
  return (
<div
  className=" pt-3 bg-cover bg-center"
  style={{
    backgroundImage: "url('/background/serviceBannerbg.png')",
  }}
>
      <Header/>
    <section className=" flex justify-center items-center min-h-[60vh] md:min-h-[80vh]">
      {/* Background pattern */}
      {/* Navigation */}
      
      {/* Hero Content */}
      <div className=" flex items-center  h-full justify-center  px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl text-white  font-bold text-dark-text leading-tight mb-3 md:mb-8">
            UI/UX <span className="text-[#8FE89C]">Design </span>Services
          </h1>
          
          <p className="text-md md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-12">
            We create a seamless experience with <span className="text-[#8FE89C]"> UI/UX design </span> using advanced UI technologies to 
            give users the best experience in design what they need and make their experience better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
            <button className=" px-4 w-fit mx-auto md:px-8
              py-[6px] md:py-2 bg-[#8FE89C] rounded-lg font-semibold text-md md:text-lg
              transition-all duration-300 transform hover:scale-105">
              View Our Work
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