import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from '../styles/HowItWorks.module.css'

const workflows = {
  'owner-followup': {
    title: 'Owner Follow-up',
    steps: [
      {
        number: '01',
        title: 'Guest Reviews Collected',
        description: 'Reviews are automatically gathered from all your listing platforms in real-time.',
      },
      {
        number: '02',
        title: 'AI Analysis',
        description: 'Our AI extracts sentiment, key topics, and actionable items from each review.',
      },
      {
        number: '03',
        title: 'Owner Updates Delivered',
        description: 'Customized reports are sent to property owners with relevant insights and recommendations.',
      },
    ],
  },
  'revenue-pricing': {
    title: 'Revenue Pricing',
    steps: [
      {
        number: '01',
        title: 'Market Data Ingestion',
        description: 'We analyze competitor pricing, local events, and historical demand patterns.',
      },
      {
        number: '02',
        title: 'Algorithm Optimization',
        description: 'Our pricing engine calculates optimal rates based on multiple market factors.',
      },
      {
        number: '03',
        title: 'Dynamic Price Updates',
        description: 'Prices are automatically adjusted across platforms to maximize your revenue.',
      },
    ],
  },
}

type WorkflowKey = keyof typeof workflows

export default function HowItWorks() {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowKey>('owner-followup')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const currentWorkflow = workflows[activeWorkflow]

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className="container">
        <motion.div
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>How It Works</h2>
          <div className="divider" />
          <p>
            Simple, streamlined processes that deliver powerful results for your
            rental business.
          </p>
        </motion.div>

        <motion.div
          className={styles.workflowTabs}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`${styles.tab} ${activeWorkflow === 'owner-followup' ? styles.active : ''}`}
            onClick={() => setActiveWorkflow('owner-followup')}
          >
            Owner Follow-up
          </button>
          <button
            className={`${styles.tab} ${activeWorkflow === 'revenue-pricing' ? styles.active : ''}`}
            onClick={() => setActiveWorkflow('revenue-pricing')}
          >
            Revenue Pricing
          </button>
        </motion.div>

        <div className={styles.stepsContainer}>
          <div className={styles.stepsLine} />
          {currentWorkflow.steps.map((step, index) => (
            <motion.div
              key={`${activeWorkflow}-${index}`}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.stepNumber}>
                <span>{step.number}</span>
              </div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
