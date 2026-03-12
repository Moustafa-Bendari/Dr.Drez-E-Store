import { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="newsletter" className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-terracotta-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-terracotta-500/10 mb-6">
              <span className="text-3xl">🌺</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
              Join the Dr Drez Family
            </h2>
            <p className="text-brown-800/60 text-lg mb-8">
              Be the first to know about new drops, exclusive deals, and stories from the islands.
              Sign up now and get <span className="font-semibold text-terracotta-500">30% off</span> your first order.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white border border-cream-300 text-brown-800 placeholder:text-brown-800/30 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                {submitted ? '✓ You\'re In!' : 'Unlock 30% Off'}
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-teal-500 font-medium animate-fade-in">
                🎉 Welcome to the family! Check your inbox for your discount code.
              </p>
            )}

            <p className="mt-4 text-xs text-brown-800/30">
              No spam, ever. Unsubscribe anytime. We respect your inbox like we respect our elders.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
