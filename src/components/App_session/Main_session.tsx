import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import * as React from "react";

function First() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#010102] overflow-hidden">
            {/* Dot grid background - Linear style */}
            <div className="dot-grid-bg absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#010102] pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5e6ad2]/30 bg-[#5e6ad2]/10 text-[#828fff] text-xs font-semibold mb-8 tracking-wide">
                            <span className="w-1.5 h-1.5 bg-[#5e6ad2] rounded-full animate-pulse" />
                            OPEN TO OPPORTUNITIES
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#f7f8f8] mb-6 leading-[1.1]">
                            풀스택 개발자<br />
                            <span className="text-[#5e6ad2]">INMD</span>입니다.
                        </h1>

                        <p className="text-lg text-[#8a8f98] mb-10 leading-relaxed">
                            아이디어를 코드로 구현하고, 안정적인 인프라 위에서<br className="hidden sm:block" />
                            사용자의 문제를 해결합니다.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-12">
                            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e6ad2] text-white font-medium rounded-md hover:bg-[#828fff] transition-colors duration-150 text-sm">
                                프로젝트 보기 <ArrowRight size={16} />
                            </a>
                            <a href="#experience" className="inline-flex items-center gap-2 px-4 py-2 border border-[#23252a] text-[#d0d6e0] font-medium rounded-md hover:bg-[#141516] hover:border-[#5e6ad2] transition-colors duration-150 text-sm">
                                경력 & 수상
                            </a>
                        </div>

                        <div className="flex items-center gap-1">
                            <a href="https://github.com/INMD1" target="_blank" rel="noreferrer"
                                className="p-2 text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[#141516] rounded-md transition-all">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/inmd1/" target="_blank" rel="noreferrer"
                                className="p-2 text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[#141516] rounded-md transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:lyw514549@gmail.com"
                                className="p-2 text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[#141516] rounded-md transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Profile image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="hidden sm:flex sm:justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div className="absolute -inset-6 bg-gradient-to-br from-[#5e6ad2]/20 to-[#828fff]/10 rounded-2xl blur-2xl" />
                            <img
                                src="https://avatars.githubusercontent.com/u/87979171?v=4"
                                alt="프로필"
                                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-lg object-cover border border-[#23252a]"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-[#0f1011] rounded-md border border-[#23252a] px-4 py-2.5">
                                <p className="text-sm font-medium text-[#f7f8f8]">Full Stack Dev</p>
                                <p className="text-xs text-[#8a8f98] mt-0.5">React · Node.js · TypeScript</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-20 md:mt-10 pt-8 border-t border-[#23252a] grid grid-cols-3 gap-8 max-w-sm"
                >
                    <div>
                        <p className="text-3xl font-semibold text-[#f7f8f8]">5+</p>
                        <p className="text-xs text-[#8a8f98] mt-1 font-medium uppercase tracking-wide">Years Coding</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-[#f7f8f8]">10+</p>
                        <p className="text-xs text-[#8a8f98] mt-1 font-medium uppercase tracking-wide">Projects</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-[#f7f8f8]">2</p>
                        <p className="text-xs text-[#8a8f98] mt-1 font-medium uppercase tracking-wide">Award</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default First;
