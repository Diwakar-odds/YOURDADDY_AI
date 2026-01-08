import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
  delay: number;
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate 50 snowflakes with random properties
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => {
      // Randomly choose between small (2-5px) or large (5-7px) snowflakes
      const isLarge = Math.random() > 0.5;
      const size = isLarge
        ? 5 + Math.random() * 2  // 5-7px
        : 2 + Math.random() * 3; // 2-5px

      return {
        id: i,
        left: Math.random() * 100, // Random horizontal position (0-100%)
        animationDuration: 8 + Math.random() * 15, // Random fall duration (8-23s)
        opacity: 0.3 + Math.random() * 0.4, // Random opacity (0.3-0.7)
        size: size,
        delay: Math.random() * 5, // Random start delay (0-5s)
      };
    });
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          25% {
            transform: translateY(25vh) translateX(10px);
          }
          50% {
            transform: translateY(50vh) translateX(-10px);
          }
          75% {
            transform: translateY(75vh) translateX(10px);
          }
          100% {
            transform: translateY(110vh) translateX(0);
          }
        }

        .snowflake {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
          border-radius: 50%;
          animation: snowfall linear infinite;
          will-change: transform;
        }

        /* Add subtle glow to some snowflakes */
        .snowflake:nth-child(3n) {
          box-shadow: 0 0 3px rgba(56, 189, 248, 0.3);
        }

        .snowflake:nth-child(5n) {
          box-shadow: 0 0 2px rgba(125, 211, 252, 0.2);
        }
      `}</style>
    </div>
  );
}
