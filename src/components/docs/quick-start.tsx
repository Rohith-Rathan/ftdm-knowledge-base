'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Rocket, 
  CheckCircle, 
  Clock
} from 'lucide-react'

export function QuickStart() {
  const steps = [
    {
      step: 1,
      title: 'Import Framework',
      description: 'Copy EFTDM_FRAMEWORK folder into your project directory',
      details: [
        'Create new project folder: [project_name]',
        'Copy EFTDM_FRAMEWORK folder into project directory',
        'Project structure: [project_name]/EFTDM_FRAMEWORK/',
        'Open README.md to understand framework'
      ]
    },
    {
      step: 2,
      title: 'Prepare Raw Requirements',
      description: 'Write your raw requirements document',
      details: [
        'Example: "I need a payroll system for my company with 50 employees"',
        'Be specific about your business needs',
        'Include any existing project context',
        'Note any special requirements or constraints'
      ]
    },
    {
      step: 3,
      title: 'Answer 3 Questions',
      description: 'Provide minimal clarifying information',
      details: [
        'Domain: "Finance", "Healthcare", "E-commerce", etc.',
        'AI-Agentic: "Yes" or "No" (does it need AI features?)',
        'Business Context: Brief description of your use case'
      ]
    },
    {
      step: 4,
      title: 'Confirm Technology Stack',
      description: 'Use default stack or specify your preferences',
      details: [
        'Default: .NET Core 8.0 + Vue.js 3 + MongoDB + Azure',
        'Backend: .NET Core 8.0 + C# 12 + ASP.NET Core Web API',
        'Frontend: Vue.js 3 + Vuex 4 + Vue Router 4 + Axios 1.6',
        'Database: MongoDB with official .NET driver',
        'Authentication: JWT + Azure AD',
        'Deployment: Docker + Kubernetes + Azure App Services'
      ]
    },
    {
      step: 5,
      title: 'Framework Automation',
      description: 'Framework handles everything else automatically',
      details: [
        '7 automated stages with user confirmation',
        'Domain intelligence integration',
        'Quality gates and validation',
        'Production-ready application generation'
      ]
    }
  ]

  return (
    <section id="quick-start" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-foreground text-sm font-medium">
            <Rocket className="w-5 h-5 mr-3 text-green-400" />
            Quick Start Guide
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get Started in 5 Minutes
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Follow these simple steps to transform your raw requirements into a production-ready application with minimal effort.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3 }
              }}
              className="group relative p-4 sm:p-6 md:p-8 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative space-y-4 sm:space-y-6">
                {/* Step Number */}
                <div className="flex items-center">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg sm:text-xl font-bold shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/15 transition-all duration-300">
                    {step.step}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${detailIndex * 50}ms` }}>
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:text-green-300 transition-colors duration-300" />
                      <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time Investment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ 
            y: -4,
            transition: { duration: 0.3 }
          }}
          className="text-center p-4 sm:p-6 md:p-8 rounded-xl border border-border bg-gradient-to-r from-green-500/10 to-blue-500/10 shadow-sm hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <Clock className="h-12 w-12 text-green-400" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">
            Total Time Investment: 5 Minutes
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            That's it! The framework handles everything else automatically through 7 stages of intelligent automation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
