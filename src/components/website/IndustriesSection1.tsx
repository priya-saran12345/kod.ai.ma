const IndustriesSection = () => {
  const industries = [
    {
      title: "Frontend Programming Language",
      isHighlighted: false,
      technologies: [
        { image: "/industries/icon1.svg", name: "Tilda", color: "bg-gray-800 text-white" },
        { image: "/industries/icon1.svg", name: "Figma", color: "bg-gray-800 text-white" },
        { image: "/industries/icon1.svg", name: "Adobe XD", color: "bg-purple-600 text-white" },
        { image: "/industries/icon1.svg", name: "Photoshop", color: "bg-blue-600 text-white" },
        { image: "/industries/icon1.svg", name: "Spark AR", color: "bg-gray-800 text-white" },
        { image: "/industries/icon1.svg", name: "Illustrator", color: "bg-orange-600 text-white" },
        { image: "/industries/icon1.svg", name: "After Effects", color: "bg-purple-800 text-white" }
      ]
    },
    {
      title: "Artificial Intelligence",
      isHighlighted: true,
      technologies: [
        { image: "/industries/icon1.svg", name: "Tilda", color: "bg-gray-800 text-white" },
        { image: "/industries/icon1.svg", name: "Figma", color: "bg-gray-800 text-white" },
        { image: "/industries/icon1.svg", name: "Adobe XD", color: "bg-red-600 text-white" },
        { image: "/industries/icon1.svg", name: "Photoshop", color: "bg-blue-600 text-white" },
        { image: "/industries/icon1.svg", name: "Spark AR", color: "bg-green-600 text-white" },
        { image: "/industries/icon1.svg", name: "Illustrator", color: "bg-orange-600 text-white" },
        { image: "/industries/icon1.svg", name: "After Effects", color: "bg-green-600 text-white" }
      ]
    },
    {
      title: "Mobile App Development",
      isHighlighted: false,
      technologies: [
        { image: "/industries/icon1.svg", name: "Tilda", color: "bg-gray-800 text-white" },
        { image: "/industries/icon1.svg", name: "Figma", color: "bg-gray-800 text-white" },
        { image: "/industries/icon1.svg", name: "Adobe XD", color: "bg-purple-600 text-white" },
        { image: "/industries/icon1.svg", name: "Photoshop", color: "bg-blue-600 text-white" },
        { image: "/industries/icon1.svg", name: "Spark AR", color: "bg-gray-800 text-white" },
        { image: "/industries/icon1.svg", name: "Illustrator", color: "bg-orange-600 text-white" },
        { image: "/industries/icon1.svg", name: "After Effects", color: "bg-purple-800 text-white" }
      ]
    },
    {
      title: "Backend Programming Language",
      isHighlighted: false,
      technologies: [
        {image: "/industries/icon1.svg", name: "Tilda", color: "bg-gray-800 text-white" },
        {image: "/industries/icon1.svg", name: "Figma", color: "bg-gray-800 text-white" },
        {image: "/industries/icon1.svg", name: "Adobe XD", color: "bg-purple-600 text-white" },
        {image: "/industries/icon1.svg", name: "Photoshop", color: "bg-blue-600 text-white" },
        {image: "/industries/icon1.svg", name: "Spark AR", color: "bg-gray-800 text-white" },
        {image: "/industries/icon1.svg", name: "Illustrator", color: "bg-orange-600 text-white" },
        {image: "/industries/icon1.svg", name: "After Effects", color: "bg-purple-800 text-white" }
      ]
    }
  ];

  return (
    <div className=" pb-8 md:pb-16 mx-3 md:mx-8 lg:mx-12 bg-background">
      <div className="mx-auto">
        <div className=" mb-6 md:mb-12">
          <h2 className=" text-2xl md:text-4xl font-bold text-foreground mb-4">
            Industries We Cater
          </h2>
          <p className=" text-md md:text-lg text-muted-foreground max-w-2xl">
            We pride ourselves on building successful, end to end web and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
className={`p-6 rounded-3xl ${index === 1 ? 'bg-[#8FE89C]' : 'bg-[#F2F5F8]'} group transition-all duration-300 hover:bg-[#8FE89C] hover:shadow-lg`}
            >
              <h3 className=" text-lg md:text-xl font-semibold mb-6 leading-tight">
                {industry.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {industry.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`flex items-center gap-2 border border-[#B8BECB] group-hover:border-black
                       px-3 py-1.5 rounded-full text-sm`}
                  >
                    {tech.image && (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    <span>{tech.name}</span>
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
