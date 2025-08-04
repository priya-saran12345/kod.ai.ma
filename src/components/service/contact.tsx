
const ContactSection = () => {
  return (
    // <section className="bg-[url('/grid-bg.svg')]  bg-cover bg-center rounded-3xl py-20 px-4 md:px-12">
    <section className=" bg-[url('/background/service-contact.png')]  bg-center bg-cover rounded-3xl px-3 py-6 md:p-12 mx-4 md:mx-8  lg:mx-12 mb-12">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center md:text-left  px-5 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Our Technology Experts <br />
            Are Changes Catalysts
          </h2>
          <p className="text-sm ">
            Book A Free Consultation Call With Our Experts Today
          </p>
        </div>

        {/* Right: Form */}
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 max-w-lg w-full mx-auto">
          <h3 className="text-2xl font-bold">
            Get in <span className="text-green-500">Touch</span>
          </h3>
          <p className=" text-sm mt-2 mb-6">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel,
            ornare non id blandit netus.
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                required
                placeholder="Name *"
                className="w-full px-4 py-2 border 
                 rounded-2xl "
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border  rounded-2xl "
              />
            </div>
            <div>
              <input
                type="tel"
                required
                placeholder="Phone number *"
                className="w-full px-4 py-2 border  rounded-2xl "
              />
            </div>
            <div>
              <select className="w-full px-4 py-2 border  rounded-2xl ">
                <option>How did you find us?</option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Referral</option>
                <option>Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-2xl hover:bg-gray-900 transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
