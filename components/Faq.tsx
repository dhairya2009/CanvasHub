"use client";

import { motion } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I buy artwork from CanvasHub?",
      answer:
        "Browse artworks, add your favorite pieces to cart, and complete checkout securely through our simple order process.",
    },
    {
      question: "Can I request custom artwork from an artist?",
      answer:
        "Yes. Many artists accept custom requests where you can discuss style, size, colors, and pricing directly.",
    },
    {
      question: "How can I become an artist seller?",
      answer:
        "Go to the Become an Artist page, submit your profile, upload your artworks, and start selling after approval.",
    },
    {
      question: "Do you sell art materials and supplies?",
      answer:
        "Yes. CanvasHub also offers curated art supplies including brushes, sketchbooks, paints, pencils, and more.",
    },
    {
      question: "Is shipping available across India?",
      answer:
        "Yes. We provide shipping across India, and selected artworks may also be available for international delivery.",
    },
  ];

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start low and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to position when scrolled into view
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-black">
              FAQ's
            </h2>

            <p className="text-gray-500 mt-4 text-sm md:text-base">
              Everything you need to know about buying art, selling creations,
              and using CanvasHub.
            </p>
          </div>
        </motion.div>
        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Start low and invisible
              whileInView={{ opacity: 1, y: 0 }} // Animate to position when scrolled into view
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            >
              <details
                key={index}
                className="group bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 shadow-sm transition hover:shadow-md duration-500"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-black text-base md:text-lg">
                  {faq.question}

                  <span className="ml-4 text-blue-400 text-2xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                  {faq.answer}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
