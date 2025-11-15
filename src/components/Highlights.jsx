import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { containerVariants, viewportOptionsLight } from '../utils/animations'

const Highlights = () => {
  // Custom item variants for slide in from left
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  const highlights = [
    {
      title: 'Redundant Avionics',
      description:
        'Triple-redundant flight control systems ensure continuous operation even in component failure scenarios.',
    },
    {
      title: 'AES-256 Encrypted Comms',
      description:
        'Military-grade encryption for all command, control, and telemetry data streams with secure key management.',
    },
    {
      title: 'Modular Payload Swap',
      description:
        'Rapid payload reconfiguration capability enabling mission flexibility without extensive downtime.',
    },
    {
      title: 'Long-Range Autonomy',
      description:
        'Extended operational range with autonomous navigation, obstacle avoidance, and mission adaptation.',
    },
    {
      title: 'Weather-Resistant Frame',
      description:
        'Robust airframe design tested and certified for operation in extreme weather conditions and harsh environments.',
    },
    {
      title: 'Real-Time Telemetry',
      description:
        'Comprehensive sensor data streaming with low-latency communication for immediate situational awareness.',
    },
  ]

  return (
    <section id="highlights" className="section-padding bg-[#111214]">
      <div className="container-custom">
        <SectionTitle
          title="Key Capabilities"
          accentWord="Capabilities"
          subtitle="Advanced features engineered for mission-critical reliability"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptionsLight}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 flex gap-4 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights

