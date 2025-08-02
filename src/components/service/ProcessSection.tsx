
const ProcessSection = () => {
  const processSteps = [
    { number: "01", title: "Research & Discovery" },
    { number: "02", title: "Ideation / Brainstorming" },
    { number: "03", title: "Wireframes" },
    { number: "04", title: "Design" },
  ];

  return (
    <section className="bg-gradient-to-br from-[#111] to-[#1a1a1a] text-white  p-12 rounded-[2rem] mx-4 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Image */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Our Process</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            We adopt a rapid and reliable approach with the best UI/UX Design
            services for organisations to achieve their business goals. Eager to
            know what our expertise can contribute to your business? Here we go!
          </p>

          <div className="bg-white rounded-xl p-6 text-left text-black space-y-3 shadow-lg">
            <div className="space-y-1 text-3xl font-bold">
              <p className="">Branding</p>
              <p className="text-[#8FE89C]">Logo Design</p>
              <p className=" font-medium">Product Design</p>
              <p className="text-[#8FE89C]">Graphic Design</p>
            </div>
            <p className="text-sm lg:w-[50%] ">
              With a focus on user experience, for industry leaders and those
              who want to become them.
            </p>
            {/* <img
              src="/assets/spiral.svg" // replace with actual image path or import
              alt="Design Spiral"
              className="w-24 h-24 mt-2"
            /> */}
          </div>
        </div>

        {/* Right: Steps */}
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div key={index} className="">
              <div className="text-md items-center gap-2 flex flex-row w-full mb-4 font-bold text-gray-500">
                <span>{step.number}</span>
                <div className="border-t-[1px] border-grey-700 w-full"></div>
              </div>
              <div className="flex items-center gap-4 bg-white text-black px-6 py-2 rounded-xl shadow-md">
                <span className="font-medium text-lg">{step.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
