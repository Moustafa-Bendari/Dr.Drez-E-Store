import heroImg from '../assets/images/hero.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-cream-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-terracotta-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      {/* Decorative Polynesian-inspired pattern strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta-500 via-gold-400 to-teal-500" />

      <div className="container-max px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-in-up space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta-500/10 border border-terracotta-400/20">
              <span className="text-lg">🌺</span>
              <span className="text-sm font-medium text-terracotta-600">Authentic Samoan Culture, Worn with Pride</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brown-800 leading-tight text-balance">
              Wear Your Culture.{' '}
              <span className="text-terracotta-500">Own Your Story.</span>
            </h1>

            <p className="text-lg sm:text-xl text-brown-800/60 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Handcrafted Samoan-inspired clothing that celebrates Polynesian heritage
              through modern design. Every piece tells a story rooted in tradition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#newsletter" className="btn-primary text-base px-8 py-4">
                🎁 Unlock 30% Off Your First Order
              </a>
              <a href="#features" className="btn-secondary text-base px-8 py-4">
                Explore Collection
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-sm text-brown-800/50">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Handcrafted
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Ethically Made
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="animate-fade-in-right relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brown-900/20 ring-1 ring-cream-300">
              <img
                src={heroImg}
                alt="Dr Drez Samoan-inspired fashion collection"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white rounded-2xl shadow-xl p-4 animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-terracotta-500/10 flex items-center justify-center text-2xl">
                  🌴
                </div>
                <div>
                  <p className="text-sm font-bold text-brown-800">2,500+</p>
                  <p className="text-xs text-brown-800/50">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Floating rating */}
            <div className="absolute -top-2 -right-2 sm:top-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <div className="flex text-gold-400">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} className="text-lg">{s}</span>
                  ))}
                </div>
                <span className="text-sm font-bold text-brown-800">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V40Z" fill="#FFFCF7"/>
        </svg>
      </div>
    </section>
  );
}
