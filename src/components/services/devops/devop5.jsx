import React from "react";
import AWS from "../../../../public/images/aws.svg";
import Docker from "../../../../public/images/docker.svg";
import Kubernetes from "../../../../public/images/kubernetes.svg";
import Terraform from "../../../../public/images/terraform.svg";
import Jenkins from "../../../../public/images/jenkins.svg";
import Prometheus from "../../../../public/images/prometheus.svg";
import Ansible from "../../../../public/images/ansible.svg";
import GitHubActions from "../../../../public/images/github-actions.svg";
import Grafana from "../../../../public/images/grafana.svg";

const DevOpsTechStackUI = () => {
  const technologies = [
    { img: AWS },
    { img: Docker },
    { img: Kubernetes },
    { img: Terraform },
    { img: Jenkins },
    { img: Prometheus },
    { img: Ansible },
    { img: GitHubActions },
    { img: Grafana },
  ];

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 space-y-8 pr-0 lg:pr-12">
          <div className="space-y-6 border-b border-white/10 pb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
              DevOps Technology Ecosystem
            </h1>
            <p className="text-xl text-gray-300/90 md:text-2xl max-w-2xl leading-relaxed">
              Empowering seamless CI/CD pipelines, infrastructure automation, 
              and cloud-native solutions with industry-leading DevOps tools 
              and cloud platforms.
            </p>
          </div>
        </div>

        {/* Right Section - Tech Grid */}
        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative p-1 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/3 border border-white/10 rounded-2xl transition-all duration-500 hover:scale-[1.05] hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-amber-50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10 aspect-square flex items-center justify-center p-4">
                  <img
                    src={tech.img}
                    alt="DevOps Technology"
                    className="w-full h-auto max-h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsTechStackUI;