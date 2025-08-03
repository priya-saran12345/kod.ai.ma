export const ServicesSection = () => {
  return (
    <section className=" pb-8 md:pb-14 lg:pb-20 px-3 md:px-8 lg:px-12">
      <div className=" mx-auto">
        {/* Header */}
        <div className=" mb-8">
          <h2 className="text-2xl md:text-4xl font-bold  mb-4">Our Range Of Services</h2>
          <p className=" ">
            We pride ourselves on building successful, and brand web and mobile applications.
          </p>
        </div>

        {/* Services Grid */}
          <div className=" rounded-3xl mb-8 bg-[#F2F5F8]  duration-300 p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className=" text-lg md:text-xl font-bold  mb-4">App Development</h3>
            <p className="text-sm mb-6">
              Provide your applications services and equations services enhancement and systems
            </p>
            
            {/* Mock Device Image */}
{/* <div className="rounded-lg p-4 h-40 flex w-full bg-white items-center justify-center"> */}
  {/* <div className="bg-white rounded-lg shadow-md w-full max-w-xs h-32 flex items-center justify-center"> */}
    <img
      src="/service/service1.png" // replace with your actual image path
      alt="App Interface Preview"
      className="w-full h-full"
    />
  {/* </div>
</div> */}
          </div>
        <div className="grid md:grid-cols-2  gap-8">
          {/* App Development */}

          {/* Web Development */}
          <div className="bg-[#F2F5F8]  duration-300 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold  mb-4">Web Development</h3>
            <p className=" text-sm mb-6">
              Provide website development services and equations services enhancement in beautiful and designs
            </p>
            
            {/* Mock Website Image */}
    <img
      src="/service/service2.png" // replace with your actual image path
      alt="App Interface Preview"
      className="w-full "
    />
          </div>

          {/* AI Driven Software */}
          <div className=" bg-[#8FE89C] duration-300 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow ">
            <h3 className="text-lg md:text-xl font-bold mb-4">AI Driven Software</h3>
            <p className=" text-sm mb-6">
              Provide artificial intelligence driven services and applications development to create intelligent systems
            </p>
            
            {/* Mock AI Interface */}
    <img
      src="/service/service3.png" // replace with your actual image path
      alt="App Interface Preview"
      className="w-full "
    />
          </div>
        </div>
      </div>
    </section>
  );
};