export const Header = () => {
  return (
    <header className="bg-gray-900 rounded-t-4xl px-12 text-white  py-4">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          kodaima.
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
              <span>Service</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <a href="#work" className="hover:text-green-400 transition-colors">Work</a>
          <a href="#about" className="hover:text-green-400 transition-colors">About us</a>
          <a href="#articles" className="hover:text-green-400 transition-colors">Articles</a>
        </nav>

        {/* Contact Button */}
        {/* <Button className="bg-green-400 hover:bg-green-500 text-gray-900 font-medium px-6">
          Contact us
        </Button> */}
      </div>
    </header>
  );
};