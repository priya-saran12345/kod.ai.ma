
import { CaseStudy } from "../components/website/caseStudy"
import {IndustriesSection} from "../components/website/IndustriesSection"
import { ServicesSection } from "../components/website/ServicesSection"
import Banner from "../components/service/Banner"

import Service from "../components/service/service"
import ProcessSection from "../components/service/ProcessSection"
import ContactSection from "../components/service/contact"

const Services = () => {
  return (
    <div>
      <Banner></Banner>
      <Service/>
      <ProcessSection/>
      <IndustriesSection/>
              <div className="mx-12 mb-8">
          <h2 className="text-4xl font-bold  mb-4">Our Range Of Services</h2>
          <p className=" ">
            We pride ourselves on building successful, and brand web and mobile applications.
          </p>
        </div>

<CaseStudy/>
<ServicesSection/>
<ContactSection/>
    </div>
  )
}

export default Services
