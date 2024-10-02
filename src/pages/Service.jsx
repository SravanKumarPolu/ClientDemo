import React, { useState } from "react";

const Services = () => {
  // State to track the active service
  const [activeService, setActiveService] = useState("Featured");

  const services = [
    "Featured",
    "Application services",
    "Automation",
    "Business process services",
    "Cloud",
    "Cognizant Neuro",
    "Consulting",
    "Data & AI",
    "Enterprise platforms",
    "Experience",
  ];

  // Service details for displaying items based on the selected service
  const serviceDetails = {
    Featured: [
      "Feature detail 1 for Featured.",
      "Feature detail 2 for Featured.",
      "Feature detail 3 for Featured.",
      "Feature detail 4 for Featured.",
      "Feature detail 5 for Featured.",
      "Feature detail 6 for Featured.",
      "Feature detail 7 for Featured.",
      "Feature detail 8 for Featured.",
      "Feature detail 9 for Featured.",
      "Feature detail 10 for Featured.",
    ],
    "Application services": [
      "Detail 1 for Application services.",
      "Detail 2 for Application services.",
      "Detail 3 for Application services.",
      "Detail 4 for Application services.",
      "Detail 5 for Application services.",
      "Detail 6 for Application services.",
      "Detail 7 for Application services.",
      "Detail 8 for Application services.",
      "Detail 9 for Application services.",
      "Detail 10 for Application services.",
    ],
    Automation: [
      "Detail 1 for Automation.",
      "Detail 2 for Automation.",
      "Detail 3 for Automation.",
      "Detail 4 for Automation.",
      "Detail 5 for Automation.",
      "Detail 6 for Automation.",
      "Detail 7 for Automation.",
      "Detail 8 for Automation.",
      "Detail 9 for Automation.",
      "Detail 10 for Automation.",
    ],
    "Business process services": [
      "Detail 1: Business process services enhance operational efficiency.",
      "Detail 2: Streamlining workflows through automation.",
      "Detail 3: Data-driven insights for informed decision-making.",
      "Detail 4: Tailored solutions to meet industry-specific needs.",
      "Detail 5: Continuous improvement methodologies for optimal performance.",
      "Detail 6: Integration of advanced technologies for better outcomes.",
      "Detail 7: Focus on customer experience and satisfaction.",
      "Detail 8: Reducing operational costs while maintaining quality.",
      "Detail 9: Workforce management solutions for enhanced productivity.",
      "Detail 10: Comprehensive analytics for performance tracking.",
    ],
    Cloud: [
      "Detail 1: Cloud solutions enable scalability and flexibility.",
      "Detail 2: Reducing infrastructure costs through cloud adoption.",
      "Detail 3: Enhanced security measures in cloud environments.",
      "Detail 4: Disaster recovery solutions to ensure business continuity.",
      "Detail 5: Cloud-native applications for better performance.",
      "Detail 6: Collaboration tools that enhance remote work capabilities.",
      "Detail 7: Integration with AI and machine learning technologies.",
      "Detail 8: Multi-cloud strategies for optimal resource utilization.",
      "Detail 9: Compliance with industry regulations and standards.",
      "Detail 10: 24/7 support for cloud services and applications.",
    ],
    "Cognizant Neuro": [
      "Detail 1: Cognizant Neuro leverages AI for business transformation.",
      "Detail 2: Insights-driven decisions through advanced analytics.",
      "Detail 3: Automation of routine tasks using intelligent technologies.",
      "Detail 4: Personalized customer experiences powered by AI.",
      "Detail 5: Integration of IoT for real-time data analytics.",
      "Detail 6: Enhanced cybersecurity measures using machine learning.",
      "Detail 7: AI-driven product development and innovation.",
      "Detail 8: Streamlining operations for efficiency and cost reduction.",
      "Detail 9: Workforce augmentation through AI tools.",
      "Detail 10: Continuous learning and adaptation in business processes.",
    ],
    "Data & AI": [
      "Detail 1: Data-driven strategies for business growth.",
      "Detail 2: Advanced analytics for actionable insights.",
      "Detail 3: Machine learning models for predictive analysis.",
      "Detail 4: Data governance frameworks to ensure compliance.",
      "Detail 5: Enhancing customer personalization through data analysis.",
      "Detail 6: Integration of AI in business processes for efficiency.",
      "Detail 7: Big data solutions for handling vast amounts of information.",
      "Detail 8: Data visualization tools for better decision-making.",
      "Detail 9: Continuous monitoring and improvement of data strategies.",
      "Detail 10: Training and development programs for data literacy.",
    ],
  };

  return (
    <div className="bg-[rgb(0,0,72)] flex h-screen text-white p-6 w-screen">
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row  h-full  mx-auto w-full">
        {/* Services List */}
        <div className="w-full sm:w-1/3 pl-32 ml-16 h-full overflow-y-hide p-4 pr-0 ">
          <ul className="space-y-3 text-lg">
            {services.map((service, index) => (
              <li
                key={index}
                className={`py-2 px-3 transition-colors duration-200 hover:bg-blue-700 cursor-pointer ${
                  activeService === service ? "bg-white text-black" : ""
                }`}
                onClick={() => setActiveService(service)}>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Display active service details */}
        <div className="w-full sm:w-2/3 h-screen   p-4 pt-0 pl-0 shadow-sm ">
          {activeService && (
            <div className="mt-4 text-lg bg-white text-black w-full h-[40rem] overflow-y-hide p-4 scrollbar">
              <h2 className="font-bold">{activeService}</h2>
              {serviceDetails[activeService] ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {serviceDetails[activeService].map((detail, index) => (
                    <li className="p-2 border border-gray-200" key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No details available for this service.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
