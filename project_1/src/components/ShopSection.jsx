import { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import ProductCard from './ProductCard';
import { categories, getProductsByCategory } from '../data/products';

export default function ShopSection({ onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const products = getProductsByCategory(activeCategory);

  return (
    <section id="shop" className="section-padding bg-cream-100">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-sm font-semibold text-terracotta-500 uppercase tracking-wider mb-3">
              Full Catalog
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
              Shop the Collection
            </h2>
            <p className="text-brown-800/60 text-lg">
              Every piece tells a story. Find yours.
            </p>
          </div>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-terracotta-500 text-white shadow-lg shadow-terracotta-500/25'
                    : 'bg-white text-brown-800/60 border border-cream-300 hover:border-terracotta-300 hover:text-terracotta-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={Math.min((index % 5 + 1) * 100, 300)}>
              <ProductCard product={product} onQuickView={onQuickView} />
            </ScrollReveal>
          ))}
        </div>

        {/* Product count */}
        <div className="text-center mt-8">
          <p className="text-sm text-brown-800/40">
            Showing {products.length} product{products.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </section>
  );
}
