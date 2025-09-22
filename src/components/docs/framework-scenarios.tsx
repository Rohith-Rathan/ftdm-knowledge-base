'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Layers, 
  Rocket, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Brain, 
  Shield, 
  Target, 
  Clock, 
  Users, 
  Code, 
  Database, 
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
  Network,
  ShieldCheck,
  Eye,
  AlertTriangle,
  CheckCircle2,
  Lock,
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
  GitCommit,
  GitMerge,
  GitPullRequest,
  GitBranch as GitBranchIcon,
  GitCommit as GitCommitIcon,
  GitMerge as GitMergeIcon,
  GitPullRequest as GitPullRequestIcon
} from 'lucide-react'

export function FrameworkScenarios() {
  const [expandedScenario, setExpandedScenario] = useState<number | null>(null)

  const scenarios = [
    {
      id: 1,
      title: 'Scenario 1: Ready Made Codebase',
      subtitle: 'New Requirement - Ready Made Codebase',
      description: 'Enhance existing project (Lovable, Replit, Figma, Base44) with the same requirement that was used to create it.',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10 dark:bg-blue-500/20',
      borderColor: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600',
      projectStructure: [
        '[project_name]/',
        '├── EFTDM_FRAMEWORK/          # Framework files',
        '└── [existing_project]/       # Existing project (Lovable, Replit, Figma, Base44)',
        '    ├── src/                  # Existing source code',
        '    ├── components/           # Existing components',
        '    ├── services/             # Existing services',
        '    ├── [existing_files]/     # All existing files',
        '    └── [enhanced_files]/     # Files added/modified by EFTDM'
      ],
      process: [
        'Stage 1: Analyzes the same raw requirements in context of existing codebase',
        'Stage 2: Creates FSD that enhances existing functionality',
        'Stage 3: Generates TSD that improves existing architecture',
        'Stage 4: Creates UI/UX designs that enhance existing design system',
        'Stage 5: Generates RTSD that improves existing implementation',
        'Stage 6.1-6.13: Enhances existing codebase with new features and improvements',
        'Stage 7: Enhances existing backend with additional functionality'
      ],
      codebaseAnalysis: [
        'Deep Code Analysis: Analyzes all existing files, components, and code structure',
        'Pattern Recognition: Identifies existing coding patterns, architecture, and conventions',
        'Technology Stack Detection: Detects existing tech stack and frameworks used',
        'Design System Analysis: Analyzes existing UI/UX patterns and design system',
        'Architecture Understanding: Understands existing architecture and data flow',
        'Integration Points: Identifies where new features can be integrated seamlessly'
      ],
      benefits: [
        'Enhanced Implementation: Improves existing codebase with domain intelligence',
        'No Code Loss: Preserves all existing functionality',
        'Better Architecture: Applies EFTDM best practices to existing code',
        'Domain Intelligence: Enhances existing implementation with domain-specific patterns'
      ],
      example: 'You have a Lovable-created payroll system, paste that codebase, provide the same payroll requirement to EFTDM. EFTDM enhances the existing Lovable codebase by adding missing features, improving architecture, and applying domain intelligence.'
    },
    {
      id: 2,
      title: 'Scenario 2: Additional Features',
      subtitle: 'Existing Project - Additional Feature to Existing Codebase',
      description: 'Add new features or modules to the existing codebase.',
      icon: Layers,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10 dark:bg-green-500/20',
      borderColor: 'border-green-200',
      gradient: 'from-green-500 to-green-600',
      projectStructure: [
        '[project_name]/',
        '├── EFTDM_FRAMEWORK/          # Framework files',
        '└── [existing_project]/       # Existing project (Lovable, Replit, etc.)',
        '    ├── src/                  # Existing source code',
        '    ├── components/           # Existing components',
        '    ├── services/             # Existing services',
        '    ├── [existing_files]/     # All existing files',
        '    └── [enhanced_files]/     # Files added/modified by EFTDM'
      ],
      process: [
        'Stage 1: Analyzes new requirements in context of existing project',
        'Stage 2: Creates FSD that integrates with existing functionality',
        'Stage 3: Generates TSD that extends existing architecture',
        'Stage 4: Creates UI/UX designs that match existing design system',
        'Stage 5: Generates RTSD that integrates with existing codebase',
        'Stage 6.1-6.13: Implements new features that integrate with existing project',
        'Stage 7: Extends existing backend with new functionality'
      ],
      codebaseAnalysis: [
        'Deep Code Analysis: Analyzes all existing files, components, and code structure',
        'Pattern Recognition: Identifies existing coding patterns, architecture, and conventions',
        'Technology Stack Detection: Detects existing tech stack and frameworks used',
        'Design System Analysis: Analyzes existing UI/UX patterns and design system',
        'Architecture Understanding: Understands existing architecture and data flow',
        'Integration Points: Identifies where new features can be integrated seamlessly'
      ],
      integrationStrategy: [
        'Code Analysis: Analyzes existing codebase structure and patterns',
        'Design System Integration: Matches existing UI/UX patterns',
        'Architecture Extension: Extends existing architecture without breaking changes',
        'API Integration: Integrates new APIs with existing backend',
        'Database Extension: Extends existing database schema'
      ],
      benefits: [
        'Seamless Integration: New features integrate naturally with existing code',
        'No Breaking Changes: Preserves existing functionality',
        'Consistent Design: Maintains existing design system and patterns',
        'Scalable Architecture: Extends architecture without refactoring'
      ],
      example: 'You have a Lovable-created CRM system, and want to add a reporting module. EFTDM analyzes the existing CRM, creates a reporting module that integrates seamlessly.'
    },
    {
      id: 3,
      title: 'Scenario 3: Empty Project',
      subtitle: 'New Application from Scratch',
      description: 'Create a new application from scratch with complete control over architecture and design.',
      icon: Rocket,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10 dark:bg-purple-500/20',
      borderColor: 'border-purple-200',
      gradient: 'from-purple-500 to-purple-600',
      projectStructure: [
        '[project_name]/',
        '├── EFTDM_FRAMEWORK/          # Framework files',
        '└── [new_project_files]/      # New project files (generated by EFTDM)'
      ],
      process: [
        'Stage 1: Analyzes raw requirements and creates comprehensive Mermaid diagrams',
        'Stage 2: Creates complete FSD for the new application',
        'Stage 3: Generates complete TSD with full architecture',
        'Stage 4: Creates complete UI/UX design system',
        'Stage 5: Generates complete RTSD with business logic',
        'Stage 6.1-6.13: Implements complete application from scratch',
        'Stage 7: Creates complete backend system'
      ],
      benefits: [
        'Complete Control: Full control over architecture and design decisions',
        'Best Practices: Implements industry best practices from the start',
        'Domain Expertise: Applies domain-specific intelligence throughout',
        'Production Ready: Creates production-ready applications from day one'
      ],
      example: 'You want to create a new healthcare management system from scratch. EFTDM creates a complete, production-ready application.'
    }
  ]

  return (
    <section id="framework-scenarios" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/10 dark:bg-green-500/20 border border-green-500/20 dark:border-green-500/30 text-foreground text-sm font-medium">
            <Globe className="w-5 h-5 mr-3 text-green-400" />
            Framework Integration Scenarios
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Universal Compatibility
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            FTDM Framework works seamlessly with existing projects from any platform. Choose your scenario and see how the framework adapts to your needs.
          </p>
        </div>

        {/* Scenarios */}
        <div className="space-y-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`border-2 ${scenario.borderColor} rounded-xl overflow-hidden`}
            >
              {/* Scenario Header */}
              <div 
                className={`${scenario.bgColor} p-4 sm:p-6 cursor-pointer`}
                onClick={() => setExpandedScenario(expandedScenario === scenario.id ? null : scenario.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 sm:p-4 rounded-lg ${scenario.bgColor}`}>
                      <scenario.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${scenario.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{scenario.title}</h3>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${scenario.gradient} text-white`}>
                          Scenario {scenario.id}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">{scenario.subtitle}</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">{scenario.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedScenario === scenario.id ? (
                      <ChevronUp className="h-6 w-6 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedScenario === scenario.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/50 p-4 sm:p-6 space-y-4 sm:space-y-6"
                >
                  {/* Project Structure */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                      <Folder className="h-5 w-5 mr-2" />
                      Project Structure
                    </h5>
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <pre className="text-sm text-muted-foreground font-mono">
                        {scenario.projectStructure.join('\n')}
                      </pre>
                    </div>
                  </div>

                  {/* Framework Process */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                      <Workflow className="h-5 w-5 mr-2" />
                      Framework Process
                    </h5>
                    <div className="space-y-2">
                      {scenario.process.map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-card border border-border">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Codebase Analysis */}
                  {scenario.codebaseAnalysis && (
                    <div>
                      <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                        <Eye className="h-5 w-5 mr-2" />
                        Codebase Analysis Strategy
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {scenario.codebaseAnalysis.map((analysis, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-card border border-border">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{analysis}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Integration Strategy (for Scenario 2) */}
                  {scenario.integrationStrategy && (
                    <div>
                      <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                        <GitMerge className="h-5 w-5 mr-2" />
                        Integration Strategy
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {scenario.integrationStrategy.map((strategy, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-card border border-border">
                            <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{strategy}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                      <Star className="h-5 w-5 mr-2" />
                      Benefits
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {scenario.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-card border border-border">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${scenario.gradient}`}>
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Example */}
                  <div>
                    <h5 className="text-lg font-bold text-foreground mb-3 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Example
                    </h5>
                    <div className="p-4 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 dark:border-blue-500/20">
                      <p className="text-muted-foreground leading-relaxed">{scenario.example}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Critical Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="p-8 rounded-xl border-2 border-orange-500/20 dark:border-orange-500/30 bg-orange-500/5 dark:bg-orange-500/10"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Critical: Codebase Analysis for Scenarios 1 & 2
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong>IMPORTANT:</strong> For both Scenario 1 and Scenario 2, the EFTDM framework <strong>ALWAYS</strong> starts by analyzing the existing project's codebase files and code inside of it. This analysis determines how the framework proceeds with development.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-muted-foreground">The framework NEVER ignores existing code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-muted-foreground">It ALWAYS analyzes and works within the existing codebase structure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-muted-foreground">Maintains consistency with existing patterns and conventions</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
