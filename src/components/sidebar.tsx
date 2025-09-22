'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { 
  X, 
  ChevronRight,
  BookOpen,
  Code,
  Database,
  Palette,
  Settings,
  Play,
  Cloud,
  Shield,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Zap,
  FileText,
  Layers,
  Workflow,
  Building2,
  Brain,
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
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const navigationItems = [
    {
      title: 'Getting Started',
      items: [
        { id: 'introduction', label: 'Introduction', icon: BookOpen },
        { id: 'framework-flow-visualization', label: 'Framework Flow', icon: Workflow },
        { id: 'quick-start', label: 'Quick Start', icon: Rocket },
        { id: 'stage1-kickoff', label: 'Stage 1 Kickoff', icon: FileText },
      ]
    },
    {
      title: 'Framework Stages',
      items: [
        { id: 'stage-overview', label: 'Stage Overview', icon: Layers },
      ]
    },
    {
      title: 'Advanced Concepts',
      items: [
        { id: 'framework-scenarios', label: 'Framework Scenarios', icon: GitBranch },
        { id: 'anti-hallucination-safeguards', label: 'Anti-Hallucination Safeguards', icon: Shield },
        { id: 'benefits-outcomes', label: 'Benefits & Outcomes', icon: Star },
      ]
    },
  ]

  return (
    <>
      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="mobile-sidebar fixed inset-y-0 left-0 z-[60] w-72 bg-background border-r border-border lg:hidden"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                FTDM Framework
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          onClose() // Close mobile sidebar first
                          const element = document.getElementById(item.id)
                          if (element) {
                            element.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            })
                          }
                        }}
                        className="nav-link flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Theme Toggle */}
          <div className="border-t border-border p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4 mr-3" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-3" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 xl:w-72 lg:flex-col lg:border-r lg:border-border lg:bg-background lg:overflow-hidden lg:shrink-0">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center px-6 border-b border-border shrink-0">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FTDM Framework
                </span>
                <div className="text-xs text-muted-foreground">Documentation</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          const element = document.getElementById(item.id)
                          if (element) {
                            element.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            })
                          }
                        }}
                        className="nav-link flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Theme Toggle */}
          <div className="border-t border-border p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4 mr-3" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-3" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
