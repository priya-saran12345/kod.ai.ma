import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#222222] rounded-t-4xl px-4 md:px-12 text-white py-4">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
                <img
                  src={'/logo.png'}
                  alt={"kodaima"}
                  className="max-w-[122px]"
                />

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
        <Link
          to="/services"
              className="relative group text-white hover:text-green-400 transition-colors"
        >
              <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 group-hover:after:w-full">
            Services
          </span>
        </Link>

          {["Work", "About us", "Articles"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className="relative group text-white hover:text-green-400 transition-colors"
            >
              <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 group-hover:after:w-full">
                {item}
              </span>
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="relative group bg-[#8FE89C] text-md text-[#222222] rounded-lg py-[6px] md:py-2 px-4 md:px-6 inline-block overflow-hidden"
        >
          <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#222222] after:transition-all after:duration-300 group-hover:after:w-full">
            Contact us
          </span>
        </Link>
      </div>
    </header>
  );
};


// py-[6px] md:py-2 px-4 md:px-6  button 
// text-2xl md:text-4xl lg:text-6xl banner heading 
// text-md md:text-lg  content
// pb-8 md:pb-14 lg:pb-20 px-3 md:px-8 lg:px-12 margin or padding
          // <h2 className="text-2xl md:text-4xl font-bold  mb-4">Our Range Of Services</h2>
