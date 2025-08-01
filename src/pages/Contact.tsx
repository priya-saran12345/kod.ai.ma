// import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CaseStudy } from "../components/website/caseStudy"
import {IndustriesSection} from "../components/website/IndustriesSection"
import { ServicesSection } from "../components/website/ServicesSection"
import Banner from "../components/service/Banner"

import Service from "../components/service/service"
import ProcessSection from "../components/service/ProcessSection"
import ContactSection from "../components/service/contact"
// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="bg-slate-800 text-white px-6 py-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="text-xl font-bold">kodaima</div>
//           <nav className="hidden md:flex items-center space-x-8">
//             <div className="flex items-center space-x-1">
//               <span>Service</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>
//             <span>Work</span>
//             <span>About us</span>
//             <span>Articles</span>
//           </nav>
//           <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
//             Contact us
//           </Button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-slate-800 text-white py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl font-bold mb-6">
//             Discover Digital <span className="text-green-400">Transformation</span>
//           </h1>
//           <p className="text-xl text-gray-300 mb-8">
//             Please feel free to share your thoughts and we can discuss it over a cup of tea.
//           </p>
//           <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md text-lg">
//             Consult Our Experts
//           </Button>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Left Column - Form */}
//             <div>
//               <h2 className="text-3xl font-bold text-slate-800 mb-6">
//                 Discover Digital Transformation
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 Please feel free to share your thoughts and we can discuss it over a cup of tea.
//               </p>

//               <Tabs defaultValue="quote" className="w-full">
//                 <TabsList className="grid w-full grid-cols-3 mb-8">
//                   <TabsTrigger value="quote" className="bg-green-500 text-white data-[state=active]:bg-green-600">
//                     Get A Quote
//                   </TabsTrigger>
//                   <TabsTrigger value="partnership">Partnership</TabsTrigger>
//                   <TabsTrigger value="enquiry">General Enquiry</TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="quote" className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <Input
//                       name="firstName"
//                       placeholder="First Name"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="border-gray-300"
//                     />
//                     <Input
//                       name="lastName"
//                       placeholder="Last Name"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="border-gray-300"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <Input
//                       name="email"
//                       type="email"
//                       placeholder="Email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="border-gray-300"
//                     />
//                     <Input
//                       name="phone"
//                       placeholder="Phone Number"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="border-gray-300"
//                     />
//                   </div>
//                   <Textarea
//                     name="message"
//                     placeholder="Tell Us More"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="border-gray-300 min-h-[120px]"
//                   />
//                   <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md">
//                     Send Enquiry
//                   </Button>
//                 </TabsContent>

//                 <TabsContent value="partnership" className="space-y-4">
//                   <div className="text-center py-8">
//                     <p>Partnership form content would go here...</p>
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="enquiry" className="space-y-4">
//                   <div className="text-center py-8">
//                     <p>General enquiry form content would go here...</p>
//                   </div>
//                 </TabsContent>
//               </Tabs>
//             </div>

//             {/* Right Column - Brochure Download */}
//             <div className="bg-gray-50 p-8 rounded-lg">
//               <h3 className="text-2xl font-bold text-slate-800 mb-4">
//                 Download <span className="text-green-500">Our</span><br />
//                 Brochure
//               </h3>
//               <p className="text-gray-600 mb-6">PDF 2.5 MB</p>
              
//               {/* Spiral Graphic */}
//               <div className="flex justify-center mb-6">
//                 <div className="w-32 h-32 relative">
//                   <div className="absolute inset-0 rounded-full border-8 border-green-400 opacity-20"></div>
//                   <div className="absolute inset-2 rounded-full border-8 border-green-400 opacity-40"></div>
//                   <div className="absolute inset-4 rounded-full border-8 border-green-400 opacity-60"></div>
//                   <div className="absolute inset-6 rounded-full border-8 border-green-400 opacity-80"></div>
//                   <div className="absolute inset-8 rounded-full border-4 border-green-500"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Locations Section */}
//       <section className="bg-slate-800 text-white py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Image */}
//             <div>
//               <div className="bg-amber-100 rounded-lg p-8 h-64 flex items-center justify-center">
//                 <div className="w-48 h-32 bg-amber-800 rounded-lg shadow-lg transform rotate-12"></div>
//               </div>
//             </div>

//             {/* Right Column - Contact Info */}
//             <div className="space-y-6">
//               <div>
//                 <p className="text-gray-300 mb-4">
//                   Kodaima AI Technology Solutions Pvt. Ltd. Shahinbagh vihir, Thane ka ghar,
//                   3rd floor, Geru - 896654 raj
//                 </p>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <p className="text-sm text-gray-400 mb-2">General Enquiry</p>
//                   <div className="bg-white text-slate-800 px-4 py-2 rounded-md inline-block">
//                     +91 8383906284
//                   </div>
//                 </div>
                
//                 <div>
//                   <div className="bg-white text-slate-800 px-4 py-2 rounded-md inline-block">
//                     info@kodaima.com
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;

const Contact = () => {
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

export default Contact
