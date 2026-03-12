import { useState, useEffect } from 'react';
import { useCartDispatch } from '../context/CartContext';

export default function ProductModal({ product, onClose, onAddToCartSuccess }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useCartDispatch();

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[Math.floor(product.sizes.length / 2)]);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD',
      product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    if (onAddToCartSuccess) {
      onAddToCartSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown-900/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-brown-800/60 hover:text-brown-800 hover:bg-cream-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto bg-cream-100 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                product.badge === 'Best Seller'
                  ? 'bg-terracotta-500 text-white'
                  : product.badge === 'New Drop'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gold-400 text-brown-800'
              }`}>
                {product.badge}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col">
            <p className="text-xs font-semibold text-terracotta-500 uppercase tracking-wider mb-1">
              {product.category}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brown-800 mb-2">
              {product.name}
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-brown-800">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-brown-800/40 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-brown-800/60 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mb-5">
              <label className="text-sm font-semibold text-brown-800 mb-2 block">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-terracotta-500 text-white border-terracotta-500'
                        : 'bg-white text-brown-800/60 border-cream-300 hover:border-terracotta-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color selector */}
            <div className="mb-5">
              <label className="text-sm font-semibold text-brown-800 mb-2 block">
                Color
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                      selectedColor === color
                        ? 'bg-terracotta-500 text-white border-terracotta-500'
                        : 'bg-white text-brown-800/60 border-cream-300 hover:border-terracotta-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-brown-800 mb-2 block">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-cream-300 flex items-center justify-center text-brown-800/60 hover:border-terracotta-300 hover:text-terracotta-500 transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center font-semibold text-brown-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-cream-300 flex items-center justify-center text-brown-800/60 hover:border-terracotta-300 hover:text-terracotta-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 rounded-full text-base font-semibold transition-all duration-300 bg-terracotta-500 text-white hover:bg-terracotta-600 hover:shadow-lg hover:shadow-terracotta-500/25"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Guarantees */}
            <div className="flex items-center gap-4 mt-5 pt-5 border-t border-cream-200 text-xs text-brown-800/40">
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 14.652" />
                </svg>
                30-Day Returns
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
