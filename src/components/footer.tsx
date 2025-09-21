'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t glass-morphism border-white/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">FTDM Framework</span>
            </div>
            <p className="text-gray-300 text-lg">
              Transform raw requirements into production-ready applications through our intelligent 7-stage development framework.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#framework-flow" className="hover:text-white transition-colors">Framework Flow</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#user-journey" className="hover:text-white transition-colors">User Journey</a></li>
              <li><a href="#scenarios" className="hover:text-white transition-colors">Scenarios</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#documentation" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#anti-hallucination" className="hover:text-white transition-colors">Anti-Hallucination</a></li>
              <li><a href="#get-started" className="hover:text-white transition-colors">Get Started</a></li>
              <li><a href="#examples" className="hover:text-white transition-colors">Examples</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center">
                <span className="text-sm">💼</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center">
                <span className="text-sm">📧</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-gray-300">
          <p>© 2024 FTDM Framework. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}