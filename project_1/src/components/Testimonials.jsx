import { ScrollReveal } from '../hooks/useScrollAnimation';
import testimonialsImg from '../assets/images/testimonials.png';

const testimonials = [
  {
    name: 'Sione Taulanga',
    title: 'Auckland, New Zealand',
    quote: 'Every time I wear my Dr Drez shirt, someone stops me to ask where I got it. It\'s more than a shirt — it\'s a conversation starter about our culture. My whole family orders from them now.',
    rating: 5,
  },
  {
    name: 'Leilani Mose',
    title: 'Los Angeles, California',
    quote: 'I\'ve bought Polynesian-inspired clothing from so many brands, and Dr Drez is the only one that actually gets it right. The quality, the patterns, the fit — it all feels authentic and premium.',
    rating: 5,
  },
  {
    name: 'Tina Fa\'aumu',
    title: 'Sydney, Australia',
    quote: 'I wore my Dr Drez dress to a family reunion and the elders loved it. The tapa-inspired design was so respectful and beautiful. Shipping to Australia was fast too — arrived in under a week!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-cream-50">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold text-terracotta-500 uppercase tracking-wider mb-3">
              Real Stories
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
              Loved by Our Community
            </h2>
            <p className="text-brown-800/60 text-lg">
              Don't just take our word for it — hear from customers who wear their heritage proudly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={(index + 1) * 100}>
              <div className="group bg-white rounded-2xl p-7 border border-cream-300 hover:border-terracotta-300 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/5 h-full flex flex-col">
                {/* Stars */}
                <div className="flex text-gold-400 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-brown-800/70 leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-cream-300">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-terracotta-400 to-gold-400 flex items-center justify-center text-white font-bold text-sm overflow-hidden">
                    <img
                      src={testimonialsImg}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: index === 0 ? '15% center' : index === 1 ? '50% center' : '85% center'
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brown-800 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-brown-800/50">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
