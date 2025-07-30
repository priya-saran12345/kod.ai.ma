export const ServicesDropdown = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl">
      <div className="flex">
        {/* Services Menu */}
        <div className="w-1/3 space-y-2">
          <div className="text-sm font-semibold text-gray-800 mb-4">All Services</div>
          
          <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm font-medium">
            UI/UX Design
          </div>
          
          <div className="text-gray-600 px-3 py-2 text-sm hover:bg-gray-50 rounded-md cursor-pointer">
            Mobile App Development
          </div>
          
          <div className="text-gray-600 px-3 py-2 text-sm hover:bg-gray-50 rounded-md cursor-pointer">
            Website Development
          </div>
          
          <div className="text-gray-600 px-3 py-2 text-sm hover:bg-gray-50 rounded-md cursor-pointer">
            Digital Marketing
          </div>
          
          <div className="text-gray-600 px-3 py-2 text-sm hover:bg-gray-50 rounded-md cursor-pointer">
            Artificial Intelligence
          </div>
        </div>

        {/* Service Details */}
        <div className="flex-1 ml-6 bg-gray-900 text-white p-6 rounded-lg relative overflow-hidden">
          {/* Background Green Orb */}
          <div className="absolute right-4 top-4 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-30"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Branding</h3>
            <div className="space-y-1 text-sm text-gray-300 mb-4">
              <div>Logo Design</div>
              <div>Product Design</div>
              <div>Graphic Design</div>
            </div>
            <p className="text-xs text-gray-400">
              With a focus on user experience, for industry leaders and those who want to become them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};