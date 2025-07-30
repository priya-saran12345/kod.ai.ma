export const IndustriesSection = () => {
  const industries = [
    { name: "Healthcare", icon: "🏥", color: "bg-green-100 text-green-800" },
    { name: "Real Estate", icon: "🏢", color: "bg-gray-100 text-gray-800" },
    { name: "eCommerce", icon: "🛒", color: "bg-green-100 text-green-800" },
    { name: "Адаптивная вёрстка макетов", icon: "📱", color: "bg-green-100 text-green-800" },
    { name: "Обучение команды дизайнеров", icon: "⚡", color: "bg-gray-100 text-gray-800" },
    { name: "Разработка и поддержка дизайн-системы", icon: "🎯", color: "bg-green-100 text-green-800" },
  ];

  return (
    <section className=" px-12 pb-20 ">
      <div className=" bg-[#222222] mx-auto">
        {/* Header */}
        <div className="mb-2 px-4 bg-white rounded-2xl w-fit">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Cater</h2>
          <p className="text-gray-600 max-w-2xl">
            We pride ourselves on building successful, and brand web and mobile applications.
          </p>
        </div>

        {/* Industries Tags */}
        <div className=" rounded-2xl px-8">
          <div className="flex flex-wrap gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`${industry.color} px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium`}
              >
                <span>{industry.icon}</span>
                <span>{industry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="mt-16  rounded-2xl p-8 text-white relative overflow-hidden">
          {/* Background Decorative Circles */}
          <div className="absolute right-8 top-8 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20"></div>
          <div className="absolute right-16 bottom-8 w-16 h-16 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-30"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Our Technology</h3>
            <h4 className="text-xl mb-4">
              <span className="text-green-400">Experts Are</span><br />
              <span className="text-green-400">Change Catalysts</span>
            </h4>
            <p className="text-gray-300 text-sm mb-6 max-w-md">
              A great tech transformation is also about change people and what they believe they are capable of achieving.
            </p>
            
            <button className="bg-green-400 hover:bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors">
              About Our People
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};