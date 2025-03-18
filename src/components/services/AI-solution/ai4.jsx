import React from "react";
import { FiCpu, FiDatabase, FiSettings, FiCloud, FiCode, FiTrendingUp } from 'react-icons/fi';

const AiSolutionsStack = () => {
  const categories = [
    {
      title: "Machine Learning Models",
      icon: FiCpu,
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face Transformers", "ONNX", "AutoML", "DeepMind AlphaFold"],
      color: "green"
    },
    {
      title: "Data Processing",
      icon: FiDatabase,
      items: ["Apache Spark", "Hadoop", "BigQuery", "Redshift", "Dataflow", "Azure Data Lake", "Snowflake", "Presto"],
      color: "blue"
    },
    {
      title: "AI Infrastructure",
      icon: FiCloud,
      items: ["Google Vertex AI", "AWS SageMaker", "Azure AI", "NVIDIA AI Enterprise", "Kubeflow", "MLflow", "AI Platform", "TPU/GPU"],
      color: "purple"
    },
    {
      title: "AI Security & Ethics",
      icon: FiSettings,
      items: ["AI Governance", "Explainable AI", "Bias Detection", "Privacy-Preserving AI", "Secure AI Models", "Model Interpretability", "Adversarial ML", "AI Compliance"],
      color: "blue"
    },
    {
      title: "AI-Powered Development",
      icon: FiCode,
      items: ["OpenAI Codex", "GitHub Copilot", "ChatGPT API", "LangChain", "Meta Llama", "Google Bard", "Prompt Engineering", "AI Debugging"],
      color: "green"
    },
    {
      title: "AI Analytics & Insights",
      icon: FiTrendingUp,
      items: ["Power BI AI", "Tableau AI", "Google Looker", "Azure Synapse Analytics", "DataRobot", "H2O.ai", "RapidMiner", "AI-Driven Dashboards"],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 p-1">
            AI Solutions Ecosystem
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cutting-edge AI-powered solutions transforming industries with machine learning, data analytics, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-${category.color}-400/20 hover:border-${category.color}-400/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-${category.color}-500/10`}
            >
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br from-${category.color}-400/30 to-transparent -z-10`} />
              
              <div className="flex items-center mb-6 space-x-4">
                <div className={`p-3 rounded-xl bg-${category.color}-400/10 backdrop-blur-sm`}>
                  {React.createElement(category.icon, { className: `text-3xl text-${category.color}-400 animate-icon-hover` })}
                </div>
                <h2 className={`text-2xl font-bold bg-gradient-to-r from-${category.color}-300 to-${category.color}-300 bg-clip-text text-transparent`}>
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className={`h-2 w-2 rounded-full bg-${category.color}-400 animate-pulse`} />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiSolutionsStack;