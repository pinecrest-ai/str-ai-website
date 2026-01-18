import { motion } from 'framer-motion'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const scrollToContact = () => {
    const contact = document.querySelector('#contact')
    if (contact) {
      const offset = 80
      const elementPosition = contact.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <motion.div
          className={styles.accentCircle1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={styles.accentCircle2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className={styles.gridLines} />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <motion.div
          className={styles.partnership}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Pinecrest AI</span>
          <span className={styles.partnershipDivider}>×</span>
          <span>Freedom & Fortune</span>
        </motion.div>

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Intelligent Solutions for
          <span className={styles.headlineAccent}> Short-Term Rentals</span>
        </motion.h1>

        <motion.p
          className={styles.subheadline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Elevate your property management with AI-powered owner communication
          and dynamic revenue optimization. Built for modern STR professionals.
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn btn-primary" onClick={scrollToContact}>
            Get Started
          </button>
          <a href="#products" className="btn btn-secondary">
            Explore Products
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}
