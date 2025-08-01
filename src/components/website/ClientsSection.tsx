export const ClientsSection = () => {
const clientLogos=["/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png","/src/assets/client/client1.png"]
  return (
    <section className="  mx-12">
      <div className=" mx-auto">
        {/* Header */}
        <div className="">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl">
            Discover the success stories and relationships we've built with our valued clients.
          </p>
        </div>

        {/* Client Logos Bar */}
<div className="flex justify-between items-center mb-16 py-8 ">
  {clientLogos.map((client, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={client}
        alt={client}
        className="h-10 object-contain"
      />
      {/* <span className="text-gray-400 text-sm mt-2">{client.name}</span> */}
    </div>
  ))}
</div>
      </div>
    </section>
  );
};