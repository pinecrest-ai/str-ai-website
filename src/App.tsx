import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Partnership from './components/Partnership'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Products />
        <HowItWorks />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
