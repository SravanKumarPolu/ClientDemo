import React, { useState } from "react";

const Industries = () => {
  // State to track the active industry
  const [activeIndustry, setActiveIndustry] = useState("Featured");

  const industries = [
    "Featured",
    "Automotive",
    "Banking",
    "Blue economy",
    "Capital markets",
    "Communications, media & technology",
    "Consumer goods",
    "Education",
    "Healthcare",
    "Information services",
    "Insurance",
    "Life sciences",
    "Manufacturing",
    "Oil & gas",
    "Retail",
    "Transportation & logistics",
    "Travel & hospitality",
    "Utilities",
  ];

  // Industry details for displaying items based on selected industry
  const industryDetails = {
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
      "Feature detail 11 for Featured.",
      "Feature detail 12 for Featured.",
      "Feature detail 13 for Featured.",
      "Feature detail 14 for Featured.",
      "Feature detail 15 for Featured.",
    ],
    Automotive: [
      "Detail 1: The automotive industry includes the production of motor vehicles.",
      "Detail 2: It encompasses a wide range of companies and organizations involved in the design, development, manufacturing, marketing, and selling of motor vehicles.",
      "Detail 3: Key players include car manufacturers, suppliers, and dealers.",
      "Detail 4: The industry is increasingly focused on sustainability and eco-friendly technologies.",
      "Detail 5: Electric vehicles (EVs) are gaining traction, with significant investments from both established and new players.",
      "Detail 6: Autonomous driving technology is a major area of innovation.",
      "Detail 7: The automotive sector is a significant contributor to global economic activity.",
      "Detail 8: Supply chain management and logistics are critical for production efficiency.",
      "Detail 9: The industry faces challenges such as changing consumer preferences and regulatory requirements.",
      "Detail 10: Digitalization is transforming customer experiences, including online sales and connected car technologies.",
      "Detail 11: Safety features and regulations are constantly evolving.",
      "Detail 12: The rise of shared mobility solutions is impacting traditional vehicle ownership models.",
      "Detail 13: Global competition is intense, with major markets including North America, Europe, and Asia.",
      "Detail 14: The industry is undergoing a shift towards mobility as a service (MaaS).",
      "Detail 15: Emerging technologies such as AI and IoT are reshaping automotive design and functionality.",
    ],
    Banking: [
      "Detail 1: The banking industry involves financial institutions that accept deposits from the public and create credit.",
      "Detail 2: Banks provide services such as loans, mortgages, credit cards, and investment advice.",
      "Detail 3: The sector is regulated by government authorities to ensure stability and consumer protection.",
      "Detail 4: Digital banking is transforming the way customers access financial services, with online and mobile banking becoming standard.",
      "Detail 5: Fintech companies are disrupting traditional banking models by offering innovative financial solutions.",
      "Detail 6: Risk management and compliance are critical aspects of the banking industry.",
      "Detail 7: Banks play a vital role in economic development by providing funding to businesses and individuals.",
      "Detail 8: Customer experience is a key focus, with banks investing in personalized services and customer support.",
      "Detail 9: The industry faces challenges such as cybersecurity threats and the need for digital transformation.",
      "Detail 10: Interest rates set by central banks influence lending and borrowing practices across the sector.",
      "Detail 11: Sustainable banking practices are gaining importance, with an emphasis on ethical investment.",
      "Detail 12: Mergers and acquisitions are common as banks seek to expand their market share.",
      "Detail 13: The global banking industry is interconnected, with financial markets influencing each other.",
      "Detail 14: Regulations such as the Basel III framework aim to strengthen the resilience of banks.",
      "Detail 15: The rise of cryptocurrencies is impacting traditional banking operations and payment systems.",
    ],
    "Blue economy": [
      // Corrected this line
      "Detail 1 for Blue Economy.",
      "Detail 2 for Blue Economy.",
      "Detail 3 for Blue Economy.",
      "Detail 4 for Blue Economy.",
      "Detail 5 for Blue Economy.",
      "Detail 6 for Blue Economy.",
      "Detail 7 for Blue Economy.",
      "Detail 8 for Blue Economy.",
      "Detail 9 for Blue Economy.",
      "Detail 10 for Blue Economy.",
      "Detail 11 for Blue Economy.",
      "Detail 12 for Blue Economy.",
      "Detail 13 for Blue Economy.",
      "Detail 14 for Blue Economy.",
      "Detail 15 for Blue Economy.",
    ],
    "Capital markets": [
      // Corrected this line
      "Detail 1 for Capital Markets.",
      "Detail 2 for Capital Markets.",
      "Detail 3 for Capital Markets.",
      "Detail 4 for Capital Markets.",
      "Detail 5 for Capital Markets.",
      "Detail 6 for Capital Markets.",
      "Detail 7 for Capital Markets.",
      "Detail 8 for Capital Markets.",
      "Detail 9 for Capital Markets.",
      "Detail 10 for Capital Markets.",
      "Detail 11 for Capital Markets.",
      "Detail 12 for Capital Markets.",
      "Detail 13 for Capital Markets.",
      "Detail 14 for Capital Markets.",
      "Detail 15 for Capital Markets.",
    ],
    "Communications, media & technology": [
      // Corrected this line
      "Detail 1 for Communications, Media & Technology.",
      "Detail 2 for Communications, Media & Technology.",
      "Detail 3 for Communications, Media & Technology.",
      "Detail 4 for Communications, Media & Technology.",
      "Detail 5 for Communications, Media & Technology.",
      "Detail 6 for Communications, Media & Technology.",
      "Detail 7 for Communications, Media & Technology.",
      "Detail 8 for Communications, Media & Technology.",
      "Detail 9 for Communications, Media & Technology.",
      "Detail 10 for Communications, Media & Technology.",
      "Detail 11 for Communications, Media & Technology.",
      "Detail 12 for Communications, Media & Technology.",
      "Detail 13 for Communications, Media & Technology.",
      "Detail 14 for Communications, Media & Technology.",
      "Detail 15 for Communications, Media & Technology.",
    ],
    // Add similar arrays for other industries
  };

  return (
    <div className="bg-[rgb(0,0,72)] flex h-screen text-white p-6 w-screen">
      <div className="flex flex-row h-full  mx-auto w-full">
        {/* Industries List */}
        <div className="w-1/3 pl-20 ml-16 h-full overflow-y-scroll p-4 pr-0 border-r border-white scrollbar">
          <ul className="space-y-3 text-lg">
            {industries.map((industry, index) => (
              <li
                key={index}
                className={`py-2 px-3 transition-colors duration-200 hover:bg-blue-700 cursor-pointer ${
                  activeIndustry === industry ? "bg-white text-black" : ""
                }`}
                onClick={() => setActiveIndustry(industry)}>
                {industry}
              </li>
            ))}
          </ul>
        </div>

        {/* Display active industry details */}
        <div className=" w-2/3 h-screen overflow-y-hide p-4 pt-2 pl-0">
          {activeIndustry && (
            <div className="mt-4 h-full text-lg block bg-white text-black w-full p-4">
              <h2 className="font-bold">{activeIndustry}</h2>
              {industryDetails[activeIndustry] ? (
                <ul>
                  {industryDetails[activeIndustry].map((detail, index) => (
                    <li className="p-2" key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No details available for this industry.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Industries;
