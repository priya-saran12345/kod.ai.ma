export const HeroBanner = () => {
  return (
    <section className="bg-[#222222] mb-12 text-white rounded-b-4xl py-8 md:py-20 px-4 md:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-40"></div>
      
      {/* Main Green Orb */}
      {/* <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
        <div className="relative">
          <div className="w-80 h-80 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-full opacity-90 blur-sm"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-green-300 via-green-400 to-green-600 rounded-full opacity-80"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-green-200 via-green-300 to-green-500 rounded-full opacity-70"></div>
          <div className="absolute inset-12 bg-gradient-to-br from-green-100 via-green-200 to-green-400 rounded-full opacity-60"></div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className=" text-2xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Web services And{" "}
            <span className="text-[#8FE89C]">mobile app</span>
            <br />
            Making business more{" "}
            <span className="text-[#8FE89C]">profitable</span>
          </h1>
          
          <p className="text-white text-md md:text-lg mb-8 max-w-lg">
            With a focus on user experience, for industry leaders and those who want to become them.
          </p>
        </div>
      </div>
    </section>
  );
};