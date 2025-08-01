export const CaseStudy = () => {
  const clients = [
    {
      logo: "/src/assets/CaseStudy/case1.png",
      sidelogo: "/src/assets/CaseStudy/smallcase1.png",
      title: "Мобильное приложение для Дома на Мойках",
      description:
        "Создание удобного мобильного приложения с современным дизайном",
      color: "bg-orange-100 border-orange-200",
    },
    {
      logo: "/src/assets/CaseStudy/case2.png",
      title: "Проект crm-так digital агентство NET",
      description: "Разработка CRM системы для управления клиентами",
      color: "bg-purple-100 border-purple-200",
    },
    {
      logo: "/src/assets/CaseStudy/case3.png",
      title: "Веб-проект для А-клуба",
      description:
        "Создание современного веб-сайта с интерактивными элементами",
      color: "bg-gray-100 border-gray-200",
    },
    {
      logo: "/src/assets/CaseStudy/case4.png",
      sidelogo: "/src/assets/CaseStudy/smallcase2.png",
      title: "Дизайн интернет банка криптовалютном",
      description: "Проектирование интерфейса для криптовалютной платформы",
      color: "bg-yellow-100 border-yellow-200",
    },
    {
      logo: "/src/assets/CaseStudy/case5.png",
      sidelogo: "/src/assets/CaseStudy/smallcase4.png",
      title: "Конструктор-билдер дашборд Green Health",
      description: "Создание аналитической панели для здравоохранения",
      color: "bg-blue-100 border-blue-200",
    },
  ];
  return (
    <section className=" pb-20 mx-12">
      <div className=" mx-auto">
        {/* Header */}
        {/* Client Logos Bar */}
        <div className=" rounded-2xl max-h-[350px] bg-[#F2F5F8] mb-8 flex w-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow w-64">
          {/* Project Image/Logo Area */}
          <div className=" flex items-center w-[50%] justify-center border-b-2">
              <img
                src={clients[0].logo}
                alt={clients[0].title}
                className="w-full"
              />
          </div>
          {/* Project Details */}
          <div className="p-6 flex flex-col justify-center gap-5">
                      <div className=" flex items-center  ">
              <img
                src={clients[0].sidelogo}
                alt={clients[0].title}
                className=""
              />
          </div>

            <h3 className="font-bold text-gray-900 mb-2 text-2xl">
              {clients[0].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {clients[0].description}
            </p>
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2  gap-8">
          {clients.slice(1,3).map((client, index) => (
            <div
              key={index}
              className="bg-[#F2F5F8] p-4 rounded-2xl  overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
            <div className=" flex items-center  justify-center ">
              <img
                src={client.logo}
                alt={client.title}
                className="w-full object rounded-2xl"
              />
          </div>

              {/* Project Image/Logo Area */}
              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {client.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
                <div className=" rounded-2xl mt-8 max-h-[350px] bg-[#F2F5F8] mb-8 flex w-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow w-64">
          {/* Project Image/Logo Area */}
          <div className=" flex items-center w-[50%] justify-center border-b-2">
              <img
                src={clients[3].logo}
                alt={clients[3].title}
                className="w-full"
              />
          </div>
          {/* Project Details */}
          <div className="p-6 flex flex-col justify-center gap-5">
                      <div className=" flex items-center  ">
              <img
                src={clients[3].sidelogo}
                alt={clients[3].title}
                className=""
              />
          </div>

            <h3 className="font-bold text-gray-900 mb-2 text-2xl">
              {clients[3].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {clients[3].description}
            </p>
          </div>
        </div>
                <div className=" rounded-2xl max-h-[350px] bg-[#F2F5F8] mb-8 flex w-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow w-64">
          {/* Project Image/Logo Area */}
          <div className=" flex items-center w-[50%] justify-center border-b-2">
              <img
                src={clients[4].logo}
                alt={clients[4].title}
                className="w-full"
              />
          </div>
          {/* Project Details */}
          <div className="p-6 flex flex-col justify-center gap-5">
                      <div className=" flex items-center  ">
              <img
                src={clients[4].sidelogo}
                alt={clients[4].title}
                className=""
              />
          </div>

            <h3 className="font-bold text-gray-900 mb-2 text-2xl">
              {clients[4].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {clients[4].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
