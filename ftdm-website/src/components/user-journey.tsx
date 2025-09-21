'use client'

import { motion } from 'framer-motion'

export function UserJourney() {
  return (
    <section id="user-journey" className="py-32 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <h2 className="text-6xl md:text-7xl font-bold gradient-text">Complete User Journey</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the power of FTDM Framework through our step-by-step user journey. From raw requirements to production-ready application in minutes.
          </p>
          <div className="mt-16 p-8 rounded-3xl glass-morphism">
            <p className="text-xl text-gray-300">User Journey content coming soon...</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}