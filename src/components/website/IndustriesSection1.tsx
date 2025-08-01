const IndustriesSection = () => {
  const industries = [
    {
      title: "Frontend Programming Language",
      isHighlighted: false,
      technologies: [
        { name: "Tilda", color: "bg-gray-800 text-white" },
        { name: "Figma", color: "bg-gray-800 text-white" },
        { name: "Adobe XD", color: "bg-purple-600 text-white" },
        { name: "Photoshop", color: "bg-blue-600 text-white" },
        { name: "Spark AR", color: "bg-gray-800 text-white" },
        { name: "Illustrator", color: "bg-orange-600 text-white" },
        { name: "After Effects", color: "bg-purple-800 text-white" }
      ]
    },
    {
      title: "Artificial Intelligence",
      isHighlighted: true,
      technologies: [
        { name: "Tilda", color: "bg-gray-800 text-white" },
        { name: "Figma", color: "bg-gray-800 text-white" },
        { name: "Adobe XD", color: "bg-red-600 text-white" },
        { name: "Photoshop", color: "bg-blue-600 text-white" },
        { name: "Spark AR", color: "bg-green-600 text-white" },
        { name: "Illustrator", color: "bg-orange-600 text-white" },
        { name: "After Effects", color: "bg-green-600 text-white" }
      ]
    },
    {
      title: "Mobile App Development",
      isHighlighted: false,
      technologies: [
        { name: "Tilda", color: "bg-gray-800 text-white" },
        { name: "Figma", color: "bg-gray-800 text-white" },
        { name: "Adobe XD", color: "bg-purple-600 text-white" },
        { name: "Photoshop", color: "bg-blue-600 text-white" },
        { name: "Spark AR", color: "bg-gray-800 text-white" },
        { name: "Illustrator", color: "bg-orange-600 text-white" },
        { name: "After Effects", color: "bg-purple-800 text-white" }
      ]
    },
    {
      title: "Backend Programming Language",
      isHighlighted: false,
      technologies: [
        { name: "Tilda", color: "bg-gray-800 text-white" },
        { name: "Figma", color: "bg-gray-800 text-white" },
        { name: "Adobe XD", color: "bg-purple-600 text-white" },
        { name: "Photoshop", color: "bg-blue-600 text-white" },
        { name: "Spark AR", color: "bg-gray-800 text-white" },
        { name: "Illustrator", color: "bg-orange-600 text-white" },
        { name: "After Effects", color: "bg-purple-800 text-white" }
      ]
    }
  ];
  return (
    <div className="pb-16 mx-12  bg-background">
      <div className=" mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Industries We Cater
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We pride ourselves on building successful, end to end web and mobile applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl bg-[#F2F5F8] hover:bg-[#8FE89C] group transition-all duration-300 hover:shadow-lg `}
            >
              <h3 className="text-xl font-semibold mb-6 leading-tight">
                {industry.title}
              </h3>
              
              <div className="space-y-3">
                {industry.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`inline-flex border-2 border-[#B8BECB] group-hover:border-black items-center px-3 py-1.5 rounded-full text-sm mr-2 mb-2`}
                  >
                    <div className="w-2 h-2 rounded-full bg-current opacity-70 mr-2"></div>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default IndustriesSection;