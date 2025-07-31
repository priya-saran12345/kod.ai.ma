export const ClientsSection = () => {
  const clients = [
    {
      logo: "ADP",
      title: "Мобильное приложение для Дома на Мойках",
      description: "Создание удобного мобильного приложения с современным дизайном",
      color: "bg-orange-100 border-orange-200"
    },
    {
      logo: "Digital",
      title: "Проект crm-так digital агентство NET",
      description: "Разработка CRM системы для управления клиентами",
      color: "bg-purple-100 border-purple-200"
    },
    {
      logo: "Web",
      title: "Веб-проект для А-клуба",
      description: "Создание современного веб-сайта с интерактивными элементами",
      color: "bg-gray-100 border-gray-200"
    },
    {
      logo: "Crypto",
      title: "Дизайн интернет банка криптовалютном",
      description: "Проектирование интерфейса для криптовалютной платформы",
      color: "bg-yellow-100 border-yellow-200"
    },
    {
      logo: "Analytics",
      title: "Конструктор-билдер дашборд Green Health",
      description: "Создание аналитической панели для здравоохранения",
      color: "bg-blue-100 border-blue-200"
    }
  ];

  return (
    <section className=" pb-20 mx-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl">
            Discover the success stories and relationships we've built with our valued clients.
          </p>
        </div>

        {/* Client Logos Bar */}
        <div className="flex justify-between items-center mb-16 py-8 border-y border-gray-200">
          <div className="text-gray-400 font-medium">Client Logo</div>
          <div className="text-gray-400 font-medium">Client Logo</div>
          <div className="text-gray-400 font-medium">Client Logo</div>
          <div className="text-gray-400 font-medium">Client Logo</div>
          <div className="text-gray-400 font-medium">Client Logo</div>
        </div>
        <div className="flex  gap-8">
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {/* Project Image/Logo Area */}
              <div className={`${client.color} h-48 flex items-center justify-center border-b-2`}>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-gray-700">{client.logo}</span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{client.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};