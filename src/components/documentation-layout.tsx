'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { Sidebar } from '@/components/sidebar'
import { 
  Menu, 
  X, 
  ChevronRight,
  BookOpen,
  Zap,
  Shield,
  Users,
  Code,
  Database,
  Palette,
  Settings,
  Play,
  Cloud
} from 'lucide-react'

interface DocumentationLayoutProps {
  children: React.ReactNode
}

export function DocumentationLayout({ children }: DocumentationLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="h-screen bg-background flex overflow-hidden">
        <div className="flex flex-1">
          {/* Sidebar Overlay */}
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />

          {/* Main Content */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed top-4 left-4 z-40">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setSidebarOpen(true)}
                className="h-10 w-10 bg-background/80 backdrop-blur-sm border-border/50"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            
            <main className="flex-1 overflow-y-auto">
              <div className="w-full px-4 py-8">
                <div className="max-w-6xl mx-auto">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
