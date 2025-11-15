import { motion } from 'framer-motion'
import { containerVariants, slideUpVariants, slideRightVariants, scaleVariants } from '../utils/animations'

const Hero = () => {
  // Custom container variant with slightly longer stagger for hero
  const heroContainerVariants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  // SVG Drone Component with animated propellers
  const DroneSVG = () => (
    <motion.svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      className="w-full h-full max-w-md mx-auto"
      variants={scaleVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      {/* Main body */}
      <ellipse
        cx="200"
        cy="200"
        rx="80"
        ry="40"
        fill="none"
        stroke="#ff7b00"
        strokeWidth="3"
        opacity="0.8"
      />
      
      {/* Central hub */}
      <circle
        cx="200"
        cy="200"
        r="25"
        fill="none"
        stroke="#ff7b00"
        strokeWidth="2"
      />
      
      {/* Propeller arms */}
      <line
        x1="200"
        y1="200"
        x2="120"
        y2="160"
        stroke="#ff7b00"
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="200"
        y1="200"
        x2="280"
        y2="160"
        stroke="#ff7b00"
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="200"
        y1="200"
        x2="120"
        y2="240"
        stroke="#ff7b00"
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="200"
        y1="200"
        x2="280"
        y2="240"
        stroke="#ff7b00"
        strokeWidth="2"
        opacity="0.6"
      />
      
      {/* Propellers with rotation animation */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '120px 160px' }}
      >
        <circle
          cx="120"
          cy="160"
          r="20"
          fill="none"
          stroke="#ff7b00"
          strokeWidth="2"
          opacity="0.5"
        />
      </motion.g>
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '280px 160px' }}
      >
        <circle
          cx="280"
          cy="160"
          r="20"
          fill="none"
          stroke="#ff7b00"
          strokeWidth="2"
          opacity="0.5"
        />
      </motion.g>
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '120px 240px' }}
      >
        <circle
          cx="120"
          cy="240"
          r="20"
          fill="none"
          stroke="#ff7b00"
          strokeWidth="2"
          opacity="0.5"
        />
      </motion.g>
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '280px 240px' }}
      >
        <circle
          cx="280"
          cy="240"
          r="20"
          fill="none"
          stroke="#ff7b00"
          strokeWidth="2"
          opacity="0.5"
        />
      </motion.g>
      
      {/* Sensor/camera module */}
      <rect
        x="185"
        y="170"
        width="30"
        height="20"
        rx="2"
        fill="none"
        stroke="#ff7b00"
        strokeWidth="2"
        opacity="0.7"
      />
    </motion.svg>
  )

  return (
    <section className="section-padding min-h-screen flex items-center bg-gradient-to-b from-[#111214] via-[#0f1113] to-[#111214]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={slideUpVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                VyomGarud
              </span>
            </motion.h1>

            <motion.p
              variants={slideUpVariants}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed"
            >
              Advanced UAV systems engineered for{' '}
              <span className="text-accent font-semibold">military-grade</span>{' '}
              autonomy, endurance, and mission-critical reliability.
            </motion.p>

            <motion.div
              variants={slideUpVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact Sales
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Capabilities
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right SVG */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <DroneSVG />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

