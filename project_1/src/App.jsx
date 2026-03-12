import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import ShopSection from './components/ShopSection'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'
import CartDrawer from './components/CartDrawer'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleQuickView = (product) => setSelectedProduct(product)
  const handleCloseModal = () => setSelectedProduct(null)
  const handleCartOpen = () => setIsCartOpen(true)
  const handleCartClose = () => setIsCartOpen(false)

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar onCartOpen={handleCartOpen} />
        <main>
          <Hero />
          <FeaturedProducts onQuickView={handleQuickView} />
          <ShopSection onQuickView={handleQuickView} />
          <Features />
          <SocialProof />
          <Testimonials />
          <Newsletter />
          <FAQ />
        </main>
        <Footer />

        {/* Overlays */}
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
          onAddToCartSuccess={() => {
            handleCloseModal()
            handleCartOpen()
          }}
        />
        <CartDrawer isOpen={isCartOpen} onClose={handleCartClose} />
      </div>
    </CartProvider>
  )
}

export default App
