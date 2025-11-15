import { motion } from 'framer-motion'
import { fadeInVariants, viewportOptions } from '../utils/animations'

/**
 * Reusable section title component with consistent styling and animations
 */
const SectionTitle = ({ title, subtitle, accentWord }) => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title.split(' ').map((word, index) => (
          <span key={index}>
            {word === accentWord ? (
              <span className="text-accent">{word}</span>
            ) : (
              word
            )}{' '}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionTitle

