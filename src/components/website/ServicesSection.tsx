export const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Range Of Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on building successful, and brand web and mobile applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* App Development */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">App Development</h3>
            <p className="text-gray-600 text-sm mb-6">
              Provide your applications services and equations services enhancement and systems
            </p>
            
            {/* Mock Device Image */}
            <div className="bg-gray-100 rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md w-full max-w-xs h-32 flex items-center justify-center">
                <div className="text-xs text-gray-400">App Interface Preview</div>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600 text-sm mb-6">
              Provide website development services and equations services enhancement in beautiful and designs
            </p>
            
            {/* Mock Website Image */}
            <div className="bg-gray-100 rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md w-full h-32 flex items-center justify-center">
                <div className="text-xs text-gray-400">Website Preview</div>
              </div>
            </div>
          </div>

          {/* AI Driven Software */}
          <div className="bg-green-400 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-white">
            <h3 className="text-xl font-bold mb-4">AI Driven Software</h3>
            <p className="text-green-100 text-sm mb-6">
              Provide artificial intelligence driven services and applications development to create intelligent systems
            </p>
            
            {/* Mock AI Interface */}
            <div className="bg-green-300/20 rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="bg-white/10 rounded-lg backdrop-blur-sm w-full h-32 flex items-center justify-center">
                <div className="text-xs text-green-100">AI Interface Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};