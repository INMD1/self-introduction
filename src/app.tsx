import { useState } from 'react'
import * as React from "react";
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import First from './components/App_session/Main_session';
import Sklls_ui from './components/App_session/Sklls_ui';
import Project_session from './components/App_session/Project_session';
import Personal_history from './components/App_session/Personal_history';

const navLinks = [
  { href: '#skills', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#010102] text-[#f7f8f8] min-h-screen font-sans">
      {isHeaderVisible && (
        <header className="fixed top-0 z-50 w-full bg-[#010102]/90 backdrop-blur-md border-b border-[#23252a] shadow-lg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex h-14 items-center justify-between">
              <a href="#" className="text-base font-semibold text-[#f7f8f8] tracking-tight">
                INMD<span className="text-[#5e6ad2]">.</span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} className="text-[#8a8f98] hover:text-[#f7f8f8] transition-colors duration-150">
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="hidden md:flex items-center">
                <a href="mailto:lyw514549@gmail.com" className="px-4 py-1.5 bg-[#5e6ad2] text-white text-sm font-medium rounded-md hover:bg-[#828fff] transition-colors duration-150">
                  Contact
                </a>
              </div>
              <button className="md:hidden p-2 text-[#8a8f98] hover:text-[#f7f8f8]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-[#0f1011] border-t border-[#23252a]">
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[#141516] rounded-md transition-colors">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>
      )}

      <div className="w-full">
        <First />
        <Sklls_ui />
        <Project_session />
        <Personal_history />
      </div>

      <footer className="border-t border-[#23252a] bg-[#010102]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8a8f98]">
          <p className="font-medium">© {new Date().getFullYear()} INMD (Lee Hojun). All Rights Reserved.</p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <a href="https://github.com/INMD1" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7f8f8] transition-colors"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/inmd1/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7f8f8] transition-colors"><Linkedin size={16} /></a>
            <a href="mailto:lyw514549@gmail.com" className="hover:text-[#f7f8f8] transition-colors"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
