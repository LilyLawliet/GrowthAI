import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navItems = ["Home", "Features", "Pricing", "About", "Blog", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          Growth<span className="text-gray-500">AI</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="cursor-pointer hover:text-gray-900 transition-colors"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-gray-100 transition">
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-gray-900 transition-colors">
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
