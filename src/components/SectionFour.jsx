import { motion } from "framer-motion";
import { SiGoogle, SiShopify, SiHubspot, SiSlack, SiAdobe } from "react-icons/si";
import Logo from "../assets/logo.png";

export default function SectionFour() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="rounded-2xl overflow-hidden flex items-center justify-center"
        >
          <img src={Logo} alt="GrowthAI Logo" className="w-64 h-auto" />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">
              GrowthAI
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl"
          >
            We built GrowthAI with one mission:{" "}
            <span className="font-semibold text-gray-900">turn marketing spend into measurable growth</span>. Our team came together to make advanced AI simple, powerful, and accessible for every business.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl"
          >
            Today, hundreds of brands trust GrowthAI to <span className="font-semibold text-gray-900">boost ROI, cut waste, and scale smarter</span>. We believe in transparency, speed, and tech that actually works.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="mt-8"
          >
            <a href="#contact" className="inline-block px-8 py-4 rounded-xl bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 transition-all">
              Join the Growth Story →
            </a>
          </motion.div>

          {/* Logos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="mt-12 flex flex-wrap gap-8 items-center text-gray-500"
          >
            {[SiGoogle, SiShopify, SiHubspot, SiSlack, SiAdobe].map((Logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center text-4xl hover:text-gray-700 transition-colors"
              >
                <Logo />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

