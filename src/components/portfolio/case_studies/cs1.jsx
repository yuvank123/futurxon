import React from "react";
import Csbg1 from "../../../../public/images/case1.jpg";
import Csbg2 from "../../../../public/images/case2.jpg";
import Csbg3 from "../../../../public/images/case3.jpg";
import Csbg4 from "../../../../public/images/case4.jpg";
import Csbg5 from "../../../../public/images/case5.jpg";

const AboutUs = () => {
    const sections = [
        {
            title: "Immersive AR/VR Experience Platform",
            link: "/first",
            bgImage: Csbg1,
            subtitle: "Transforming Immersive Experiences",
            description: "Discover our next-generation AR/VR platform that delivers real-time 3D visualization, AR integration, and VR-enabled simulations for a truly immersive digital experience."
        },
        {
            title: "Online Pet Shop",
            link: "/three",
            bgImage: Csbg2,
            subtitle: "Revolutionizing Pet Care Shopping",
            description: "Explore our robust online pet shop platform offering personalized recommendations, secure transactions, and efficient inventory management for pet lovers."
        },
        {
            title: "Business Analytical Dashboard",
            link: "/second",
            bgImage: Csbg3,
            subtitle: "Turning Data into Insights",
            description: "Experience our dynamic analytical dashboard that transforms raw data into actionable insights, enabling businesses to drive revenue and growth."
        },
        {
            title: "Payroll Management System",
            link: "/four",
            bgImage: Csbg4,
            subtitle: "Streamlining Payroll Processes",
            description: "Learn how our automated payroll system ensures compliance, enhances data security, and provides real-time financial insights for businesses of all sizes."
        },
        {
            title: "Inventory Management System",
            link: "/five",
            bgImage: Csbg5,
            subtitle: "Optimizing Supply Chain Operations",
            description: "See how our inventory management solution provides real-time tracking, automated restocking, and data-driven analytics to optimize supply chain efficiency."
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-4 md:px-6 pt-24 md:pt-32 gap-8 mb-5">
            {sections.map((section, index) => (
                <div 
                    key={index}
                    className="relative w-full max-w-3xl rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.01]"
                >
                    {/* Background Image with Overlay */}
                    <div 
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${section.bgImage}), linear-gradient(45deg, rgba(17, 24, 39, 0.9) 30%, rgba(76, 29, 149, 0.3))`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: "30%"
                        }}
                    ></div>
                    
                    {/* Content */}
                    <div className="relative z-10 backdrop-blur-sm bg-white/2 p-8 md:p-12 border border-white/10 hover:bg-white/10">
                        <h3 className="text-lg md:text-xl text-purple-300 font-medium mb-4">
                            {section.subtitle}
                        </h3>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 p-2">
                            {section.title}
                        </h1>
                        <h2 className="text-lg md:text-xl text-purple-100/80 mb-8 leading-relaxed">
                            {section.description}
                        </h2>
                        <div className="group relative inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000" />
                            <a 
                                href={section.link} 
                                className="relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                title={`Explore our ${section.title} case study`}
                            >
                                Explore Case Study
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutUs;
