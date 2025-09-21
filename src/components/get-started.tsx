'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Rocket, ArrowRight } from 'lucide-react'

export function GetStarted() {
  return (
    <section id="get-started" className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-12"
        >
          <h2 className="text-6xl md:text-7xl font-bold gradient-text">Get Started Today</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Ready to revolutionize your development process? Start using FTDM Framework today and experience the future of software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Rocket className="mr-4 h-7 w-7" />
                Start Your Project
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
                className="text-xl px-12 py-8 h-auto glass-morphism border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Download Framework
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}