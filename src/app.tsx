import React, { useState } from 'react'
import { Button } from './components/ui/button';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import first from './components/App_session/first';

const navLinks = [
  { href: '#about', label: '소개' },
  { href: '#skills', label: '기술 스택' },
  { href: '#projects', label: '프로젝트' },
  { href: '#experience', label: '경력' },
  { href: '#contact', label: '연락처' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans selection:bg-blue-500/20">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">나른한 INMD</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button onClick={() => window.location.href = '#contact'} className="hidden sm:inline-flex" variant="outline">
                연락하기
              </Button>
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <nav className="flex flex-col items-center gap-4 p-4">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">
                  {link.label}
                </a>
              ))}
              <Button onClick={() => { window.location.href = '#contact'; setIsMenuOpen(false); }} className="w-full">
                Contact Me
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <first />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()}INMD(Lee hojun). All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://github.com/INMD1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/inmd1/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400"><Linkedin size={20} /></a>
            <a href="mailto:your.email@example.com" className="hover:text-blue-600 dark:hover:text-blue-400"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
