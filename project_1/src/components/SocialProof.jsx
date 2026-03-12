import { ScrollReveal } from '../hooks/useScrollAnimation';

const logos = [
  { name: 'Pacific Fashion Week', initials: 'PFW' },
  { name: 'Island Lifestyle', initials: 'IL' },
  { name: 'Polynesian Arts Council', initials: 'PAC' },
  { name: 'Oceanic Heritage', initials: 'OH' },
  { name: 'Samoa Observer', initials: 'SO' },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 bg-cream-200/50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-semibold text-brown-800/40 uppercase tracking-widest mb-8">
              Trusted by culture-forward brands & media
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-brown-800/10 flex items-center justify-center group-hover:bg-terracotta-500/10 transition-colors duration-300">
                    <span className="text-xs font-bold text-brown-800/60 group-hover:text-terracotta-500 transition-colors duration-300">
                      {logo.initials}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-brown-800/60 hidden sm:inline group-hover:text-brown-800 transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-brown-800/40">
              <div className="flex items-center gap-1.5">
                <span className="text-xl">📦</span>
                <span>10,000+ Orders Shipped</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="text-xl">🌍</span>
                <span>30+ Countries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl">⭐</span>
                <span>4.9 Average Rating</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
