'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Code, 
  Settings, 
  Palette, 
  Database, 
  Play, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Zap,
  Star,
  Layers,
  Workflow,
  Shield,
  Target,
  Clock,
  Users,
  Cpu,
  Server,
  Monitor,
  Smartphone,
  GitBranch,
  Package,
  Terminal,
  Network,
  ShieldCheck,
  Eye,
  AlertTriangle,
  CheckCircle2,
  Rocket,
  Globe,
  Lock,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export function StageOverview() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)
  const [expandedImplementationStage, setExpandedImplementationStage] = useState<string | null>(null)

  const stages = [
    {
      id: 1,
      title: 'Mermaid Generation',
      description: 'Generate visual diagrams and refine requirements',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      outputs: ['Refined Requirements', '6 Mermaid Diagrams', 'MMD Files', 'Image Files'],
      details: 'Transforms raw requirements into crystal clear specifications with comprehensive visual diagrams for universal understanding.',
      gradient: 'from-blue-500 to-blue-600',
      duration: '5-10 minutes',
      inputs: ['Raw Requirements', '3 Clarifying Questions', 'Technology Stack Confirmation'],
      process: [
        'Analyze raw requirements for completeness',
        'Generate 6 comprehensive Mermaid diagrams',
        'Create both MMD and image formats',
        'Apply domain intelligence patterns',
        'Validate outputs against quality gates'
      ],
      safeguards: ['Stage Boundary Enforcement', 'Output Validation', 'Error Prevention', 'Consistency Validation']
    },
    {
      id: 2,
      title: 'FSD Creation',
      description: 'Create comprehensive functional specifications',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      outputs: ['Complete FSD', 'Business Logic', 'Compliance Requirements', 'User Stories'],
      details: 'Generates comprehensive functional specification document with domain intelligence and industry standards.',
      gradient: 'from-green-500 to-green-600',
      duration: '10-15 minutes',
      inputs: ['Refined Requirements', 'Mermaid Diagrams', 'Domain Intelligence'],
      process: [
        'Process refined requirements and diagrams',
        'Apply domain-specific business logic',
        'Generate comprehensive user stories',
        'Include compliance requirements',
        'Validate against industry standards'
      ],
      safeguards: ['Technical Accuracy', 'Business Logic Validation', 'Compliance Check', 'Cross-Reference Validation']
    },
    {
      id: 3,
      title: 'TSD Creation',
      description: 'Generate technical specifications and architecture',
      icon: Settings,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      outputs: ['Complete TSD', 'System Architecture', 'API Specs', 'Database Design', 'UXD Folder Structure'],
      details: 'Creates comprehensive technical specification with enterprise architecture and UXD folder structure.',
      gradient: 'from-purple-500 to-purple-600',
      duration: '15-20 minutes',
      inputs: ['FSD', 'Mermaid Diagrams', 'Domain Intelligence'],
      process: [
        'Design enterprise-grade system architecture',
        'Create comprehensive API specifications',
        'Design database schema and relationships',
        'Generate UXD folder structure',
        'Apply technology stack specifications'
      ],
      safeguards: ['Architecture Validation', 'API Specification Check', 'Database Design Review', 'Technology Stack Validation']
    },
    {
      id: 4,
      title: 'UI/UX Designs Analysis',
      description: 'Create design system and visual assets',
      icon: Palette,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      outputs: ['Design System', 'Wireframes', 'Component Library', 'Data Visualizations'],
      details: 'Analyzes existing UXD folder and creates comprehensive UI/UX designs with design-first approach.',
      gradient: 'from-pink-500 to-pink-600',
      duration: '20-25 minutes',
      inputs: ['FSD', 'TSD', 'UXD Folder Structure'],
      process: [
        'Analyze existing UXD folder structure',
        'Create comprehensive design system',
        'Generate wireframes and mockups',
        'Build component library',
        'Create data visualization patterns'
      ],
      safeguards: ['Design Consistency', 'Component Validation', 'Accessibility Check', 'Visual Hierarchy Review']
    },
    {
      id: 5,
      title: 'RTSD Creation',
      description: 'Refine technical specs with business logic',
      icon: Database,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      outputs: ['Complete RTSD', 'Business Logic', 'Implementation Specs', 'Asset Integration'],
      details: 'Refines technical specifications with business logic intelligence and implementation details.',
      gradient: 'from-orange-500 to-orange-600',
      duration: '15-20 minutes',
      inputs: ['FSD', 'TSD', 'UXD Assets'],
      process: [
        'Integrate business logic with technical specs',
        'Refine implementation specifications',
        'Integrate UI/UX assets',
        'Create comprehensive RTSD',
        'Validate implementation readiness'
      ],
      safeguards: ['Business Logic Integration', 'Implementation Validation', 'Asset Integration Check', 'Readiness Assessment']
    },
    {
      id: 6,
      title: 'Implementation Stages',
      description: 'Complete application development (13 phases)',
      icon: Play,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      outputs: ['Complete Application', 'Unit Tests', 'API Endpoints', 'Frontend Screens', 'CI/CD Pipeline'],
      details: 'Implements complete application through 13 sub-stages with comprehensive testing and deployment.',
      gradient: 'from-indigo-500 to-indigo-600',
      duration: '2-3 hours',
      inputs: ['All Previous Outputs', 'RTSD', 'Implementation Plan'],
      process: [
        'FSD Analysis & Validation',
        'Implementation Planning',
        'Project Setup & Architecture',
        'Database Model Design',
        'ORM Mapper & MongoDB Classes',
        'Business Service Interfaces',
        'Interface Validation & Coverage',
        'Business Service Implementations',
        'Unit Testing Cases',
        'REST API Development',
        'Frontend Screen Development',
        'Frontend Unit Test Cases',
        'CI/CD & Deployment (Azure)'
      ],
      safeguards: ['Code Quality Gates', 'Test Coverage Validation', 'API Endpoint Testing', 'Deployment Readiness']
    },
    {
      id: 7,
      title: 'Temporary Backend',
      description: 'Backend implementation for local testing',
      icon: Cloud,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      outputs: ['Temporary Backend', 'API Endpoints', 'Local Testing Environment'],
      details: 'Creates temporary backend implementation for local testing and development.',
      gradient: 'from-cyan-500 to-cyan-600',
      duration: '30-45 minutes',
      inputs: ['All Implementation Outputs', 'API Specifications'],
      process: [
        'Create temporary backend implementation',
        'Set up local testing environment',
        'Configure API endpoints',
        'Enable local development workflow',
        'Validate testing environment'
      ],
      safeguards: ['Backend Validation', 'API Testing', 'Environment Setup', 'Local Testing Verification']
    }
  ]

  const subStages = [
    { id: '6.1', title: 'FSD Analysis & Validation', icon: CheckCircle },
    { id: '6.2', title: 'Implementation Planning', icon: Target },
    { id: '6.3', title: 'Project Setup & Architecture', icon: Package },
    { id: '6.4', title: 'Database Model Design', icon: Database },
    { id: '6.5', title: 'ORM Mapper & MongoDB Classes', icon: Network },
    { id: '6.6', title: 'Business Service Interfaces', icon: Cpu },
    { id: '6.7', title: 'Interface Validation & Coverage', icon: ShieldCheck },
    { id: '6.8', title: 'Business Service Implementations', icon: Code },
    { id: '6.9', title: 'Unit Testing Cases', icon: CheckCircle2 },
    { id: '6.10', title: 'REST API Development', icon: Server },
    { id: '6.11', title: 'Frontend Screen Development', icon: Monitor },
    { id: '6.12', title: 'Frontend Unit Test Cases', icon: Smartphone },
    { id: '6.13', title: 'CI/CD & Deployment (Azure)', icon: GitBranch }
  ]

  const implementationStages = [
    {
      id: '6.1',
      title: 'FSD Analysis & Validation',
      description: 'Analyze and validate functional specification document',
      icon: CheckCircle,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      gradient: 'from-amber-500 to-amber-600',
      duration: '10-15 minutes',
      inputs: ['Complete FSD', 'Domain Intelligence', 'Business Requirements'],
      process: [
        'Deep analysis of functional requirements',
        'Validation against domain standards',
        'Business logic verification',
        'Compliance requirement check',
        'Cross-reference validation'
      ],
      outputs: ['Validated FSD', 'Analysis Report', 'Business Logic Validation', 'Compliance Checklist'],
      safeguards: ['Technical Accuracy', 'Business Logic Validation', 'Compliance Check', 'Cross-Reference Validation']
    },
    {
      id: '6.2',
      title: 'Implementation Planning',
      description: 'Create comprehensive implementation roadmap',
      icon: Target,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      gradient: 'from-rose-500 to-rose-600',
      duration: '15-20 minutes',
      inputs: ['Validated FSD', 'TSD', 'Technology Stack', 'Domain Intelligence'],
      process: [
        'Create implementation roadmap',
        'Define development phases',
        'Resource allocation planning',
        'Timeline estimation',
        'Risk assessment and mitigation'
      ],
      outputs: ['Implementation Plan', 'Development Roadmap', 'Resource Allocation', 'Timeline Schedule'],
      safeguards: ['Planning Accuracy', 'Resource Validation', 'Timeline Verification', 'Risk Assessment']
    },
    {
      id: '6.3',
      title: 'Project Setup & Architecture',
      description: 'Initialize project structure and architecture',
      icon: Package,
      color: 'text-fuchsia-600',
      bgColor: 'bg-fuchsia-50',
      borderColor: 'border-fuchsia-200',
      gradient: 'from-fuchsia-500 to-fuchsia-600',
      duration: '20-25 minutes',
      inputs: ['Implementation Plan', 'TSD', 'Technology Stack'],
      process: [
        'Initialize project structure',
        'Set up development environment',
        'Configure build tools and dependencies',
        'Implement clean architecture patterns',
        'Set up version control and CI/CD pipeline'
      ],
      outputs: ['Project Structure', 'Development Environment', 'Build Configuration', 'Architecture Setup'],
      safeguards: ['Architecture Validation', 'Environment Setup', 'Configuration Check', 'Structure Verification']
    },
    {
      id: '6.4',
      title: 'Database Model Design',
      description: 'Design comprehensive database schema',
      icon: Database,
      color: 'text-lime-600',
      bgColor: 'bg-lime-50',
      borderColor: 'border-lime-200',
      gradient: 'from-lime-500 to-lime-600',
      duration: '25-30 minutes',
      inputs: ['FSD', 'TSD', 'Domain Intelligence', 'Business Logic'],
      process: [
        'Design database schema',
        'Define entity relationships',
        'Create data models',
        'Implement indexing strategy',
        'Validate data integrity constraints'
      ],
      outputs: ['Database Schema', 'Entity Models', 'Relationship Diagrams', 'Data Validation Rules'],
      safeguards: ['Schema Validation', 'Relationship Check', 'Data Integrity', 'Performance Optimization']
    },
    {
      id: '6.5',
      title: 'ORM Mapper & MongoDB Classes',
      description: 'Create ORM mappings and MongoDB integration',
      icon: Network,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      gradient: 'from-sky-500 to-sky-600',
      duration: '20-25 minutes',
      inputs: ['Database Schema', 'Entity Models', 'Technology Stack'],
      process: [
        'Create ORM mappings',
        'Implement MongoDB integration',
        'Generate data access classes',
        'Configure connection management',
        'Implement query optimization'
      ],
      outputs: ['ORM Mappings', 'MongoDB Classes', 'Data Access Layer', 'Connection Management'],
      safeguards: ['Mapping Validation', 'Connection Testing', 'Query Optimization', 'Performance Check']
    },
    {
      id: '6.6',
      title: 'Business Service Interfaces',
      description: 'Define business service contracts and interfaces',
      icon: Cpu,
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      gradient: 'from-violet-500 to-violet-600',
      duration: '25-30 minutes',
      inputs: ['FSD', 'Business Logic', 'Domain Intelligence'],
      process: [
        'Define service interfaces',
        'Create business contracts',
        'Implement service abstractions',
        'Define method signatures',
        'Validate interface contracts'
      ],
      outputs: ['Service Interfaces', 'Business Contracts', 'Method Signatures', 'Interface Documentation'],
      safeguards: ['Interface Validation', 'Contract Verification', 'Method Signature Check', 'Documentation Accuracy']
    },
    {
      id: '6.7',
      title: 'Interface Validation & Coverage',
      description: 'Validate interfaces and ensure comprehensive coverage',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      gradient: 'from-emerald-500 to-emerald-600',
      duration: '15-20 minutes',
      inputs: ['Service Interfaces', 'FSD', 'Business Requirements'],
      process: [
        'Validate interface completeness',
        'Check method coverage',
        'Verify business logic coverage',
        'Test interface contracts',
        'Generate coverage reports'
      ],
      outputs: ['Validation Report', 'Coverage Analysis', 'Interface Tests', 'Completeness Check'],
      safeguards: ['Coverage Validation', 'Interface Testing', 'Completeness Check', 'Quality Assurance']
    },
    {
      id: '6.8',
      title: 'Business Service Implementations',
      description: 'Implement all business service logic',
      icon: Code,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      gradient: 'from-teal-500 to-teal-600',
      duration: '45-60 minutes',
      inputs: ['Service Interfaces', 'Business Logic', 'Domain Intelligence'],
      process: [
        'Implement business services',
        'Apply domain-specific patterns',
        'Integrate with data layer',
        'Implement business rules',
        'Add error handling and validation'
      ],
      outputs: ['Business Services', 'Service Implementations', 'Business Logic', 'Error Handling'],
      safeguards: ['Implementation Validation', 'Business Logic Check', 'Error Handling', 'Pattern Compliance']
    },
    {
      id: '6.9',
      title: 'Unit Testing Cases',
      description: 'Create comprehensive unit test suite',
      icon: CheckCircle2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      gradient: 'from-orange-500 to-orange-600',
      duration: '30-40 minutes',
      inputs: ['Service Implementations', 'Business Logic', 'Test Requirements'],
      process: [
        'Create unit test cases',
        'Implement test scenarios',
        'Add edge case testing',
        'Generate test data',
        'Validate test coverage'
      ],
      outputs: ['Unit Tests', 'Test Cases', 'Test Data', 'Coverage Reports'],
      safeguards: ['Test Validation', 'Coverage Verification', 'Edge Case Testing', 'Quality Assurance']
    },
    {
      id: '6.10',
      title: 'REST API Development',
      description: 'Develop comprehensive REST API endpoints',
      icon: Server,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      gradient: 'from-red-500 to-red-600',
      duration: '40-50 minutes',
      inputs: ['Service Implementations', 'API Specifications', 'Business Logic'],
      process: [
        'Create REST API controllers',
        'Implement endpoint logic',
        'Add request/response handling',
        'Implement authentication and authorization',
        'Add API documentation'
      ],
      outputs: ['REST API', 'API Controllers', 'Endpoint Documentation', 'Authentication'],
      safeguards: ['API Validation', 'Endpoint Testing', 'Security Check', 'Documentation Accuracy']
    },
    {
      id: '6.11',
      title: 'Frontend Screen Development',
      description: 'Develop complete frontend user interface',
      icon: Monitor,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      gradient: 'from-yellow-500 to-yellow-600',
      duration: '60-75 minutes',
      inputs: ['UI/UX Designs', 'API Endpoints', 'Component Library'],
      process: [
        'Create frontend components',
        'Implement user interfaces',
        'Integrate with API endpoints',
        'Add state management',
        'Implement responsive design'
      ],
      outputs: ['Frontend Components', 'User Interfaces', 'State Management', 'Responsive Design'],
      safeguards: ['UI Validation', 'Component Testing', 'API Integration', 'Responsive Check']
    },
    {
      id: '6.12',
      title: 'Frontend Unit Test Cases',
      description: 'Create comprehensive frontend test suite',
      icon: Smartphone,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      gradient: 'from-indigo-500 to-indigo-600',
      duration: '25-35 minutes',
      inputs: ['Frontend Components', 'UI/UX Specifications', 'Test Requirements'],
      process: [
        'Create component tests',
        'Implement integration tests',
        'Add user interaction tests',
        'Test responsive behavior',
        'Validate accessibility'
      ],
      outputs: ['Frontend Tests', 'Component Tests', 'Integration Tests', 'Accessibility Tests'],
      safeguards: ['Test Validation', 'Component Testing', 'Accessibility Check', 'Integration Verification']
    },
    {
      id: '6.13',
      title: 'CI/CD & Deployment (Azure)',
      description: 'Set up continuous integration and Azure deployment',
      icon: GitBranch,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      gradient: 'from-cyan-500 to-cyan-600',
      duration: '30-40 minutes',
      inputs: ['Complete Application', 'Azure Configuration', 'Deployment Requirements'],
      process: [
        'Configure CI/CD pipeline',
        'Set up Azure App Services',
        'Configure deployment scripts',
        'Implement monitoring and logging',
        'Set up production environment'
      ],
      outputs: ['CI/CD Pipeline', 'Azure Deployment', 'Production Environment', 'Monitoring Setup'],
      safeguards: ['Deployment Validation', 'Pipeline Testing', 'Environment Check', 'Monitoring Verification']
    }
  ]

  return (
    <section id="stage-overview" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-foreground text-sm font-medium">
            <Layers className="w-5 h-5 mr-3 text-purple-400" />
            Framework Overview
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              7-Stage Automation Process
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our intelligent framework transforms raw requirements into production-ready applications through a structured, automated process with domain intelligence and anti-hallucination safeguards.
          </p>
        </div>

        {/* Main Stages */}
        <div className="space-y-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`border-2 ${stage.borderColor} rounded-xl overflow-hidden`}
            >
              {/* Stage Header */}
              <div 
                className={`${stage.bgColor} p-4 sm:p-6 cursor-pointer`}
                onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 sm:p-4 rounded-lg ${stage.bgColor}`}>
                      <stage.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stage.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Stage {stage.id} - {stage.title}</h3>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${stage.gradient} text-white`}>
                          {stage.duration}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground">{stage.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedStage === stage.id ? (
                      <ChevronUp className="h-6 w-6 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedStage === stage.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/50 p-4 sm:p-6 space-y-4 sm:space-y-6"
                >
                  {/* Details */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3">Stage Details</h5>
                    <p className="text-muted-foreground leading-relaxed">{stage.details}</p>
                  </div>

                  {/* Inputs */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3">Framework Inputs</h5>
                    <div className="flex flex-wrap gap-2">
                      {stage.inputs.map((input, idx) => (
                        <div key={idx} className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                          <ArrowRight className="h-4 w-4 text-blue-400" />
                          <span className="text-sm text-muted-foreground">{input}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outputs */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3">Framework Outputs</h5>
                    <div className="flex flex-wrap gap-2">
                      {stage.outputs.map((output, idx) => (
                        <div key={idx} className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:border-gray-600">
                          <div className={`p-1 rounded-full bg-gradient-to-r ${stage.gradient}`}>
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{output}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3">Framework Process</h5>
                    <div className="flex flex-wrap gap-2">
                      {stage.process.map((step, idx) => (
                        <div key={idx} className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Safeguards */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3">Anti-Hallucination Safeguards</h5>
                    <div className="flex flex-wrap gap-2">
                      {stage.safeguards.map((safeguard, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-sm text-muted-foreground">
                          <Shield className="h-4 w-4 inline mr-2" />
                          {safeguard}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

               {/* Stage 6 Sub-Stages */}
               <div className="space-y-8">
                 <div className="text-center">
                   <h3 className="text-3xl font-bold text-foreground mb-4">
                     Stage 6: Implementation Sub-Stages
                   </h3>
                   <p className="text-lg text-muted-foreground">
                     13 detailed implementation phases within Stage 6
                   </p>
                 </div>

                 <div className="space-y-6">
                   {implementationStages.map((stage, index) => (
                     <motion.div
                       key={stage.id}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, delay: index * 0.05 }}
                       className={`border-2 ${stage.borderColor} rounded-xl overflow-hidden`}
                     >
                       {/* Stage Header */}
                       <div 
                         className={`${stage.bgColor} p-6 cursor-pointer`}
                         onClick={() => setExpandedImplementationStage(expandedImplementationStage === stage.id ? null : stage.id)}
                       >
                         <div className="flex items-center justify-between">
                           <div className="flex items-center space-x-4">
                             <div className={`p-4 rounded-lg ${stage.bgColor}`}>
                               <stage.icon className={`h-8 w-8 ${stage.color}`} />
                             </div>
                             <div>
                               <div className="flex items-center space-x-3 mb-2">
                                 <h3 className="text-2xl font-bold text-foreground">Stage {stage.id} - {stage.title}</h3>
                                 <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${stage.gradient} text-white`}>
                                   {stage.duration}
                                 </span>
                               </div>
                               <p className="text-sm sm:text-base text-muted-foreground">{stage.description}</p>
                             </div>
                           </div>
                           <div className="flex-shrink-0">
                             {expandedImplementationStage === stage.id ? (
                               <ChevronUp className="h-6 w-6 text-muted-foreground" />
                             ) : (
                               <ChevronDown className="h-6 w-6 text-muted-foreground" />
                             )}
                           </div>
                         </div>
                       </div>

                       {/* Expanded Content */}
                       {expandedImplementationStage === stage.id && (
                         <motion.div
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: 'auto' }}
                           exit={{ opacity: 0, height: 0 }}
                           transition={{ duration: 0.3 }}
                           className="bg-card/50 p-4 sm:p-6 space-y-4 sm:space-y-6"
                         >
                           {/* Inputs */}
                           <div>
                             <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                               <ArrowRight className="h-5 w-5 mr-2 text-blue-400" />
                               Framework Inputs
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {stage.inputs.map((input, idx) => (
                                 <div key={idx} className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                                   <ArrowRight className="h-4 w-4 text-blue-400" />
                                   <span className="text-sm text-muted-foreground">{input}</span>
                                 </div>
                               ))}
                             </div>
                           </div>

                           {/* Process */}
                           <div>
                             <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                               <Workflow className="h-5 w-5 mr-2 text-purple-400" />
                               Framework Process
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {stage.process.map((step, idx) => (
                                 <div key={idx} className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                                   <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                                     {idx + 1}
                                   </div>
                                   <span className="text-sm text-muted-foreground">{step}</span>
                                 </div>
                               ))}
                             </div>
                           </div>

                           {/* Outputs */}
                           <div>
                             <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                               <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                               Framework Outputs
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {stage.outputs.map((output, idx) => (
                                 <div key={idx} className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:border-gray-600">
                                   <div className={`p-1 rounded-full bg-gradient-to-r ${stage.gradient}`}>
                                     <CheckCircle className="h-3 w-3 text-white" />
                                   </div>
                                   <span className="text-sm font-medium text-muted-foreground">{output}</span>
                                 </div>
                               ))}
                             </div>
                           </div>

                           {/* Safeguards */}
                           <div>
                             <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                               <Shield className="h-5 w-5 mr-2 text-orange-400" />
                               Anti-Hallucination Safeguards
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {stage.safeguards.map((safeguard, idx) => (
                                 <span key={idx} className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-sm text-muted-foreground">
                                   <Shield className="h-4 w-4 inline mr-2" />
                                   {safeguard}
                                 </span>
                               ))}
                             </div>
                           </div>
                         </motion.div>
                       )}
                     </motion.div>
                   ))}
                 </div>
               </div>

        {/* Technology Stack */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Default Technology Stack</h3>
            <p className="text-lg text-muted-foreground">Enterprise-grade technologies for production-ready applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card/50 text-center">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 mx-auto w-fit mb-4">
                <Server className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Backend</h4>
              <p className="text-sm text-muted-foreground">.NET Core 8.0 + C# 12 + ASP.NET Core Web API</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 text-center">
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-green-600/20 mx-auto w-fit mb-4">
                <Monitor className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Frontend</h4>
              <p className="text-sm text-muted-foreground">Vue.js 3 + Vuex 4 + Vue Router 4 + Axios</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 text-center">
              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-600/20 mx-auto w-fit mb-4">
                <Database className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Database</h4>
              <p className="text-sm text-muted-foreground">MongoDB with official .NET driver</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 text-center">
              <div className="p-4 rounded-lg bg-gradient-to-r from-orange-500/20 to-orange-600/20 mx-auto w-fit mb-4">
                <Cloud className="h-8 w-8 text-orange-400" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Deployment</h4>
              <p className="text-sm text-muted-foreground">Docker + Kubernetes + Azure App Services</p>
            </div>
          </div>
        </div>


      </motion.div>
    </section>
  )
}
