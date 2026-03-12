import { ScrollReveal } from '../hooks/useScrollAnimation';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

export default function FeaturedProducts({ onQuickView }) {
  const featured = getFeaturedProducts();

  return (
    <section id="featured" className="section-padding bg-cream-50">
      <div className="container-max">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-sm font-semibold text-terracotta-500 uppercase tracking-wider mb-3">
                Curated Picks
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800">
                Featured Collection
              </h2>
            </div>
            <a
              href="#shop"
              className="text-sm font-semibold text-terracotta-500 hover:text-terracotta-600 transition-colors flex items-center gap-1 group"
            >
              View All Products
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featured.map((product, index) => (
            <ScrollReveal key={product.id} delay={(index + 1) * 100}>
              <ProductCard product={product} onQuickView={onQuickView} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
