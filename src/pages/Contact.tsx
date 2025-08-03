import EnquirySection from "../components/Contact/EnquirySection";
import LocationSection from "../components/Contact/LocationSection ";
import Banner from "../components/Contact/page";
const Contact = () => {
  return (
    <div className="m-4">
      <Banner />
      <EnquirySection/>
      <LocationSection/>
    </div>
  );
};

export default Contact;
