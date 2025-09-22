'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import FrameworkDownload from '../framework-download'
import { 
  Zap, 
  Shield, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Rocket,
  Brain,
  Code,
  Database,
  Palette,
  Settings,
  Play,
  Cloud,
  FileText,
  Layers,
  Workflow,
  Building2,
  Cpu,
  Globe,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Clock,
  GitBranch,
  Package,
  Terminal,
  Server,
  Monitor,
  Smartphone,
  Network,
  ShieldCheck,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Copy,
  ExternalLink
} from 'lucide-react'

export function Introduction() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)
  const features = [
    {
      icon: Zap,
      title: 'Fast-Track Development',
      description: 'Transform raw requirements into production-ready applications in minutes, not months.',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'Domain Intelligence',
      description: 'Automatically detects domain patterns and applies industry-specific best practices.',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Anti-Hallucination Safeguards',
      description: 'Comprehensive safeguards prevent AI errors and ensure maximum reliability.',
      color: 'text-green-400'
    },
    {
      icon: Workflow,
      title: '7-Stage Automation',
      description: 'Complete automation from requirements to deployment with minimal user input.',
      color: 'text-pink-400'
    },
    {
      icon: Target,
      title: 'Quality Gates',
      description: 'Built-in validation and quality assurance at every stage.',
      color: 'text-orange-400'
    },
    {
      icon: Globe,
      title: 'Universal Compatibility',
      description: 'Works with existing projects from any platform (Lovable, Replit, Figma, Base44).',
      color: 'text-cyan-400'
    }
  ]

  const stats = [
    { number: '7', label: 'Automated Stages', icon: Layers },
    { number: '13', label: 'Implementation Sub-Stages', icon: Workflow },
    { number: '100%', label: 'Production Ready', icon: CheckCircle },
    { number: '10x', label: 'Faster Development', icon: Rocket },
    { number: '100%', label: 'Hallucination-Proof', icon: Shield },
    { number: '3', label: 'Integration Scenarios', icon: Globe }
  ]

  return (
    <>
      <section id="introduction" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 text-foreground text-sm font-medium">
            <Star className="w-5 h-5 mr-3 text-yellow-400" />
            Fast-Track Development Methodology
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              FTDM Framework
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-full sm:max-w-4xl mx-auto leading-relaxed debug-content">
            Skip months of development - setup in 5 minutes, build in hours! Our intelligent 7-stage framework transforms raw requirements into production-ready applications with domain intelligence and anti-hallucination safeguards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-blue-500/10 dark:bg-blue-500/20`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-xl border border-border bg-card/50"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Get Started Now
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setIsDownloadOpen(true)}
              className="text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 h-auto border-2 border-border text-foreground hover:bg-accent transition-all duration-300"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Framework
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Complete automation from raw requirements to production-ready application
          </p>
        </motion.div>
      </motion.div>
    </section>

      {/* Framework Download Modal */}
      <FrameworkDownload 
        isOpen={isDownloadOpen} 
        onClose={() => setIsDownloadOpen(false)} 
      />
    </>
  )
}
