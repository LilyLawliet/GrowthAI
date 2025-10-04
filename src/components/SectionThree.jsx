import { motion } from "framer-motion";

const plans = [
  { name: "Starter", price: "$49/mo", description: "For small teams ready to cut wasted ad spend.", features: ["Predictive analytics","Basic ROI dashboard","Email support"], cta: "Start Free" },
  { name: "Growth", price: "$149/mo", description: "Best for scaling brands seeking serious ROI gains.", features: ["Full ROI optimization suite","Advanced predictive spend","Priority support","Team collaboration tools"], cta: "Upgrade & Save", highlighted: true },
  { name: "Enterprise", price: "Custom", description: "Tailored solutions for agencies & enterprises.", features: ["Custom AI models","Dedicated success manager","Advanced API access","24/7 premium support"], cta: "Talk to Sales" },
];

export default function SectionThree() {
  return (
    <section id="pricing" className="relative min-h-screen flex items-center bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="text-5xl font-extrabold text-gray-900 text-center"
        >
          Pricing That Scales With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">
            Your ROI
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-center"
        >
          Invest in GrowthAI once — save ad spend forever. Every dollar you put in brings measurable returns back.
        </motion.p>

        {/* Pricing Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
              className={`flex flex-col justify-between p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all ${
                plan.highlighted ? "bg-gray-900 text-white border-2 border-gray-900 scale-105" : "bg-white text-gray-900 border border-gray-200"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-4xl font-extrabold">{plan.price}</p>
                <p className={`mt-3 text-base ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center ${plan.highlighted ? "text-gray-100" : "text-gray-700"}`}>
                      <span className="mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-10 block w-full text-center px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                  plan.highlighted ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
