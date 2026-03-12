import { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'What makes Dr Drez clothing authentically Samoan?',
    answer: 'Every design is created in collaboration with Samoan artists and cultural advisors. Our patterns are inspired by traditional tapa cloth art, siapo designs, and Polynesian motifs. We don\'t just print generic "island" patterns — each piece tells a specific cultural story.',
  },
  {
    question: 'What sizes do you carry?',
    answer: 'We carry sizes XS through 4XL across all our collections. Our sizing is designed to be inclusive and true to Polynesian body types. Each product page has a detailed size chart with measurements. If you\'re between sizes, we recommend sizing up for a relaxed fit.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Domestic orders (US) ship within 2-3 business days and arrive in 5-7 days. International orders to NZ, Australia, and the Pacific Islands take 7-12 business days. All orders include free tracking, and shipping is free on orders over $75.',
  },
  {
    question: 'Can I return or exchange my order?',
    answer: 'Absolutely! We offer hassle-free returns within 30 days of delivery. Items must be unworn with tags attached. Exchanges for different sizes are free — just reach out to our team and we\'ll set it up. Custom orders are final sale.',
  },
  {
    question: 'Do you do custom designs for events or groups?',
    answer: 'Yes! We love doing custom orders for family reunions, church groups, sports teams, and cultural events. We can customize colors, add names, and create unique patterns for your group. Minimum order is 10 pieces. Contact us for a custom quote.',
  },
  {
    question: 'How do you give back to the Samoan community?',
    answer: 'We donate 5% of every sale to Pacific Islander youth education programs. We also sponsor cultural events and partner with local artisans in Samoa, providing fair wages and sustainable employment. When you buy from Dr Drez, you\'re investing in our community.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section-padding bg-cream-100">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold text-terracotta-500 uppercase tracking-wider mb-3">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brown-800/60 text-lg">
              Everything you need to know about Dr Drez. Can't find what you're looking for? Reach out to our team.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={Math.min((index + 1) * 100, 300)}>
              <div className="bg-white rounded-xl border border-cream-300 overflow-hidden transition-all duration-300 hover:border-terracotta-300/50">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="font-semibold text-brown-800 group-hover:text-terracotta-500 transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-terracotta-500 text-white rotate-180'
                        : 'bg-cream-200 text-brown-800/40'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-brown-800/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
