export const IndustriesSection = () => {
  const group1 = [
    { name: "Healthcare", icon: "🏥", color: "bg-green-100 text-green-800" },
    { name: "Real Estate", icon: "🏢", color: "bg-gray-100 text-gray-800" },
  ];
  const group2 = [
    { name: "eCommerce", icon: "🛒", color: "bg-green-100 text-green-800" },
    {
      name: "Адаптивная вёрстка макетов",
      icon: "📱",
      color: "bg-green-100 text-green-800",
    },
  ];
  const group3 = [
    {
      name: "Обучение команды дизайнеров",
      icon: "⚡",
      color: "bg-gray-100 text-gray-800",
    },
    {
      name: "Обучение команды дизайнеров",
      icon: "⚡",
      color: "bg-gray-100 text-gray-800",
    },
  ];
  const group4 = [
    {
      name: "Разработка и поддержка дизайн-системы",
      icon: "🎯",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Разработка и поддержка дизайн-системы",
      icon: "🎯",
      color: "bg-green-100 text-green-800",
    },
  ];

  return (
    <section className="px-4 sm:px-12 pb-20">
      <div className="bg-[#222222] rounded-2xl  mx-auto w-full">
        {/* Header */}
        <div className="mb-6 px-6 py-4 bg-white rounded-2xl w-fit">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Industries We Cater
          </h2>
          <p className="text-gray-600 max-w-2xl">
            We pride ourselves on building successful, and brand web and mobile
            applications.
          </p>
        </div>

        {/* Industry Groups */}
        <div className="flex flex-col items-end gap-4 flex-wrap">
          <div className="flex flex-wrap gap-4">
            {group1.map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {group2.map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {group3.map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {group4.map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
