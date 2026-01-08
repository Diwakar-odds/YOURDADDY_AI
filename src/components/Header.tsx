import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, X } from 'lucide-react';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send this data to your backend/database
        console.log('Waitlist submission:', { name, email });
        setIsSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsSubmitted(false);
            setName('');
            setEmail('');
        }, 2000);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo/Brand */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#7DD3FC] flex items-center justify-center">
                                <span className="text-white font-bold text-xl">YD</span>
                            </div>
                            <span className="text-white font-bold text-xl hidden sm:block">YourDaddy AI</span>
                        </motion.div>

                        {/* Join Waitlist Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="group relative px-6 py-3 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-black/50 border border-white/10"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Join Waitlist
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2d2d2d] via-[#404040] to-[#2d2d2d] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Waitlist Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="relative z-10 w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Decorative Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 to-[#7DD3FC]/10 opacity-50" />

                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        <div className="relative p-8">
                            {!isSubmitted ? (
                                <>
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#7DD3FC] flex items-center justify-center">
                                            <Mail className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2">
                                            Join the Waitlist
                                        </h2>
                                        <p className="text-gray-400">
                                            Be the first to experience YourDaddy AI when it launches!
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#38BDF8]/50 transition-all"
                                        >
                                            Join Now
                                        </button>
                                    </form>

                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        We respect your privacy. Your information will never be shared.
                                    </p>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: 'spring' }}
                                        >
                                            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                                    <p className="text-gray-400">We'll notify you when we launch.</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}
