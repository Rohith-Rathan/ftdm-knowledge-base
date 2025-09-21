'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  Shield, 
  Zap, 
  Eye, 
  Code, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Sparkles,
  Target,
  Layers,
  Cpu
} from 'lucide-react'

const capabilities = [
  {
    id: 'domain-intelligence',
    title: 'Domain Intelligence',
    description: 'Automatically detects domain and applies industry-specific patterns',
    icon: Brain,
    color: 'text-blue-400',
    bgColor: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
    gradient: 'from-blue-500 to-blue-600',
    features: [
      'Auto-Detection: Automatically detects domain from requirements',
      'Industry Research: Researches industry standards and best practices',
      'Pattern Application: Applies domain-specific patterns for UI/UX, business logic, and architecture',
      'Compliance Integration: Includes regulatory and compliance requirements',
      'Quality Assurance: Validates domain-specific quality standards'
    ],
    examples: ['Healthcare: HIPAA compliance, medical workflows', 'Finance: PCI-DSS compliance, financial calculations', 'E-commerce: Payment processing, inventory management']
  },
  {
    id: 'ai-agentic',
    title: 'AI-Agentic Intelligence',
    description: 'Smart detection and application of AI capabilities when relevant',
    icon: Zap,
    color: 'text-purple-400',
    bgColor: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
    gradient: 'from-purple-500 to-purple-600',
    features: [
      'Smart Detection: Only applies AI-agentic analysis when relevant to domain',
      'Conversational AI: Supports chat, conversation, dialogue, NLP, chatbot patterns',
      'AI Automation: Handles automation, workflow, orchestration, intelligent processes',
      'AI-Assisted: Provides AI-powered, intelligent, smart recommendations',
      'Multi-Agent Systems: Supports agent, multi-agent, distributed AI patterns'
    ],
    examples: ['Chatbots: Customer service automation', 'AI Assistants: Intelligent task automation', 'Multi-Agent: Distributed AI systems']
  },
  {
    id: 'anti-hallucination',
    title: 'Anti-Hallucination Safeguards',
    description: 'Comprehensive safeguards against AI errors and inconsistencies',
    icon: Shield,
    color: 'text-green-400',
    bgColor: 'bg-gradient-to-br from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
    gradient: 'from-green-500 to-green-600',
    features: [
      'Stage Boundary Enforcement: Prevents creation of non-existent stages',
      'Technical Accuracy Validation: Ensures all technical outputs are accurate',
      'Consistency Validation: Maintains consistency across all stages',
      'Error Prevention: Comprehensive error detection and prevention',
      'Validation Scripts: Automated validation pipeline'
    ],
    examples: ['Stage Validation: Ensures only valid stages (1-7)', 'Technical Accuracy: Validates all technical specifications', 'Consistency Checks: Cross-stage consistency validation']
  },
  {
    id: 'visual-verification',
    title: 'Visual Verification',
    description: 'Universal understanding through visual diagrams and documentation',
    icon: Eye,
    color: 'text-pink-400',
    bgColor: 'bg-gradient-to-br from-pink-500/20 to-pink-600/20',
    borderColor: 'border-pink-500/30',
    gradient: 'from-pink-500 to-pink-600',
    features: [
      'Mermaid Diagrams: Generates 6 comprehensive diagrams (User Journey, System Architecture, Business Process, Data Model, API Flow, Gantt Chart)',
      'Dual Format Output: Creates both MMD files and image files for universal understanding',
      'Complete Documentation: Generates FSD, TSD, RTSD, and implementation documentation',
      'Visual Verification: Stakeholders can verify requirements through visual diagrams',
      'Universal Access: Both technical and non-technical stakeholders can understand'
    ],
    examples: ['User Journey: Visual flow of user interactions', 'System Architecture: Technical system overview', 'Business Process: Workflow visualization']
  },
  {
    id: 'existing-projects',
    title: 'Existing Project Integration',
    description: 'Seamlessly works with existing projects from any platform',
    icon: Code,
    color: 'text-orange-400',
    bgColor: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
    borderColor: 'border-orange-500/30',
    gradient: 'from-orange-500 to-orange-600',
    features: [
      'Platform Support: Works with Lovable, Replit, Figma Make, Base44 apps',
      'Codebase Analysis: Deep analysis of existing files, components, and code structure',
      'Pattern Recognition: Identifies existing coding patterns, architecture, and conventions',
      'Non-Destructive Approach: Never modifies existing code without explicit permission',
      'Seamless Integration: New features integrate naturally with existing code'
    ],
    examples: ['Lovable Projects: Enhances existing Lovable applications', 'Replit Projects: Integrates with Replit development environment', 'Figma Projects: Analyzes and integrates Figma designs']
  },
  {
    id: 'production-ready',
    title: 'Production Ready',
    description: 'Complete applications ready for production deployment',
    icon: Rocket,
    color: 'text-teal-400',
    bgColor: 'bg-gradient-to-br from-teal-500/20 to-teal-600/20',
    borderColor: 'border-teal-500/30',
    gradient: 'from-teal-500 to-teal-600',
    features: [
      'Complete Application: Fully functional, production-ready applications',
      'Deployment Configuration: Docker + Kubernetes + Azure configuration',
      'CI/CD Pipeline: Automated CI/CD pipeline setup',
      'Monitoring: Built-in monitoring and logging',
      'Scalability: Designed for horizontal and vertical scaling'
    ],
    examples: ['Docker Containers: Containerized applications', 'Azure Deployment: Cloud-ready deployment', 'CI/CD Pipeline: Automated deployment pipeline']
  }
]

