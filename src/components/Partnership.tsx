import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '../styles/Partnership.module.css'

export default function Partnership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="partnership" className={styles.partnership}>
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.partnershipInner}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.partnershipContent}>
            <motion.span
              className={styles.poweredBy}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Powered by
            </motion.span>

            <motion.div
              className={styles.brandNames}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className={styles.brand}>Pinecrest AI</span>
              <span className={styles.brandDivider}>×</span>
              <span className={styles.brand}>Freedom & Fortune</span>
            </motion.div>

            <motion.div
              className="divider"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            />

            <motion.p
              className={styles.credibilityStatement}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              A strategic collaboration bringing together cutting-edge artificial
              intelligence with deep expertise in short-term rental management.
              We're committed to empowering property managers and owners with
              tools that drive measurable results.
            </motion.p>

            <motion.div
              className={styles.stats}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Properties Managed</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>23%</span>
                <span className={styles.statLabel}>Avg Revenue Increase</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>10hrs</span>
                <span className={styles.statLabel}>Saved Weekly</span>
              </div>
            </motion.div>
          </div>

          <div className={styles.decorativeElements}>
            <motion.div
              className={styles.decorCircle}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
