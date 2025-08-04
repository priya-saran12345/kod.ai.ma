export const IndustriesSection = () => {
  const group1 = [
    { name: "Healthcare", icon: "🏥", color: "bg-[#F6F8FA]", iconBg: "bg-[#8FE89C]" },
    { name: "Real Estate", icon: "🏢", color: "bg-[#F6F8FA]", iconBg: "bg-[#E6E8EC]" },
  ];
  const group2 = [
    { name: "eCommerce", icon: "🛒", color: "bg-[#F6F8FA]", iconBg: "bg-[#8FE89C]" },
    { name: "Адаптивная вёрстка макетов", icon: "📱", color: "bg-[#F6F8FA]", iconBg: "bg-[#8FE89C]" },
  ];
  const group3 = [
    { name: "Обучение команды дизайнеров", icon: "⚡", color: "bg-[#F6F8FA]", iconBg: "bg-[#E6E8EC]" },
    { name: "Обучение команды дизайнеров", icon: "⚡", color: "bg-[#F6F8FA]", iconBg: "bg-[#8FE89C]" },
  ];
  const group4 = [
    { name: "Разработка и поддержка дизайн-системы", icon: "🎯", color: "bg-[#F6F8FA]", iconBg: "bg-[#E6E8EC]" },
    { name: "Разработка и поддержка дизайн-системы", icon: "🎯", color: "bg-[#F6F8FA]", iconBg: "bg-[#8FE89C]" },
  ];

  const renderGroup = (group: typeof group1) => (
    <div className="flex flex-wrap gap-4">
      {group.map((item, idx) => (
        <div
          key={idx}
          className={`${item.color} px-2 py-2 rounded-full flex items-center space-x-2 text-sm font-medium`}
        >
          <span
            className={`${item.iconBg} min-w-[40px] min-h-[40px] rounded-full flex justify-center items-center`}
          >
            {item.icon}
          </span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="px-4 sm:px-12 pb-20">
      <div className="bg-[#222222] pt-12 md:pt-0 md:bg-white md:bg-[url('/background/caterbg.png')] p-6 pb-12 pt-0 rounded-2xl mx-auto w-full">
        {/* Header */}
        <div className="flex justify-between flex-wrap items-center ">
          <div className="text-white md:text-black mb-6 pr-6  w-fit">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">
              Industries We Cater
            </h2>
            <p className=" max-w-2xl">
              We pride ourselves on building successful, and brand web and
              mobile applications.
            </p>
          </div>
          <div className="flex mb-4 lg:mb-0 flex-wrap gap-4">{renderGroup(group1)}</div>
        </div>
        {/* Industry Groups */}
        <div className="flex flex-col lg:items-end gap-4 flex-wrap">
          {renderGroup(group2)}
          {renderGroup(group3)}
          {renderGroup(group4)}
        </div>
      </div>
    </section>
  );
};
