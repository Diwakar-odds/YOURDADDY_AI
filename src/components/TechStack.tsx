import { motion } from 'framer-motion';

const technologies = [
  { name: 'Google Gemini 2.0', gradient: 'from-[#FF0040] to-[#FF4D6A]' },
  { name: 'OpenAI GPT-4', gradient: 'from-[#FF4D6A] to-[#FFA07A]' },
  { name: 'Whisper AI', gradient: 'from-[#FF0040] to-[#FF4D6A]' },
  { name: 'Python', gradient: 'from-[#FFA07A] to-[#FF4D6A]' },
  { name: 'React + TypeScript', gradient: 'from-[#FF4D6A] to-[#FF0040]' },
  { name: 'WebSocket', gradient: 'from-[#FF0040] to-[#FF4D6A]' }
];

export default function TechStack() {
  return (
    <section className="relative py-16 bg-[#121212]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powered by Cutting-Edge Technology
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.gradient} rounded-full opacity-75 group-hover:opacity-100 blur transition-opacity`} />
              <div className="relative px-6 py-3 bg-[#0D0D0D] rounded-full border border-gray-800 group-hover:border-transparent transition-all">
                <span className={`font-semibold bg-gradient-to-r ${tech.gradient} text-transparent bg-clip-text`}>
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
