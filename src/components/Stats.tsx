import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 27, suffix: '+', label: 'AI Learning Systems', color: 'from-[#38BDF8] to-[#7DD3FC]' },
  { value: 500, suffix: '+', label: 'Apps Controllable', color: 'from-[#7DD3FC] to-white' },
  { value: 10, suffix: '+', label: 'Languages', color: 'from-[#38BDF8] to-[#7DD3FC]' },
  { value: 100, suffix: '%', label: 'Offline Capable', color: 'from-white to-[#7DD3FC]' }
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
    <section className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wLTEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02IiBzdHJva2U9IiMzOEJERjgiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIuMDgiLz48L2c+PC9zdmc+')] opacity-20" />

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
              <div className="absolute -inset-1 bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-[#374151]/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 text-center hover:border-[#38BDF8]/50 transition-all">
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
          <div className="inline-block bg-gradient-to-r from-[#38BDF8]/10 to-[#7DD3FC]/10 border border-[#38BDF8]/20 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-gray-300 text-lg max-w-3xl">
              Join thousands of users who are already experiencing the future of AI assistance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
