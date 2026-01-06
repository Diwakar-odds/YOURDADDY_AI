import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0D0D0D] to-[#121212] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF0040]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4D6A]/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Download YourDaddy AI Assistant and experience the future of voice-controlled computing
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FF0040] to-[#FF4D6A] text-white font-bold text-lg rounded-xl overflow-hidden shadow-lg shadow-[#FF0040]/50 mb-8"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download className="w-6 h-6" />
              Download Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D6A] to-[#FF0040] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#FF4D6A]" />
              <span>Windows 10+</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#FF4D6A]" />
              <span>Python 3.8+</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#FF4D6A]" />
              <span>Free Forever</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {[
            { title: '5 Minutes', desc: 'Quick setup process' },
            { title: 'No Credit Card', desc: 'Completely free to use' },
            { title: '24/7 Support', desc: 'Community & docs' }
          ].map((item, index) => (
            <div key={index} className="bg-[#121212]/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FF0040] to-[#FF4D6A] text-transparent bg-clip-text mb-2">
                {item.title}
              </div>
              <div className="text-gray-400">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
