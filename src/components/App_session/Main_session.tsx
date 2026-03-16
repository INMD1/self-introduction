import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

function First() {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            {/* Dot grid background */}
            <div className="dot-grid-bg absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-semibold mb-8 tracking-wide">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                            OPEN TO OPPORTUNITIES
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                            풀스택 개발자<br />
                            <span className="text-blue-600">INMD</span>입니다.
                        </h1>

                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            아이디어를 코드로 구현하고, 안정적인 인프라 위에서<br className="hidden sm:block" />
                            사용자의 문제를 해결합니다.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-12">
                            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all duration-200 text-sm">
                                프로젝트 보기 <ArrowRight size={16} />
                            </a>
                            <a href="#experience" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-sm">
                                경력 & 수상
                            </a>
                        </div>

                        <div className="flex items-center gap-1">
                            <a href="https://github.com/INMD1" target="_blank" rel="noreferrer"
                                className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/inmd1/" target="_blank" rel="noreferrer"
                                className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:lyw514549@gmail.com"
                                className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Profile image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div className="absolute -inset-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl" />
                            <img
                                src="https://avatars.githubusercontent.com/u/87979171?v=4"
                                alt="프로필"
                                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-2xl"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-5 py-3">
                                <p className="text-sm font-bold text-slate-900">Full Stack Dev</p>
                                <p className="text-xs text-slate-400 mt-0.5">React · Node.js · TypeScript</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-20 pt-8 border-t border-slate-100 grid grid-cols-3 gap-8 max-w-sm"
                >
                    <div>
                        <p className="text-3xl font-extrabold text-slate-900">3+</p>
                        <p className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">Years Coding</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-slate-900">3</p>
                        <p className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">Projects</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-slate-900">1</p>
                        <p className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">Award</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default First;
