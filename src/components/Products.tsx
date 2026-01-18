import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '../styles/Products.module.css'

const products = [
  {
    id: 'owner-followup',
    name: 'Automated Owner Follow-up',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 18L24 28L42 18" stroke="currentColor" strokeWidth="2"/>
        <circle cx="38" cy="14" r="6" fill="currentColor"/>
        <path d="M36 14L37.5 15.5L40 13" stroke="var(--black-rich)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tagline: 'Turn guest feedback into actionable insights',
    benefits: [
      'Automatically analyzes guest reviews as they come in',
      'Extracts key insights and action items for property owners',
      'Delivers timely updates to management companies',
      'Saves hours of manual review processing weekly',
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
    tagline: 'Maximize revenue with intelligent pricing',
    benefits: [
      'Ingests local market data and competitor pricing',
      'AI algorithm optimizes listing prices in real-time',
      'Accounts for seasonality, demand, and events',
      'Proven to increase revenue by 15-25%',
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
      <div className={styles.reviewCard}>
        <div className={styles.reviewStars}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1L10.2 5.5L15 6.2L11.5 9.6L12.4 14.4L8 12L3.6 14.4L4.5 9.6L1 6.2L5.8 5.5L8 1Z"/>
            </svg>
          ))}
        </div>
        <p className={styles.reviewText}>"Amazing stay! The hot tub was perfect..."</p>
      </div>
      <div className={styles.insightCard}>
        <div className={styles.insightHeader}>
          <span className={styles.aiTag}>AI Insight</span>
        </div>
        <p>Hot tub mentioned positively - maintain as key amenity</p>
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
        <span>Revenue Increase</span>
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
