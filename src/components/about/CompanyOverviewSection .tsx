
const CompanyOverviewSection = () => {
  const description =
    "Kodaira is a team of innovators dedicated to making AI automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions.";

  const sections = [
    { title: "Our Purpose", image: "/src/assets/About/about1.png" },
    { title: "Our Vision", image: "/src/assets/About/about1.png" },
    { title: "Our Mission", image: "/src/assets/About/about1.png" },
  ];

  return (
    <div className="mx-12">
      {sections.map((section, index) => {
        const isEven = index % 2 === 1; // odd index = content left, even index = content right

        return (
          <div
            key={index}
            className={`flex flex-col  md:flex-row ${
              isEven ? "md:flex-row-reverse" : ""
            } justify-between items-start gap-6 mb-12`}
          >
            {/* Content Block */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-700">{description}</p>
            </div>

            {/* Image Block */}
            <div className="w-full md:w-1/2  rounded-md">
              <img
                src={section.image}
                alt="Swirl Design"
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyOverviewSection;
