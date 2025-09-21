'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import FrameworkDownload from './framework-download'
import { ArrowRight, Zap, Shield, Users, Sparkles, Code, Rocket, Star, CheckCircle, Brain, Target, Download } from 'lucide-react'

export function Hero() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-8 py-4 rounded-full glass-morphism text-foreground text-sm font-medium neon-glow"
          >
            <Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
            Fast-Track Development Methodology
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <motion.span 
                className="gradient-text"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                FTDM
              </motion.span>
              <br />
              <motion.span 
                className="text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Framework
              </motion.span>
            </h1>
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Development Revolution
            </motion.p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Transform raw requirements into production-ready applications through our intelligent 7-stage development framework with domain intelligence and anti-hallucination safeguards.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 pulse-glow"
              >
                <Rocket className="mr-4 h-7 w-7" />
                Get Started Now
                <ArrowRight className="ml-4 h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setIsDownloadOpen(true)}
                className="text-xl px-12 py-8 h-auto glass-morphism border-2 border-border text-foreground hover:bg-accent backdrop-blur-sm transition-all duration-300"
              >
                <Download className="mr-4 h-7 w-7" />
                Download Framework
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: '7', label: 'Automated Stages', icon: Zap, color: 'from-blue-400 to-purple-400' },
              { number: '100%', label: 'Production Ready', icon: CheckCircle, color: 'from-green-400 to-blue-400' },
              { number: '10x', label: 'Faster Development', icon: Rocket, color: 'from-purple-400 to-pink-400' },
              { number: '100%', label: 'Hallucination-Proof', icon: Shield, color: 'from-yellow-400 to-orange-400' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center space-y-4 p-8 rounded-3xl glass-morphism border border-white/10 floating-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center items-center gap-8 mt-16 text-muted-foreground"
          >
            {[
              { icon: Shield, text: 'Enterprise Grade Security', color: 'text-green-400' },
              { icon: Users, text: 'Team Collaboration', color: 'text-blue-400' },
              { icon: Zap, text: 'Lightning Fast', color: 'text-yellow-400' },
              { icon: Brain, text: 'AI-Powered Intelligence', color: 'text-purple-400' },
              { icon: Target, text: 'Domain-Specific Patterns', color: 'text-pink-400' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl glass-morphism"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
                <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Framework Download Modal */}
      <FrameworkDownload 
        isOpen={isDownloadOpen} 
        onClose={() => setIsDownloadOpen(false)} 
      />
    </section>
  )
}