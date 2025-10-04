import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight"
        >
          Boost Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">
            Marketing ROI
          </span>{" "}
          with AI Precision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium"
        >
          GrowthAI helps marketing teams optimize campaigns, reduce ad waste, and
          drive up to <span className="font-bold text-gray-900">40% higher ROI</span>.
          Smarter decisions, proven results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#features"
            className="px-6 sm:px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold text-lg sm:text-xl shadow-md hover:shadow-lg hover:bg-gray-800 transition-all"
          >
            Start Free Trial →
          </a>
          <a
            href="#pricing"
            className="px-6 sm:px-8 py-4 rounded-2xl border-2 border-gray-900 text-gray-900 font-bold text-lg sm:text-xl hover:bg-gray-900 hover:text-white transition-all"
          >
            See ROI Calculator
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
