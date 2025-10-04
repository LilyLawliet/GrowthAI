import { motion } from "framer-motion";

const posts = [
  {
    title: "5 Proven AI Tactics to Boost Your Marketing ROI",
    excerpt:
      "Discover how top brands are leveraging AI to cut wasted spend and unlock 3x higher conversions.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why GrowthAI Outperforms Traditional Analytics",
    excerpt:
      "Old dashboards don’t cut it anymore. Learn how AI insights transform your decision-making speed and accuracy.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Future of AI in Scaling Businesses",
    excerpt:
      "AI isn’t just hype — it’s a competitive edge. Here’s how companies are using AI to dominate their markets.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SectionFive() {
  return (
    <section id="blog" className="relative bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.3 }}
          className="text-5xl font-extrabold text-gray-900"
        >
          Insights &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">
            Growth Strategies
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
          Stay ahead of the curve with the latest trends, strategies, and
          insights on how AI is transforming growth.
        </motion.p>

        {/* Blog Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ amount: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 flex-grow">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-6 inline-block text-gray-900 font-semibold hover:text-gray-600 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
