import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Header.module.css'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Partnership', href: '#partnership' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        <a href="#" className={styles.logo}>
          <svg className={styles.logoIcon} viewBox="0 0 60 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Nested diamonds - offset vertically */}
            <rect x="30" y="3" width="32" height="32" transform="rotate(45 30 3)" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <rect x="30" y="7" width="32" height="32" transform="rotate(45 30 7)" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <rect x="30" y="11" width="32" height="32" transform="rotate(45 30 11)" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            {/* Pine tree */}
            <path d="M30 18L36 27H33L38 35H22L27 27H24L30 18Z" fill="currentColor"/>
            {/* Tree trunk */}
            <rect x="28" y="35" width="4" height="5" fill="currentColor"/>
          </svg>
          <span className={styles.logoText}>Top</span>
          <span className={styles.logoAccent}>Host</span>
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={styles.mobileNavLink}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
