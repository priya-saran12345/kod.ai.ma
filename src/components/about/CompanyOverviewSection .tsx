const CompanyOverviewSection = () => {
  const description =
    "Kodaira is a team of innovators dedicated to making AI automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions.";

  const sections = [
    {
      title: "Our Purpose",
      image: "/About/about1.png",
      sideTitle: "Branding",
      sidePoints: ["Logo Design", "Product Design", "Graphic Design"],
    },
    {
      title: "Our Vision",
      image: "/About/about1.png",
      sideTitle: "Branding",
      sidePoints: ["Logo Design", "Product Design", "Graphic Design"],
    },
    {
      title: "Our Mission",
      image: "/About/about1.png",
      sideTitle: "Branding",
      sidePoints: ["Logo Design", "Product Design", "Graphic Design"],
    },
  ];

  return (
    <div className="mx-4 md:mx-8 lg:mx-12">
      {sections.map((section, index) => {
        const isEven = index % 2 === 1;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              isEven ? "md:flex-row-reverse" : ""
            } justify-between items-start gap-6 mb-10 md:mb-16`}
          >
            {/* Left Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                {section.title}
              </h2>
              <p>{description}</p>
            </div>

            {/* Right Content with Background Image & Overlay Text */}
            <div className="w-full md:w-1/2 relative bg-[url('/background/about-card.png')] bg-cover bg-center rounded-md p-6 text-black min-h-[220px]">
              {/* Overlay content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                  {section.sideTitle}
                </h3>
<ul className="space-y-1 text-xl md:text-2xl lg:text-3xl font-bold">
  {section.sidePoints.map((point, i) => (
    <li
      key={i}
      className={i % 2 === 0 ? "text-[#8FE89C]" : "text-black"}
    >
      {point}
    </li>
  ))}
</ul>
                <p className="mt-3 text-xs text-gray-700 max-w-[250px]">
                  With a focus on user experience, for industry leaders and
                  those who want to become them.
                </p>
              </div>
              {/* Optional image at bottom right */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyOverviewSection;
