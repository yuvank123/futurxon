import React, { useState } from "react";
import { 
  FiLock, FiShield, FiDatabase, FiGlobe, 
  FiCode, FiActivity, FiLayers, FiTrendingUp,
  FiZap, FiHexagon
} from 'react-icons/fi';

const services = [
  {
    title: "Smart Contract Development",
    description: "Design and deploy secure smart contracts using Solidity and Rust on Ethereum, Binance Smart Chain, and Solana. Ensure efficiency, security, and cost optimization with best practices.",
    icon: FiCode,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Decentralized Finance (DeFi) Solutions",
    description: "Build scalable DeFi platforms with automated liquidity pools, staking, and yield farming. Integrate secure wallets and on-chain governance mechanisms.",
    icon: FiTrendingUp,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Blockchain Security Audits",
    description: "Comprehensive smart contract and blockchain infrastructure audits. Identify vulnerabilities, optimize gas fees, and enhance contract security with advanced penetration testing.",
    icon: FiShield,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "NFT Marketplace Development",
    description: "End-to-end NFT marketplace solutions with ERC-721 and ERC-1155 standards. Implement minting, trading, and metadata storage using IPFS and Arweave.",
    icon: FiHexagon,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Blockchain Analytics & Monitoring",
    description: "Track on-chain transactions, monitor wallet activities, and visualize blockchain data with advanced analytics tools and AI-driven insights.",
    icon: FiActivity,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Web3 Identity Management",
    description: "Decentralized identity solutions using blockchain-based authentication protocols. Enable self-sovereign identity and verifiable credentials.",
    icon: FiLock,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "Blockchain Database Solutions",
    description: "Decentralized data storage and retrieval using IPFS, Arweave, and Filecoin. Secure and immutable storage for enterprise blockchain applications.",
    icon: FiDatabase,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "Layer 2 Scaling Solutions",
    description: "Enhance blockchain scalability with Layer 2 rollups, sidechains, and state channels. Reduce transaction costs while maintaining decentralization and security.",
    icon: FiLayers,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "DAO Development",
    description: "Create decentralized autonomous organizations with on-chain governance models. Implement voting mechanisms, treasury management, and smart contract-controlled decision-making.",
    icon: FiGlobe,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Tokenomics & Crypto Strategy",
    description: "Design sustainable token economies with well-balanced supply and demand models. Implement staking, rewards, and governance mechanisms to enhance token utility.",
    icon: FiZap,
    color: "from-cyan-600 to-blue-500",
  }
];

const EnterpriseBlockchainUI = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Enterprise Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the potential of blockchain with secure, scalable, and decentralized solutions tailored for finance, identity, and digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer group ${
                selectedService?.title === service.title 
                  ? "bg-gradient-to-br scale-[1.02] shadow-2xl"
                  : "hover:bg-gray-800/30 shadow-lg bg-gray-900/40"
              } ${service.color} border border-gray-700/30`}
              onClick={() => 
                setSelectedService(prev => 
                  prev?.title === service.title ? null : service
                )
              }
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} mr-4`}>
                      <service.icon className="text-2xl text-white" />
                    </div>
                    <h2 className={`text-lg font-semibold ${
                      selectedService?.title === service.title 
                        ? "text-white" 
                        : "text-gray-300 group-hover:text-white transition-colors"
                    }`}>
                      {service.title}
                    </h2>
                  </div>
                  <span className={`text-2xl ${
                    selectedService?.title === service.title 
                      ? "text-white rotate-45" 
                      : "text-gray-400 group-hover:text-white"
                  } transition-transform`}>
                    +
                  </span>
                </div>

                {selectedService?.title === service.title && (
                  <div className="mt-4 overflow-hidden">
                    <p className="text-gray-300 text-base leading-relaxed animate-fadeIn">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )};

export default EnterpriseBlockchainUI;