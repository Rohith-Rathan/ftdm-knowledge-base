'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Lock, 
  Zap, 
  Star, 
  Brain, 
  Target, 
  Clock, 
  Users, 
  Code, 
  Database, 
  Palette, 
  Settings, 
  Play, 
  Cloud,
  FileText,
  Workflow,
  Cpu,
  Server,
  Monitor,
  Smartphone,
  GitBranch,
  Package,
  Terminal,
  Network,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Download,
  Upload,
  RefreshCw,
  Copy,
  ExternalLink,
  Search,
  Filter,
  Folder,
  FolderOpen,
  File,
  FolderPlus,
  Code2,
  GitCommit,
  GitMerge,
  GitPullRequest,
  GitBranch as GitBranchIcon,
  GitCommit as GitCommitIcon,
  GitMerge as GitMergeIcon,
  GitPullRequest as GitPullRequestIcon,
  ArrowRight,
  Globe,
  Building2,
  Layers,
  Rocket
} from 'lucide-react'

export function AntiHallucinationSafeguards() {
  const [expandedSafeguard, setExpandedSafeguard] = useState<number | null>(null)

  const safeguards = [
    {
      id: 1,
      title: 'Stage Boundary Enforcement',
      description: 'Explicit warnings about valid stages (1-7 only)',
      icon: Lock,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      gradient: 'from-red-500 to-red-600',
      details: 'Prevents the framework from creating or referencing stages beyond the defined 7 stages. Ensures strict adherence to the framework structure.',
      implementation: [
        'Pre-Generation: Validates stage numbers and inputs before processing',
        'During Generation: Monitors for stage boundary violations',
        'Post-Generation: Validates all outputs are within valid stage range',
        'Stage Transition: Ensures all validation criteria are met before proceeding'
      ],
      examples: [
        '❌ INVALID: Stage 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, etc.',
        '✅ VALID: Stage 1: Mermaid Generation',
        '✅ VALID: Stage 2: FSD Creation',
        '✅ VALID: Stage 3: TSD Creation',
        '✅ VALID: Stage 4: UI/UX Designs Analysis',
        '✅ VALID: Stage 5: RTSD Creation',
        '✅ VALID: Stage 6.1-6.13: Implementation Stages (13 sub-stages)',
        '✅ VALID: Stage 7: Temporary Backend'
      ]
    },
    {
      id: 2,
      title: 'Output Validation',
      description: 'Technical accuracy validation for all outputs',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      gradient: 'from-green-500 to-green-600',
      details: 'Validates all generated outputs for technical accuracy, completeness, and consistency with requirements.',
      implementation: [
        'Technical Accuracy: Validates all technical specifications are correct',
        'Completeness Check: Ensures all required outputs are generated',
        'Consistency Validation: Verifies outputs are consistent with inputs',
        'Quality Assurance: Applies domain-specific quality standards'
      ],
      examples: [
        '✅ Mermaid diagrams are syntactically correct',
        '✅ FSD contains all required functional specifications',
        '✅ TSD includes complete technical architecture',
        '✅ Database schemas are properly normalized',
        '✅ API endpoints follow RESTful conventions',
        '✅ Code follows established patterns and conventions'
      ]
    },
    {
      id: 3,
      title: 'Consistency Validation',
      description: 'Cross-stage consistency checks',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600',
      details: 'Ensures consistency across all stages and validates that outputs from one stage align with inputs for the next stage.',
      implementation: [
        'Cross-Stage Validation: Ensures outputs from Stage N align with inputs for Stage N+1',
        'Data Flow Validation: Validates data flows correctly between stages',
        'Reference Validation: Ensures all references between stages are valid',
        'Context Preservation: Maintains context and requirements throughout all stages'
      ],
      examples: [
        '✅ Stage 1 outputs (Mermaid diagrams) are used correctly in Stage 2',
        '✅ FSD from Stage 2 is properly referenced in Stage 3 TSD',
        '✅ UXD folder structure from Stage 3 is analyzed in Stage 4',
        '✅ All stage outputs maintain consistency with original requirements',
        '✅ Technology stack remains consistent across all stages'
      ]
    },
    {
      id: 4,
      title: 'Error Prevention',
      description: 'Comprehensive error detection and prevention',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      gradient: 'from-orange-500 to-orange-600',
      details: 'Implements comprehensive error detection and prevention mechanisms to avoid common AI mistakes and hallucinations.',
      implementation: [
        'Input Validation: Validates all inputs before processing',
        'Error Detection: Detects potential errors during generation',
        'Error Recovery: Implements recovery mechanisms for detected errors',
        'Quality Gates: Applies quality gates at each stage transition'
      ],
      examples: [
        '✅ Validates raw requirements are complete and clear',
        '✅ Detects missing or incomplete specifications',
        '✅ Prevents generation of invalid code or configurations',
        '✅ Ensures all generated files are syntactically correct',
        '✅ Validates database schemas are properly designed'
      ]
    },
    {
      id: 5,
      title: 'Validation Scripts',
      description: 'Automated validation pipeline',
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      gradient: 'from-purple-500 to-purple-600',
      details: 'Automated validation scripts that run at each stage to ensure quality and consistency.',
      implementation: [
        'Automated Testing: Runs automated tests on all generated outputs',
        'Validation Pipeline: Implements validation pipeline for each stage',
        'Quality Metrics: Tracks quality metrics throughout the process',
        'Continuous Validation: Provides continuous validation during generation'
      ],
      examples: [
        '✅ Automated syntax validation for all generated code',
        '✅ Automated testing of generated API endpoints',
        '✅ Automated validation of database schemas',
        '✅ Automated testing of frontend components',
        '✅ Automated validation of deployment configurations'
      ]
    },
    {
      id: 6,
      title: 'Documentation Accuracy',
      description: 'Consistent documentation across all files',
      icon: BookOpen,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      gradient: 'from-cyan-500 to-cyan-600',
      details: 'Ensures all documentation is accurate, consistent, and up-to-date across all framework files.',
      implementation: [
        'Documentation Validation: Validates all documentation is accurate',
        'Consistency Checks: Ensures documentation is consistent across files',
        'Version Control: Maintains version control for all documentation',
        'Update Validation: Validates documentation updates are accurate'
      ],
      examples: [
        '✅ All stage descriptions are accurate and consistent',
        '✅ Input/output specifications match actual implementation',
        '✅ User journey documentation reflects actual process',
        '✅ Technical specifications are accurate and complete',
        '✅ All examples and use cases are valid and tested'
      ]
    }
  ]

  const validationProcess = [
    {
      phase: 'Pre-Generation',
      icon: Eye,
      description: 'Validates stage numbers and inputs',
      details: [
        'Stage boundary validation',
        'Input completeness check',
        'Requirements validation',
        'Technology stack validation'
      ]
    },
    {
      phase: 'During Generation',
      icon: Zap,
      description: 'Monitors for technical accuracy and consistency',
      details: [
        'Real-time validation',
        'Consistency monitoring',
        'Error detection',
        'Quality metrics tracking'
      ]
    },
    {
      phase: 'Post-Generation',
      icon: CheckCircle,
      description: 'Validates all outputs before proceeding',
      details: [
        'Output completeness validation',
        'Technical accuracy verification',
        'Cross-stage consistency check',
        'Quality gate validation'
      ]
    },
    {
      phase: 'Stage Transition',
      icon: ArrowRight,
      description: 'Ensures all validation criteria are met',
      details: [
        'Transition validation',
        'Context preservation',
        'Data flow validation',
        'Next stage preparation'
      ]
    }
  ]

  return (
    <section id="anti-hallucination-safeguards" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 dark:border-red-500/30 text-foreground text-sm font-medium">
            <Shield className="w-5 h-5 mr-3 text-red-400" />
            Anti-Hallucination Safeguards
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Hallucination-Proof Framework
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            FTDM Framework includes comprehensive safeguards to prevent AI hallucination and ensure maximum reliability and accuracy in all generated outputs.
          </p>
        </div>

        {/* Safeguards */}
        <div className="space-y-8">
          {safeguards.map((safeguard, index) => (
            <motion.div
              key={safeguard.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`border-2 ${safeguard.borderColor} rounded-xl overflow-hidden`}
            >
              {/* Safeguard Header */}
              <div 
                className={`${safeguard.bgColor} p-4 sm:p-6 cursor-pointer`}
                onClick={() => setExpandedSafeguard(expandedSafeguard === safeguard.id ? null : safeguard.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 sm:p-4 rounded-lg ${safeguard.bgColor}`}>
                      <safeguard.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${safeguard.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">{safeguard.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{safeguard.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedSafeguard === safeguard.id ? (
                      <ChevronUp className="h-6 w-6 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedSafeguard === safeguard.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/50 p-4 sm:p-6 space-y-4 sm:space-y-6"
                >
                  {/* Details */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3">Safeguard Details</h5>
                    <p className="text-muted-foreground leading-relaxed">{safeguard.details}</p>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3">Implementation</h5>
                    <div className="space-y-2">
                      {safeguard.implementation.map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-card border border-border">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3">Examples</h5>
                    <div className="space-y-2">
                      {safeguard.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-card border border-border">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground font-mono">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Validation Process */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Validation Process
            </h3>
            <p className="text-lg text-muted-foreground">
              How the safeguards work throughout the framework process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {validationProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                      <phase.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{phase.phase}</h4>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {phase.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <ArrowRight className="h-3 w-3 text-blue-400" />
                        <span className="text-xs text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="p-8 rounded-xl border-2 border-green-500/20 dark:border-green-500/30 bg-green-500/5 dark:bg-green-500/10"
        >
          <div className="flex items-start space-x-4">
            <Shield className="h-8 w-8 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Reliable, Hallucination-Proof Framework
              </h3>
              <p className="text-muted-foreground mb-4">
                The EFTDM framework is now the most comprehensive, intelligent, and reliable development framework with comprehensive safeguards against AI hallucination and errors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-muted-foreground">100% Stage Boundary Enforcement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-muted-foreground">Comprehensive Technical Accuracy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-muted-foreground">Consistent Cross-Stage Outputs</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-muted-foreground">Reliable Error Prevention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-muted-foreground">Automated Validation Pipeline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-muted-foreground">Accurate Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
