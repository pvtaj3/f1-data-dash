'use client'

import { motion } from 'framer-motion'
import DriverCard from '@/components/DriverCard'
import ComparisonChart from '@/components/ComparisonChart'
import PerformanceChart from '@/components/PerformanceChart'
import SectorAnalysis from '@/components/SectorAnalysis'
import StatsGrid from '@/components/StatsGrid'
import { bearmanData, oconData } from '@/data/driverData'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-f1-dark via-f1-gray to-f1-dark">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-f1-dark/80 backdrop-blur-sm border-b border-f1-red/30 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            <span className="text-gradient">F1 DATA DASHBOARD</span>
          </h1>
          <p className="text-center text-gray-400 mt-2 text-sm md:text-base">
            Bearman vs Ocon - 2025 Season Analysis
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-8 space-y-8"
      >
        {/* Driver Cards */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DriverCard driver={bearmanData} />
          <DriverCard driver={oconData} />
        </motion.section>

        {/* Stats Grid */}
        <motion.section variants={itemVariants}>
          <StatsGrid bearman={bearmanData} ocon={oconData} />
        </motion.section>

        {/* Performance Charts */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card-gradient rounded-xl p-6 border border-f1-red/20 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-f1-red">Lap Time Comparison</h2>
            <ComparisonChart bearman={bearmanData} ocon={oconData} />
          </div>
          <div className="card-gradient rounded-xl p-6 border border-f1-red/20 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-f1-red">Race Performance</h2>
            <PerformanceChart bearman={bearmanData} ocon={oconData} />
          </div>
        </motion.section>

        {/* Sector Analysis */}
        <motion.section variants={itemVariants}>
          <div className="card-gradient rounded-xl p-6 border border-f1-red/20 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-f1-red">Sector Analysis</h2>
            <SectorAnalysis bearman={bearmanData} ocon={oconData} />
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="text-center py-8 text-gray-400 text-sm">
          <p>© 2026 F1 Data Dashboard | Built with Next.js & ❤️ for F1 fans</p>
          <p className="mt-2">Data visualization by Aaron Tindall</p>
        </motion.footer>
      </motion.div>
    </main>
  )
}
