import Slider from "react-slick";

export const ClientsSection = () => {
  const clientLogos = [
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png",
    "/src/assets/client/client1.png"
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <section className="mx-12">
      <div className="mx-auto">
        <div className="">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl">
            Discover the success stories and relationships we've built with our valued clients.
          </p>
        </div>

        {/* Client Logo Slider */}
        <div className="py-8">
          <Slider {...sliderSettings}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="px-4">
                <img
                  src={logo}
                  alt={`client-${index}`}
                  className="h-10 mx-auto object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
