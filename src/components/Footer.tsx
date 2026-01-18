import styles from '../styles/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoText}>STR</span>
            <span className={styles.logoAccent}>AI</span>
          </a>
          <p className={styles.tagline}>
            Intelligent solutions for short-term rentals
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h4>Products</h4>
            <a href="#products">Owner Follow-up</a>
            <a href="#products">Revenue Pricing</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <a href="#partnership">About Us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} STR AI. Powered by Pinecrest AI × Freedom & Fortune.
          </p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
