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
  Star,
  Sparkles
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

export function FrameworkFlow() {
  const [selectedStage, setSelectedStage] = useState(1)

  return (
    <section id="framework-flow" className="py-32 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:via-purple-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full glass-morphism text-foreground text-sm font-medium"
          >
            <Star className="w-5 h-5 mr-3 text-yellow-400" />
            Intelligent 7-Stage Process
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold"
          >
            <span className="gradient-text">
              Framework Flow
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed"
          >
            Our intelligent framework transforms raw requirements into production-ready applications through a structured, automated process with domain intelligence.
          </motion.p>
        </div>

        {/* Interactive Stage Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Stage Cards */}
          <div className="space-y-8">
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
                <div className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                  selectedStage === stage.id 
                    ? `${stage.bgColor} ${stage.borderColor} shadow-2xl shadow-blue-500/20 glass-morphism` 
                    : 'glass-morphism border-white/20 hover:shadow-xl'
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stage.gradient} opacity-0 transition-opacity duration-300 ${
                    selectedStage === stage.id ? 'opacity-10' : 'group-hover:opacity-5'
                  }`}></div>
                  
                  <div className="relative flex items-start space-x-8">
                    <motion.div 
                      className={`p-6 rounded-2xl ${stage.bgColor} transition-all duration-300 ${
                        selectedStage === stage.id ? 'shadow-lg scale-110' : ''
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <stage.icon className={`h-10 w-10 ${stage.color} transition-all duration-300 ${
                        selectedStage === stage.id ? 'scale-110' : ''
                      }`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-foreground">{stage.title}</h3>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${stage.gradient} text-white`}>
                          Stage {stage.id}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{stage.description}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {stage.outputs.map((output, idx) => (
                          <span
                            key={idx}
                            className="text-sm glass-morphism px-4 py-2 rounded-full border border-border text-muted-foreground"
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
                        <div className={`p-3 rounded-full bg-gradient-to-r ${stage.gradient}`}>
                          <CheckCircle className="h-8 w-8 text-white" />
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
              className="glass-morphism rounded-3xl p-10 shadow-2xl"
            >
              <div className="flex items-center space-x-6 mb-8">
                <div className={`p-6 rounded-2xl ${stages[selectedStage - 1].bgColor}`}>
                  {React.createElement(stages[selectedStage - 1].icon, {
                    className: `h-12 w-12 ${stages[selectedStage - 1].color}`
                  })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{stages[selectedStage - 1].title}</h3>
                  <p className="text-muted-foreground text-lg">Stage {selectedStage}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-10 leading-relaxed text-xl">{stages[selectedStage - 1].details}</p>
              
              <div className="space-y-8">
                <h4 className="text-2xl font-bold text-foreground">Generated Outputs:</h4>
                <div className="grid grid-cols-1 gap-4">
                  {stages[selectedStage - 1].outputs.map((output, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-xl glass-morphism"
                    >
                      <div className={`p-2 rounded-full bg-gradient-to-r ${stages[selectedStage - 1].gradient}`}>
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-muted-foreground font-medium text-lg">{output}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <Button className={`w-full bg-gradient-to-r ${stages[selectedStage - 1].gradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg py-6`}>
                  Learn More About Stage {selectedStage}
                  <ArrowRight className="ml-3 h-6 w-6" />
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
          className="mt-32"
        >
          <h3 className="text-4xl font-bold text-center mb-16 text-foreground">Framework Flow Visualization</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <motion.div 
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-24 h-24 rounded-3xl ${stage.bgColor} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 glass-morphism`}>
                    <stage.icon className={`h-12 w-12 ${stage.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground max-w-24">{stage.title}</span>
                </motion.div>
                {index < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ArrowRight className="h-10 w-10 text-muted-foreground mx-8" />
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
