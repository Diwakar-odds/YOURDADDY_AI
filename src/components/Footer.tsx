import { Github, BookOpen, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF0040] to-[#FF4D6A] text-transparent bg-clip-text mb-4">
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
                <a href="#features" className="text-gray-400 hover:text-[#FF4D6A] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-[#FF4D6A] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#FF4D6A] transition-colors">
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
                className="w-10 h-10 bg-[#121212] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#FF4D6A] hover:bg-[#1A1A1A] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#docs"
                className="w-10 h-10 bg-[#121212] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#FF4D6A] hover:bg-[#1A1A1A] transition-all"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 bg-[#121212] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#FF4D6A] hover:bg-[#1A1A1A] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 YourDaddy AI Assistant. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#FF0040] fill-[#FF0040]" />
            <span>for the future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
