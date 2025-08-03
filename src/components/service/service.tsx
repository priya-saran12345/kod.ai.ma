const ServicesSection = () => {
  const services = [
    {
      title: "User Experience Design (UX)",
      description:
        "Creating unique designs that are centered around the mindset of your target segment and ensuring seamless flow",
      image: "/servicePage/service1.png", // replace with actual image path
    },
    {
      title: "User Interface Design (UI)",
      description:
        "Creating unique designs that are centered around the mindset of your target segment and ensuring seamless flow",
      image: "/servicePage/service2.png", // replace with actual image path
    },
    {
      title: "Cross-platform Experience Design",
      description:
        "Creating unique designs that are centred around the mindset of your target segment and ensuring seamless flow",
      image: "/servicePage/service3.png", // replace with actual image path
    },
    {
      title: "Interaction Design",
      description:
        "Designing interactive digital products, environments, systems, and services according to user behaviour",
      image: "/servicePage/service4.png", // replace with actual image path
    },
    {
      title: "UI/UX Consulting & Auditing",
      description:
        "Get the best consulting on UI/UX design services to improve the design and usability of your digital products",
      image: "/servicePage/service5.png", // replace with actual image path
    },
    {
      title: "Design System",
      description:
        "Systematic approach to design and ensure consistency, efficiency, and scalability across different platforms",
      image: "/servicePage/service6.png", // replace with actual image path
    },
  ];
  return (
    <section className=" py-12 px-6 md:px-10 lg:px-12">
      <div className=" mx-auto">
        {/* Heading */}
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            UI/UX Design Services
          </h2>
          <p className=" max-w-3xl   md:text-md   ">
            We adopt a rapid and reliable approach with the best UI/UX Design services for organisations to achieve their business goals. Eager to know what our expertise can contribute to your business? Here we go!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#F2F5F8] p-6 rounded-4xl hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className=" text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
