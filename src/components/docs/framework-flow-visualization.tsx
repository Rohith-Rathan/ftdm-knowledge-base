'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FileText,
  Code,
  Settings,
  Palette,
  Database,
  Play,
  Cloud,
  ArrowRight
} from 'lucide-react'

export function FrameworkFlowVisualization() {
  const stages = [
    {
      id: 'stage-1',
      title: 'Mermaid Generation',
      icon: FileText,
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
      color: 'text-blue-400'
    },
    {
      id: 'stage-2',
      title: 'FSD Creation',
      icon: Code,
      bgColor: 'bg-gradient-to-br from-green-500/20 to-green-600/20',
      color: 'text-green-400'
    },
    {
      id: 'stage-3',
      title: 'TSD Creation',
      icon: Settings,
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
      color: 'text-purple-400'
    },
    {
      id: 'stage-4',
      title: 'UI/UX Analysis',
      icon: Palette,
      bgColor: 'bg-gradient-to-br from-pink-500/20 to-pink-600/20',
      color: 'text-pink-400'
    },
    {
      id: 'stage-5',
      title: 'RTSD Creation',
      icon: Database,
      bgColor: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
      color: 'text-orange-400'
    },
    {
      id: 'stage-6',
      title: 'Implementation',
      icon: Play,
      bgColor: 'bg-gradient-to-br from-indigo-500/20 to-indigo-600/20',
      color: 'text-indigo-400'
    },
    {
      id: 'stage-7',
      title: 'Temporary Backend',
      icon: Cloud,
      bgColor: 'bg-gradient-to-br from-cyan-500/20 to-cyan-600/20',
      color: 'text-cyan-400'
    }
  ]

  return (
    <section id="framework-flow-visualization" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-foreground text-sm font-medium">
            <FileText className="w-5 h-5 mr-3 text-blue-400" />
            Framework Flow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Framework Flow Visualization
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-full sm:max-w-4xl mx-auto leading-relaxed">
            Visualize the complete 7-stage development process from raw requirements to production-ready application.
          </p>
        </div>

        {/* Framework Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-4">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <motion.div 
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-20 h-20 rounded-xl ${stage.bgColor} flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <stage.icon className={`h-10 w-10 ${stage.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground max-w-20">{stage.title}</span>
                </motion.div>
                {index < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ArrowRight className="h-8 w-8 text-muted-foreground mx-4" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
