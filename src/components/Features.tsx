import { motion } from 'framer-motion';
import { Brain, Mic, Globe, Eye, Repeat, Music, Lightbulb, Lock } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Real-Time AI',
    description: 'Powered by Google Gemini 2.0 and OpenAI GPT-4 for intelligent responses',
    color: 'from-[#FF0040] to-[#FF4D6A]'
  },
  {
    icon: Mic,
    title: 'Voice Control',
    description: 'Wake word "Hey Daddy" detection with natural language processing',
    color: 'from-[#FF4D6A] to-[#FFA07A]'
  },
  {
    icon: Globe,
    title: 'Multilingual',
    description: 'Support for 10+ languages including English, Hindi, Spanish, and more',
    color: 'from-[#FF0040] to-[#FF4D6A]'
  },
  {
    icon: Eye,
    title: 'Vision AI',
    description: 'Advanced image analysis and OCR capabilities for visual understanding',
    color: 'from-[#FF4D6A] to-[#FF0040]'
  },
  {
    icon: Repeat,
    title: 'Smart Automation',
    description: 'Control over 500+ Windows applications with voice commands',
    color: 'from-[#FF0040] to-[#FF4D6A]'
  },
  {
    icon: Music,
    title: 'Media Integration',
    description: 'Seamless Spotify and YouTube Music integration for entertainment',
    color: 'from-[#FF4D6A] to-[#FFA07A]'
  },
  {
    icon: Lightbulb,
    title: 'Adaptive Learning',
    description: '27 AI systems continuously learning from your interactions',
    color: 'from-[#FFA07A] to-[#FF4D6A]'
  },
  {
    icon: Lock,
    title: 'Privacy-First',
    description: 'Offline mode with encrypted storage for maximum data security',
    color: 'from-[#FF0040] to-[#FF4D6A]'
  }
];

export default function Features() {
  return (
    <section className="relative py-24 bg-[#0D0D0D]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-[#0D0D0D]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need in an AI assistant, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF0040] to-[#FF4D6A] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
              <div className="relative h-full bg-[#121212]/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 hover:border-[#FF0040]/50 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
