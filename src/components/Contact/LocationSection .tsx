// components/LocationSection.jsx

const LocationSection = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 md:bg-[url('/background/servicecontactbg.png')] text-white p-8 lg:mx-12 md:p-16 rounded-3xl">
      <h3 className=" text-2xl md:text-3xl font-semibold mb-4">Our Locations</h3>
      <p className="mb-6 max-w-xl">
        Kodaima AI Technology Solutions Pvt. Ltd. Shakudhev vihar, Tarun ka
        ghar, 3rd floor, Delhi – 696969, India.
      </p>

      <div className="grid md:grid-cols-2 gap-8 ">
        <img
          src="/contact/contact2.png"
          alt="India Gate"
          className="rounded-lg object-cover w-full "
        />

        <div className="flex flex-col gap-4">
          <div>
            <div className="flex gap-2 items-center">
              <label className="text-gray-300 text-nowrap text-sm">
                General Enquiry
              </label>
              <div className="border-t-[1px]  h-[1px] w-full border-slate-200"></div>
            </div>
            <input
              type="text"
              value="+91 8383906284"
              readOnly
              className="bg-white border text-black border-gray-600 p-2 rounded-md w-full mt-1"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <label className="text-gray-300 text-nowrap text-sm">Email</label>
              <div className="border-t-[1px]  h-[1px] w-full border-slate-200"></div>
            </div>

            <input
              type="text"
              value="Info@kodaima.com"
              readOnly
              className="bg-white border border-gray-600 text-black p-2 rounded-md w-full mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
