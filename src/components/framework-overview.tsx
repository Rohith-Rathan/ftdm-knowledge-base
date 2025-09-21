'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Code, 
  Palette, 
  Settings, 
  Play, 
  Database,
  Cloud,
  CheckCircle,
  ArrowRight,
  Zap,
  Star
} from 'lucide-react'

const stages = [
  {
    id: 1,
    title: 'Mermaid Generation',
    description: 'Generate visual diagrams and refine requirements',
    icon: FileText,
    color: 'text-blue-400',
    bgColor: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
    outputs: ['Refined Requirements', '6 Mermaid Diagrams', 'MMD Files', 'Image Files'],
    details: 'Transforms raw requirements into crystal clear specifications with comprehensive visual diagrams for universal understanding.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'FSD Creation',
    description: 'Create comprehensive functional specifications',
    icon: Code,
    color: 'text-green-400',
    bgColor: 'bg-gradient-to-br from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
    outputs: ['Complete FSD', 'Business Logic', 'Compliance Requirements', 'User Stories'],
    details: 'Generates detailed functional specifications with domain intelligence and industry-specific patterns.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'TSD Creation',
    description: 'Generate technical specifications and architecture',
    icon: Settings,
    color: 'text-purple-400',
    bgColor: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
    outputs: ['Complete TSD', 'System Architecture', 'API Specs', 'Database Design', 'UXD Folder Structure'],
    details: 'Creates comprehensive technical specifications with enterprise architecture patterns and UXD folder structure.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 4,
    title: 'UI/UX Designs Analysis',
    description: 'Create design system and visual assets',
    icon: Palette,
    color: 'text-pink-400',
    bgColor: 'bg-gradient-to-br from-pink-500/20 to-pink-600/20',
    borderColor: 'border-pink-500/30',
    outputs: ['Design System', 'Wireframes', 'Component Library', 'Data Visualizations'],
    details: 'Analyzes existing UXD assets and creates comprehensive design system with wireframes and component library.',
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    id: 5,
    title: 'RTSD Creation',
    description: 'Refine technical specs with business logic',
    icon: Database,
    color: 'text-orange-400',
    bgColor: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
    borderColor: 'border-orange-500/30',
    outputs: ['Complete RTSD', 'Business Logic', 'Implementation Specs', 'Asset Integration'],
    details: 'Refines technical specifications with comprehensive business logic and implementation details.',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    id: 6,
    title: 'Implementation Stages',
    description: 'Complete application development (13 phases)',
    icon: Play,
    color: 'text-indigo-400',
    bgColor: 'bg-gradient-to-br from-indigo-500/20 to-indigo-600/20',
    borderColor: 'border-indigo-500/30',
    outputs: ['Complete Application', 'Unit Tests', 'API Endpoints', 'Frontend Screens', 'CI/CD Pipeline'],
    details: 'Implements complete application through 13 detailed phases including testing, API development, and deployment.',
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 7,
    title: 'Temporary Backend',
    description: 'Optional mock backend for testing',
    icon: Cloud,
    color: 'text-teal-400',
    bgColor: 'bg-gradient-to-br from-teal-500/20 to-teal-600/20',
    borderColor: 'border-teal-500/30',
    outputs: ['Temporary Backend', 'API Endpoints', 'Local Testing Environment'],
    details: 'Creates temporary backend implementation for local testing and development validation.',
    gradient: 'from-teal-500 to-teal-600'
  }
]

export function FrameworkOverview() {
  const [selectedStage, setSelectedStage] = useState(1)

  return (
    <section id="framework-overview" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium"
          >
            <Star className="w-4 h-4 mr-2" />
            Intelligent 7-Stage Process
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Framework Flow
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Our intelligent framework transforms raw requirements into production-ready applications through a structured, automated process with domain intelligence.
          </motion.p>
        </div>

        {/* Interactive Stage Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Stage Cards */}
          <div className="space-y-6">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  selectedStage === stage.id ? 'scale-105' : ''
                }`}
                onClick={() => setSelectedStage(stage.id)}
              >
                <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedStage === stage.id 
                    ? `${stage.bgColor} ${stage.borderColor} shadow-2xl shadow-blue-500/20` 
                    : 'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:shadow-xl'
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stage.gradient} opacity-0 transition-opacity duration-300 ${
                    selectedStage === stage.id ? 'opacity-5' : 'group-hover:opacity-3'
                  }`}></div>
                  
                  <div className="relative flex items-start space-x-6">
                    <div className={`p-4 rounded-xl ${stage.bgColor} transition-all duration-300 ${
                      selectedStage === stage.id ? 'shadow-lg' : ''
                    }`}>
                      <stage.icon className={`h-8 w-8 ${stage.color} transition-all duration-300 ${
                        selectedStage === stage.id ? 'scale-110' : ''
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${stage.gradient} text-white`}>
                          Stage {stage.id}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{stage.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {stage.outputs.map((output, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/80 dark:bg-gray-700/80 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                          >
                            {output}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {selectedStage === stage.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className={`p-2 rounded-full bg-gradient-to-r ${stage.gradient}`}>
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stage Details */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              key={selectedStage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl ${stages[selectedStage - 1].bgColor}`}>
                  {React.createElement(stages[selectedStage - 1].icon, {
                    className: `h-8 w-8 ${stages[selectedStage - 1].color}`
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stages[selectedStage - 1].title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Stage {selectedStage}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">{stages[selectedStage - 1].details}</p>
              
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Generated Outputs:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {stages[selectedStage - 1].outputs.map((output, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                    >
                      <div className={`p-1 rounded-full bg-gradient-to-r ${stages[selectedStage - 1].gradient}`}>
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{output}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button className={`w-full bg-gradient-to-r ${stages[selectedStage - 1].gradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  Learn More About Stage {selectedStage}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Framework Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Framework Flow Visualization</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <motion.div 
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-20 h-20 rounded-2xl ${stage.bgColor} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <stage.icon className={`h-10 w-10 ${stage.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 max-w-20">{stage.title}</span>
                </motion.div>
                {index < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ArrowRight className="h-8 w-8 text-gray-400 mx-6" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
