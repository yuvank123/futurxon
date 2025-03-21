import React from "react";
import Csbg from "../../../../public/images/csbg.jpg"

const AboutUs = () => {
    const sections = [
        {
            title: "Revolutionizing Bio-Science with IoT for Smarter Monitoring",
            link: "/first",
            bgImage: Csbg,
            subtitle: "We drive success for businesses worldwide!",
            description: "Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions."
        },
        {
            title: "Personal Assistant using LLM implementation",
            link: "second",
            bgImage: Csbg,
            subtitle: "We drive success for businesses worldwide!",
            description: "Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions."
        },
        {
            title: "High-Tech Risk Compliance Management Software",
            link: "three",
            bgImage: Csbg,
            subtitle: "We drive success for businesses worldwide!",
            description: "Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions."
        },
        {
            title: "IoT-Enabled Flame Detector Control Portfolio",
            link: "four",
            bgImage: Csbg,
            subtitle: "We drive success for businesses worldwide!",
            description: "Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions."
        },
        {
            title: "Community and Reputation Platform",
            link: "five",
            bgImage: Csbg,
            subtitle: "We drive success for businesses worldwide!",
            description: "Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions."
        },
        {
            title: "Social Connectivity",
            link: "six",
            bgImage: Csbg,
            subtitle: "We drive success for businesses worldwide!",
            description: "Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions."
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-4 md:px-6 pt-24 md:pt-32 gap-8">
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
                            opacity: "100%"
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
                            <a href={section.link} className="relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                                LET'S VISIT
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutUs;