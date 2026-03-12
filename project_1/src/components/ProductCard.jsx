import { useState } from 'react';
import { useCartDispatch } from '../context/CartContext';

export default function ProductCard({ product, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useCartDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch({
      type: 'ADD',
      product,
      size: product.sizes[Math.floor(product.sizes.length / 2)], // default middle size
      color: product.colors[0],
      quantity: 1,
    });

    // Brief visual feedback
    const btn = e.currentTarget;
    btn.textContent = '✓ Added!';
    btn.classList.add('!bg-teal-500');
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.classList.remove('!bg-teal-500');
    }, 1200);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product)}
    >
      {/* Image container */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-200 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
            product.badge === 'Best Seller'
              ? 'bg-terracotta-500 text-white'
              : product.badge === 'New Drop'
              ? 'bg-teal-500 text-white'
              : 'bg-gold-400 text-brown-800'
          }`}>
            {product.badge}
          </div>
        )}

        {/* Quick Add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-terracotta-500 text-white text-sm font-semibold rounded-xl hover:bg-terracotta-600 transition-colors duration-200 shadow-lg"
          >
            Add to Cart
          </button>
        </div>

        {/* Quick View overlay */}
        <div
          className={`absolute inset-0 bg-brown-900/10 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-brown-800 shadow-lg">
            Quick View
          </span>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1">
        <p className="text-xs font-medium text-terracotta-500 uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-semibold text-brown-800 group-hover:text-terracotta-500 transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-brown-800">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-brown-800/40 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 pt-1">
          {product.colors.map((color, i) => (
            <span
              key={i}
              className="text-xs text-brown-800/40"
            >
              {color}{i < product.colors.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
