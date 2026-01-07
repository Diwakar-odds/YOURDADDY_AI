import { Github, BookOpen, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] text-transparent bg-clip-text mb-4">
              YourDaddy AI
            </h3>
            <p className="text-gray-400 mb-4">
              The most advanced voice-activated AI personal assistant powered by 27 specialized AI systems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#7DD3FC] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-[#7DD3FC] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#7DD3FC] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#github"
                className="w-10 h-10 bg-[#374151] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#7DD3FC] hover:bg-[#4B5563] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#docs"
                className="w-10 h-10 bg-[#374151] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#7DD3FC] hover:bg-[#4B5563] transition-all"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 bg-[#374151] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#7DD3FC] hover:bg-[#4B5563] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 YourDaddy AI Assistant. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#38BDF8] fill-[#38BDF8]" />
            <span>for the future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
