import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 27, suffix: '+', label: 'AI Learning Systems', color: 'from-[#FF0040] to-[#FF4D6A]' },
  { value: 500, suffix: '+', label: 'Apps Controllable', color: 'from-[#FF4D6A] to-[#FFA07A]' },
  { value: 10, suffix: '+', label: 'Languages', color: 'from-[#FF0040] to-[#FF4D6A]' },
  { value: 100, suffix: '%', label: 'Offline Capable', color: 'from-[#FFA07A] to-[#FF4D6A]' }
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#121212] to-[#0D0D0D]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wLTEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02IiBzdHJva2U9IiNGRjAwNDAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIuMDgiLz48L2c+PC9zdmc+')] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            By the Numbers
          </h2>
          <p className="text-xl text-gray-400">
            Powerful capabilities that set us apart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0040] to-[#FF4D6A] rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-[#121212]/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 text-center hover:border-[#FF0040]/50 transition-all">
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#FF0040]/10 to-[#FF4D6A]/10 border border-[#FF0040]/20 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-gray-300 text-lg max-w-3xl">
              Join thousands of users who are already experiencing the future of AI assistance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
