import { motion } from "framer-motion";

export default function SectionSix() {
  return (
    <section id="contact" className="relative bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.3 }}
          className="text-5xl font-extrabold text-gray-900"
        >
          Let’s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">
            Scale Together
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ amount: 0.3 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Have questions or want a personalized demo? Our team is ready to show
          you how GrowthAI can transform your ROI. Drop us a line and we’ll get
          back to you fast.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="mt-12 grid gap-6 md:grid-cols-2 bg-gray-50 rounded-2xl p-10 shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:outline-none text-gray-900"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:outline-none text-gray-900"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="md:col-span-2 px-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:outline-none text-gray-900"
          />
          <button
            type="submit"
            className="md:col-span-2 w-full px-6 py-4 rounded-xl bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 transition-all"
          >
            Send Message →
          </button>
        </motion.form>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="mt-10 text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} GrowthAI. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
}
