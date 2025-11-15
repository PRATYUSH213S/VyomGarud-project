import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { containerVariants, itemVariants, viewportOptionsLight } from '../utils/animations'

const Products = () => {
  // Custom card variants with slight lift on hover
  const cardVariants = {
    ...itemVariants,
    hidden: { ...itemVariants.hidden, y: 30 },
  }

  const products = [
    {
      title: 'Endurance UAV',
      description:
        'Long-range autonomous platform with extended flight duration and advanced navigation systems for sustained operations.',
      icon: (
        <svg
          className="w-12 h-12 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
    {
      title: 'Payload Suite',
      description:
        'Modular sensor and equipment integration system supporting multiple mission configurations with rapid swap capability.',
      icon: (
        <svg
          className="w-12 h-12 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Autonomy Stack',
      description:
        'Advanced AI-driven flight control and mission planning software with real-time decision-making and obstacle avoidance.',
      icon: (
        <svg
          className="w-12 h-12 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: 'Ground Control System',
      description:
        'Comprehensive command and control interface with encrypted communications, real-time telemetry, and mission monitoring.',
      icon: (
        <svg
          className="w-12 h-12 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-[#111214] to-[#0f1113]">
      <div className="container-custom">
        <SectionTitle
          title="Product Portfolio"
          accentWord="Portfolio"
          subtitle="Comprehensive UAV solutions engineered for defense and security applications"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptionsLight}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 space-y-4 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex justify-center">{product.icon}</div>
              <h3 className="text-xl font-semibold text-white text-center">
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {product.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Products

