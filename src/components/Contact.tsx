import { motion, useInView } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'
import styles from '../styles/Contact.module.css'

interface FormData {
  name: string
  email: string
  company: string
  product: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.div
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get in Touch</h2>
          <div className="divider" />
          <p>
            Ready to transform your short-term rental business? Let's discuss
            how our AI solutions can work for you.
          </p>
        </motion.div>

        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {isSubmitted ? (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.successIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Thank You!</h3>
              <p>
                Your message has been received. We'll be in touch within 24 hours
                to discuss how we can help elevate your rental business.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={errors.name ? styles.inputError : ''}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? styles.inputError : ''}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="product">Which product interests you?</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="">Select a product</option>
                    <option value="owner-followup">Automated Owner Follow-up</option>
                    <option value="revenue-pricing">Smart Revenue Pricing</option>
                    <option value="both">Both Products</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your rental business and how we can help..."
                  rows={5}
                  className={errors.message ? styles.inputError : ''}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
