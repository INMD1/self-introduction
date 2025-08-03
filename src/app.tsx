import { useState } from 'react'
import * as React from "react";
import { Button } from './components/ui/button';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import First from './components/App_session/Main_session';
import About_me from './components/App_session/About_me';
import Sklls_ui from './components/App_session/Sklls_ui';
import Project_session from './components/App_session/Project_session';
import Personal_history from './components/App_session/Personal_history';


const navLinks = [
  { href: '#about', label: '소개' },
  { href: '#skills', label: '기술 스택' },
  { href: '#projects', label: '프로젝트' },
  { href: '#experience', label: '경력&수상' },
  { href: '#contact', label: '연락처' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // 사용자가 100px 이상 스크롤하면 헤더를 표시
      if (window.scrollY > 100) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 이 useEffect는 컴포넌트 마운트 시 한 번만 실행

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans selection:bg-blue-500/20">
      {/* --- 헤더 (수정됨) --- */}
      {isHeaderVisible == false ? <></> : <>
        <header className={`sticky top-0 z-50 w-full transition-opacity duration-300 ease-in-out ${isHeaderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} bg-white/80 dark:bg-gray-950/70 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="#" className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900 dark:text-white">INMD1의 나른한곳</span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-2">
                <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 dark:bg-gray-950/95 border-t dark:border-gray-800">
              <nav className="flex flex-col items-center gap-4 p-4">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>
      </>}


      {/*메인 페이지*/}
      <div className='w-full'>
        <First />
        <About_me />
        <Sklls_ui />
        <Project_session />
        <Personal_history />
      </div>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()}INMD(Lee hojun). All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://github.com/INMD1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/inmd1/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400"><Linkedin size={20} /></a>
            <a href="mailto:lyw514549@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
