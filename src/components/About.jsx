import { motion } from 'framer-motion'
import { containerVariants, itemVariants, viewportOptions } from '../utils/animations'

const About = () => {

  return (
    <section className="section-padding bg-[#111214]">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Engineering Excellence for{' '}
            <span className="text-accent">Mission-Critical Operations</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 leading-relaxed"
          >
            VyomGarud represents the pinnacle of autonomous UAV technology,
            designed from the ground up for defense and security applications.
            Our systems combine cutting-edge avionics, redundant safety
            architectures, and advanced autonomy stacks to deliver unmatched
            reliability in the most demanding operational environments.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-6 pt-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Autonomy Stack
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Proprietary flight control algorithms enable fully autonomous
                mission execution with real-time obstacle avoidance, dynamic
                path planning, and adaptive behavior in complex scenarios.
                Built-in fail-safe mechanisms ensure safe operation even in
                degraded conditions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                UAV Engineering
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Every airframe is engineered for optimal performance,
                durability, and stealth characteristics. Advanced composite
                materials and precision manufacturing ensure structural
                integrity while maintaining operational flexibility across
                diverse mission profiles.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Mission Endurance
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Extended flight times and operational range enable sustained
                surveillance, reconnaissance, and tactical support missions.
                Intelligent power management systems maximize efficiency
                without compromising payload capacity or mission capabilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Reliability
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Redundant systems, comprehensive diagnostics, and rigorous
                testing protocols ensure mission success when it matters most.
                Our platforms are designed to operate reliably in extreme
                weather conditions, electromagnetic interference, and hostile
                environments.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