export function Capabilities() {
  const [selectedCapability, setSelectedCapability] = useState('domain-intelligence')

  return (
    <section id="capabilities" className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full glass-morphism text-white text-sm font-medium"
          >
            <Sparkles className="w-5 h-5 mr-3 text-purple-400" />
            Powerful Framework Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold"
          >
            <span className="gradient-text">
              Framework Capabilities
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
          >
            Discover the powerful capabilities that make FTDM Framework the most intelligent and reliable development framework available.
          </motion.p>
        </div>

        {/* Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                selectedCapability === capability.id ? 'scale-105' : ''
              }`}
              onClick={() => setSelectedCapability(capability.id)}
            >
              <div className={`relative p-10 rounded-3xl border-2 transition-all duration-300 ${
                selectedCapability === capability.id 
                  ? `${capability.bgColor} ${capability.borderColor} shadow-2xl shadow-purple-500/20 glass-morphism` 
                  : 'glass-morphism border-white/20 hover:shadow-xl'
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${capability.gradient} opacity-0 transition-opacity duration-300 ${
                  selectedCapability === capability.id ? 'opacity-10' : 'group-hover:opacity-5'
                }`}></div>
                
                <div className="relative text-center space-y-8">
                  <motion.div 
                    className={`w-24 h-24 rounded-3xl ${capability.bgColor} flex items-center justify-center mx-auto shadow-lg transition-all duration-300 ${
                      selectedCapability === capability.id ? 'shadow-xl scale-110' : ''
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <capability.icon className={`h-12 w-12 ${capability.color} transition-all duration-300 ${
                      selectedCapability === capability.id ? 'scale-110' : ''
                    }`} />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{capability.description}</p>
                  </div>
                  
                  {selectedCapability === capability.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${capability.gradient}`}>
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Capability View */}
        <motion.div
          key={selectedCapability}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-morphism rounded-3xl p-12 shadow-2xl"
        >
          {capabilities.map((capability) => (
            capability.id === selectedCapability && (
              <div key={capability.id} className="space-y-10">
                <div className="flex items-center space-x-8">
                  <div className={`w-24 h-24 rounded-3xl ${capability.bgColor} flex items-center justify-center shadow-lg`}>
                    <capability.icon className={`h-12 w-12 ${capability.color}`} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-white">{capability.title}</h3>
                    <p className="text-gray-300 text-xl">{capability.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Features */}
                  <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white">Key Features:</h4>
                    <ul className="space-y-6">
                      {capability.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start space-x-4 p-6 rounded-xl glass-morphism"
                        >
                          <div className={`p-2 rounded-full bg-gradient-to-r ${capability.gradient} flex-shrink-0 mt-1`}>
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-gray-300 font-medium text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white">Examples:</h4>
                    <ul className="space-y-6">
                      {capability.examples.map((example, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start space-x-4 p-6 rounded-xl glass-morphism"
                        >
                          <div className={`p-2 rounded-full bg-gradient-to-r ${capability.gradient} flex-shrink-0 mt-1`}>
                            <Play className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-gray-300 font-medium text-lg">{example}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/20">
                  <Button className={`w-full bg-gradient-to-r ${capability.gradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl py-8`}>
                    Learn More About {capability.title}
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </div>
              </div>
            )
          ))}
        </motion.div>

        {/* Enhanced Capability Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: '23', label: 'Core Capabilities', icon: Layers, color: 'from-blue-400 to-purple-400' },
            { number: '100%', label: 'Automated', icon: Cpu, color: 'from-green-400 to-blue-400' },
            { number: '10x', label: 'Faster Development', icon: Zap, color: 'from-purple-400 to-pink-400' },
            { number: '100%', label: 'Hallucination-Proof', icon: Shield, color: 'from-yellow-400 to-orange-400' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center space-y-6 p-8 rounded-3xl glass-morphism border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}