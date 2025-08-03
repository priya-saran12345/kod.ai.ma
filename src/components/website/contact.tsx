import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="p-4 md:p-6 lg:p-16 rounded-4xl mb-12 bg-[url('/background/servicecontactbg.png')]
     mx-3 md:mx-8  lg:mx-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Our{" "}
              <span className="text-success text-[#8FE89C]">Technology</span>
              <br />
              Experts Are
              <br />
              <span className="text-success text-[#8FE89C]">Changes</span>{" "}
              Catalysts
            </h2>
            <p className=" text-md md:text-lg text-gray-300 mb-8">
              Book A Free Consultation Call With Our Experts Today
            </p>
          </div>
          {/* Right Form */}
          <div className=" ">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full  border-b border-gray-600 text-white placeholder-white py-2 px-3 px-0 focus:outline-none focus:border-success transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full  border-b border-gray-600 text-white placeholder-white py-2 px-3 px-0 focus:outline-none focus:border-success transition-colors"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full  border-b border-gray-600 text-white placeholder-white py-2 px-3 px-0 focus:outline-none focus:border-success transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full  border-b border-gray-600 text-white placeholder-white py-2 px-3 px-0 focus:outline-none focus:border-success transition-colors"
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell Us More"
                  rows={2}
                  maxLength={1000}
                  className="w-full  border-b border-gray-600
                   text-white placeholder-white  
                   px-3 focus:outline-none focus:border-success transition-colors resize-none"
                />
                <div className="absolute bottom-1 right-0 text-xs text-gray-500">
                  {formData.message.length}/1000
                </div>
              </div>
              {/* Submit Button */}
              <div className="">
                <button
                  type="submit"
                  className="bg-[#8FE89C] cursor-pointer text-success-foreground font-semibold
                  py-2 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-success/25"
                >
                  Consult Our Experts
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
