'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  Sun, 
  Moon,
  Zap,
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
  Rocket
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useIsMounted } from '@/hooks/use-is-mounted'

interface TopNavigationProps {
  onMenuClick: () => void
}

export function TopNavigation({ onMenuClick }: TopNavigationProps) {
  const { theme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                FTDM Framework
              </span>
              <div className="text-xs text-muted-foreground">Documentation</div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#introduction" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Introduction
          </a>
          <a href="#quick-start" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Quick Start
          </a>
          <a href="#stages" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Stages
          </a>
          <a href="#scenarios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Scenarios
          </a>
          <a href="#safeguards" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Safeguards
          </a>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          {isMounted && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9 p-0"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
