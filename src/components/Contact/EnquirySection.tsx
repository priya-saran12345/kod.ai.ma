// components/EnquirySection.jsx

const EnquirySection = () => {
  return (
    <div className="bg-white flex-wrap justify-between flex p-8 md:p-16">
        <div className="md:w-[40%]">

      <h2 className="text-3xl font-bold mb-4">
        Discover Digital <br /> Transformation
      </h2>
      <p className="text-gray-600 mb-4">
        Please feel free to share your thoughts and we can discuss it over a cup of tea.
      </p>
       <img
          src="/src/assets/contact/contact1.png"
          alt="India Gate"
          className="rounded-lg object-cover w-full "
        />

          </div>
          <div className="md:w-[50%]">
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 bg-[#8FE89C] text-black rounded-md">Get a Quote</button>
        <button className="px-4 py-2 bg-gray-100 text-black rounded-md">Partnership</button>
        <button className="px-4 py-2 bg-gray-100 text-black rounded-md">General Enquiry</button>
      </div>

      <form className="grid md:grid-cols-2 gap-4">
<input
  type="text"
  placeholder="First Name"
  className="border-0 border-b-2 border-slate-400  focus:outline-none p-2"
/>
<input
  type="text"
  placeholder="Last Name"
  className="border-0 border-b-2 border-slate-400  focus:outline-none p-2"
/>
<input
  type="email"
  placeholder="Email"
  className="border-0 border-b-2 border-slate-400  focus:outline-none p-2"
/>
<input
  type="tel"
  placeholder="Phone Number"
  className="border-0 border-b-2 border-slate-400  focus:outline-none p-2"
/>
<textarea
  placeholder="Tell Us More"
  maxLength={1000}
  className="border-0 border-b-2 border-slate-400  focus:outline-none p-2 md:col-span-2 h-28 resize-none"
/>

        <button className="bg-[#8FE89C] hover:bg-green-500  py-2 px-6 rounded-md w-fit">
          Send Enquiry
        </button>
      </form>
                </div>

    </div>
  );
};

export default EnquirySection;
