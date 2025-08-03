import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#222222] rounded-t-4xl px-12 text-white py-4">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">kodaima.</div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-green-400 transition-colors group">
              <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 group-hover:after:w-full">
                Service
              </span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div> */}
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
          className="relative group bg-[#8FE89C] text-md text-[#222222] rounded-lg py-2 px-6 inline-block overflow-hidden"
        >
          <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#222222] after:transition-all after:duration-300 group-hover:after:w-full">
            Contact us
          </span>
        </Link>
      </div>
    </header>
  );
};
