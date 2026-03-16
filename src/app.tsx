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
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {isHeaderVisible && (
        <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex h-16 items-center justify-between">
              <a href="#" className="text-lg font-bold text-slate-900 tracking-tight">
                INMD<span className="text-blue-600">.</span>
              </a>
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors duration-200">
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="hidden md:flex items-center">
                <a href="mailto:lyw514549@gmail.com" className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-200">
                  Contact
                </a>
              </div>
              <button className="md:hidden p-2 text-slate-600 hover:text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100">
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
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

      <footer className="border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
          <p className="font-medium">© {new Date().getFullYear()} INMD (Lee Hojun). All Rights Reserved.</p>
          <div className="flex gap-5 mt-4 sm:mt-0">
            <a href="https://github.com/INMD1" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/inmd1/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:lyw514549@gmail.com" className="hover:text-slate-900 transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
