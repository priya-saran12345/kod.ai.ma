import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Mobile App Development", icon: "📱" },
    { name: "Website Development", icon: "💻" },
    { name: "Digital Marketing", icon: "📈" },
    { name: "Artificial Intelligence", icon: "🧠" },
  ];
  return (
    <>
      {/* Header */}
      <header className=" text-white px-4 md:px-12 py-4 rounded-t-4xl relative z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"}>
            <img src="/logo.png" alt="kodaima" className="max-w-[122px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="cursor-pointer group-hover:text-green-400 transition-colors flex items-center gap-1">
                Services{" "}
                {showDropdown ? (
                  <FaChevronUp className="mt-[2px]" size={12} />
                ) : (
                  <FaChevronDown className="mt-[2px]" size={12} />
                )}
              </span>

              {showDropdown && (
                <div
                  onMouseLeave={() => setShowDropdown(false)}
                  className="fixed left-[2%] mt-0 bg-[#F2F5F8] text-black rounded-2xl 
                    shadow-xl p-6 w-[95%] z-50"
                  style={{ top: "100px" }} // adjust vertical positioning as needed
                >
                  {/* Left: Services List */}
                  <h4 className="font-semibold text-lg mb-3">All Services</h4>
                  <div className="flex">
                    <div className="w-1/3 pr-4 ">
                      <ul className="flex flex-col gap-2">
                        {services.map((item, idx) => (
                          <a href="/services" key={idx}>
                            <li className="flex items-center gap-2 px-3 py-1 rounded-full bg-white hover:bg-[#8FE89C] transition cursor-pointer text-sm">
                              <span className="h-[40px] w-[40px] bg-[#8FE89C] rounded-full flex justify-center items-center">
                                {item.icon}
                              </span>
                              <span>{item.name}</span>
                            </li>
                          </a>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Preview */}
                    <div
                      className="w-2/3 rounded-3xl bg-[url('/background/header-servicebg.png')]
 bg-cover bg-center pl-4 flex flex-col justify-center items-start"
                    >
                      <h3 className="text-2xl font-semibold text-white mb-2 leading-tight">
                        Branding <br />
                        <span className="text-[#8FE89C] font-bold">
                          Logo Design
                        </span>{" "}
                        <br />
                        Product Design <br />
                        <span className="text-[#8FE89C] font-bold">
                          Graphic Design
                        </span>
                      </h3>
                      <p className="text-sm text-white">
                        With a focus on user experience, for industry leaders{" "}
                        <br />
                        and those who want to become them.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            {["Work", "About us", "Articles"].map((item, idx) => (
              <Link
                key={idx}
                to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="group hover:text-green-400 transition-colors"
              >
                <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 group-hover:after:w-full">
                  {item}
                </span>
              </Link>
            ))}
          </nav>

          {/* Contact Us Button */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-[#8FE89C] text-[#222] rounded-lg py-[6px] px-4 md:px-6"
          >
            Contact us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenDrawer(true)}
            className="md:hidden text-white text-2xl"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        title={<img src="/logo.png" alt="kodaima" className="w-24 !-mx-10 " />}
        placement="left"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        className="md:hidden !w-[75%] !sm:w-[50%] !bg-black "
      >
        <nav className="flex flex-col gap-6 text-white text-lg">
          <details
            open={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-sm"
          >
            <summary className="cursor-pointer font-semibold flex items-center gap-2 list-none">
              Services
              {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </summary>
            <ul className="pl-4 pt-2 flex flex-col gap-2 mt-2">
              {services.map((item, idx) => (
                <li
                  key={idx}
                  className="flex text-black cursor-pointer items-center gap-2 px-3 py-2 rounded-full bg-white
                   hover:bg-[#8FE89C] transition text-sm"
                >
                  <a href="/services">
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>

          {["Work", "About us", "Articles"].map((item, idx) => (
            <Link
              key={idx}
              to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setOpenDrawer(false)}
              className="relative text-white text-sm group"
            >
              <span className="relative text-white z-10">{item}</span>
              <span
                className="absolute  left-0 bottom-[-2px] h-[2px] 
    w-0 bg-green-400 transition-all duration-300 group-hover:w-[40px]"
              ></span>
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpenDrawer(false)}
            className="!bg-[#8FE89C] !text-black w-fit !text-[14px]  px-4 text-center py-2 rounded-lg mt-2"
          >
            Contact Us
          </Link>
        </nav>
      </Drawer>
    </>
  );
};
