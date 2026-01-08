export default function HeroAnimation() {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-40">
            {/* Outer rotating ring */}
            <div className="absolute w-[600px] h-[600px] animate-spin-slow">
                <svg viewBox="0 0 600 600" className="w-full h-full">
                    <circle
                        cx="300"
                        cy="300"
                        r="280"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="2"
                        strokeDasharray="10 20"
                        opacity="0.6"
                    />
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Middle rotating ring - reverse direction */}
            <div className="absolute w-[500px] h-[500px] animate-spin-reverse">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                    <circle
                        cx="250"
                        cy="250"
                        r="230"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="3"
                        strokeDasharray="30 40"
                        opacity="0.7"
                    />
                    {/* Arc segments */}
                    <path
                        d="M 250 20 A 230 230 0 0 1 480 250"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="4"
                        opacity="0.4"
                    />
                    <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Inner rotating ring */}
            <div className="absolute w-[400px] h-[400px] animate-spin-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle
                        cx="200"
                        cy="200"
                        r="180"
                        fill="none"
                        stroke="url(#gradient3)"
                        strokeWidth="2"
                        strokeDasharray="15 25"
                        opacity="0.5"
                    />
                    {/* Glowing dots */}
                    <circle cx="200" cy="20" r="4" fill="#7DD3FC" opacity="0.8">
                        <animate
                            attributeName="opacity"
                            values="0.8;0.3;0.8"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="380" cy="200" r="3" fill="#38BDF8" opacity="0.6">
                        <animate
                            attributeName="opacity"
                            values="0.6;0.2;0.6"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <defs>
                        <linearGradient id="gradient3" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Central glow */}
            <div className="absolute w-[200px] h-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-[#7DD3FC]/20 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Geometric lines */}
            <div className="absolute w-[700px] h-[700px] animate-spin-very-slow opacity-20">
                <svg viewBox="0 0 700 700" className="w-full h-full">
                    <line x1="350" y1="50" x2="350" y2="150" stroke="#7DD3FC" strokeWidth="1" />
                    <line x1="350" y1="550" x2="350" y2="650" stroke="#7DD3FC" strokeWidth="1" />
                    <line x1="50" y1="350" x2="150" y2="350" stroke="#38BDF8" strokeWidth="1" />
                    <line x1="550" y1="350" x2="650" y2="350" stroke="#38BDF8" strokeWidth="1" />
                </svg>
            </div>

            {/* Particle dots scattered around */}
            <div className="absolute w-full h-full">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#38BDF8] rounded-full animate-pulse"
                        style={{
                            left: `${20 + (i * 5)}%`,
                            top: `${30 + (i * 3) % 40}%`,
                            animationDelay: `${i * 0.3}s`,
                            opacity: 0.3 + (i % 3) * 0.2,
                        }}
                    />
                ))}
            </div>

            <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-spin-very-slow {
          animation: spin-very-slow 30s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
