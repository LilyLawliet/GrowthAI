import { motion } from "framer-motion";
import { LineChart, Target, Zap } from "lucide-react";

const features = [
  {
    name: "Predictive Analytics",
    description:
      "Use AI to forecast campaign performance before spending a dollar. Make smarter moves, cut wasted budget.",
    icon: LineChart,
  },
  {
    name: "ROI Optimization",
    description:
      "GrowthAI continuously reallocates spend to high-performing channels, maximizing ROI effortlessly.",
    icon: Target,
  },
  {
    name: "Instant Insights",
    description:
      "Beautiful dashboards and clear reports — see what’s working in seconds, not weeks.",
    icon: Zap,
  },
];

export default function SectionTwo() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative min-h-screen flex items-center bg-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-5xl font-extrabold text-gray-900 text-center"
        >
          Features That Drive{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">
            Results
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-center"
        >
          GrowthAI gives your marketing team superpowers — precision targeting,
          predictive spend, and ROI insights that actually matter.
        </motion.p>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md"
            >
              <feature.icon className="w-12 h-12 text-gray-900 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
