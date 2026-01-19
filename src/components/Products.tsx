import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '../styles/Products.module.css'

const products = [
  {
    id: 'owner-followup',
    name: 'Proactive Maintenance Alerts',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 18L24 28L42 18" stroke="currentColor" strokeWidth="2"/>
        <circle cx="38" cy="14" r="6" fill="currentColor"/>
        <path d="M38 11V14.5M38 17H38.01" stroke="var(--black-rich)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tagline: 'Nothing slips through the cracks',
    benefits: [
      'Weekly review analysis surfaces issues cleaners and VAs miss',
      'Catches small problems before they become bad reviews or lost revenue',
      'Monthly automated owner reports with actionable improvement suggestions',
      'Positions you as proactive and data-driven—building trust without extra work',
    ],
    visual: 'review-analysis',
  },
  {
    id: 'revenue-pricing',
    name: 'Smart Revenue Pricing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36L18 26L26 32L40 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 14H40V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="6" y="6" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    tagline: 'Operate like the top 1% of PriceLabs users',
    benefits: [
      'Advanced PriceLabs API automation—no dashboard babysitting required',
      'Prices adjust automatically based on real-time market signals',
      'React to demand faster than managers who check in once a week',
      'Capture more upside and outperform "set and forget" competition',
    ],
    visual: 'pricing-chart',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={styles.productCard}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className={styles.productHeader}>
        <div className={styles.productIcon}>{product.icon}</div>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productTagline}>{product.tagline}</p>
      </div>

      <div className={styles.productVisual}>
        {product.visual === 'review-analysis' && <ReviewAnalysisVisual />}
        {product.visual === 'pricing-chart' && <PricingChartVisual />}
      </div>

      <ul className={styles.benefitsList}>
        {product.benefits.map((benefit, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          >
            <span className={styles.benefitCheck}>
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {benefit}
          </motion.li>
        ))}
      </ul>

      <a href="#contact" className={styles.learnMore}>
        Learn More
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </motion.div>
  )
}

function ReviewAnalysisVisual() {
  return (
    <div className={styles.reviewVisual}>
      <div className={styles.insightCard}>
        <div className={styles.insightHeader}>
          <span className={styles.aiTagAlert}>Weekly Insight</span>
        </div>
        <p>3 guests mentioned slow WiFi—issue your cleaner missed</p>
      </div>
      <div className={styles.insightCardPositive}>
        <div className={styles.insightHeader}>
          <span className={styles.aiTagPositive}>Monthly Report</span>
        </div>
        <p>Hot tub praise in 8/10 reviews—highlight for owner</p>
      </div>
    </div>
  )
}

function PricingChartVisual() {
  const bars = [60, 75, 85, 70, 90, 95, 80]

  return (
    <div className={styles.chartVisual}>
      <div className={styles.chartBars}>
        {bars.map((height, i) => (
          <motion.div
            key={i}
            className={styles.chartBar}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
      <div className={styles.chartLabel}>
        <span className={styles.chartUp}>+23%</span>
        <span>vs. set-and-forget</span>
      </div>
    </div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className={styles.products}>
      <div className="container">
        <motion.div
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Products</h2>
          <div className="divider" />
          <p>
            Two powerful AI solutions designed to transform how you manage
            short-term rental properties.
          </p>
        </motion.div>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
