import { useState, useEffect } from 'react';
import { useCartCount } from '../context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const cartCount = useCartCount();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '#shop' },
    { label: 'Our Story', href: '#social-proof' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-lg shadow-brown-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-terracotta-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-display font-bold text-lg">D</span>
          </div>
          <span className="font-display text-xl font-bold text-brown-800">
            Dr Drez
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brown-800/70 hover:text-terracotta-500 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-terracotta-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          {/* Cart icon */}
          <button
            onClick={onCartOpen}
            className="relative p-2 text-brown-800/70 hover:text-terracotta-500 transition-colors duration-200"
            aria-label="Open cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-terracotta-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>

          <a href="#newsletter" className="btn-primary text-sm !px-5 !py-2.5">
            Unlock 30% Off
          </a>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onCartOpen}
            className="relative p-2 text-brown-800/70 hover:text-terracotta-500 transition-colors"
            aria-label="Open cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-terracotta-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-brown-800 transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-brown-800 transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-brown-800 transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream-50/98 backdrop-blur-md border-t border-cream-300 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block text-sm font-medium text-brown-800/70 hover:text-terracotta-500 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={() => setIsMobileOpen(false)}
            className="btn-primary text-sm w-full text-center mt-2"
          >
            Unlock 30% Off Your First Order
          </a>
        </div>
      </div>
    </nav>
  );
}
