import * as React from "react";
import { motion } from 'framer-motion'
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code2, Github, Mail, Terminal, Sparkles } from "lucide-react";

interface Experience {
    id: number;
    period: string;
    role: string;
    company: string;
    description: string;
}

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    color: string;
}

const PORTFOLIO_DATA = {
    name: "Hyunsoo Kim",
    role: "Full Stack Developer",
    greeting: "안녕하세요, 저는",
    bio: "사용자 경험을 최우선으로 생각하며, 복잡한 문제를 직관적인 코드로 해결하는 것을 즐깁니다. 새로운 기술에 끊임없이 도전하며 더 나은 디지털 세상을 만들어가고 있습니다.",
    skills: [
        "React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Python", "Git", "OpenStack","LINUX","DOCKER","SQLite","PostgreSQL","MySQL","MongoDB"
    ],
    projects: [
        {
            id: 1,
            title: "APSU",
            category: "Discord Bot / Service",
            description: "사용자 편의를 위한 다기능 디스코드 봇 서비스입니다. 커뮤니티 관리를 자동화하고 다양한 엔터테인먼트 기능을 제공합니다.",
            tags: ["TypeScript", "Node.js", "Discord.js"],
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            title: "ASW-PSMT",
            category: "School Support Service",
            description: "학교 생활을 더욱 편리하게 만들어주는 웹 플랫폼입니다. 급식 정보, 시간표, 일정 관리 기능을 통합하여 제공합니다.",
            tags: ["React", "Firebase", "PWA"],
            color: "from-emerald-500 to-green-400"
        },
        {
            id: 3,
            title: "ASWDCP",
            category: "Community Platform",
            description: "학생 개발자들을 위한 커뮤니티 공간입니다. 지식 공유와 협업을 장려하는 플랫폼을 구축했습니다.",
            tags: ["Next.js", "Tailwind", "Supabase"],
            color: "from-violet-500 to-purple-400"
        }
    ] as Project[],
    experience: [
        {
            id: 1,
            period: "2023 - Present",
            role: "Lead Developer",
            company: "Personal Projects",
            description: "APSU 및 다양한 학교 관련 웹 서비스 기획 및 개발 주도"
        },
        {
            id: 2,
            period: "2022 - 2023",
            role: "Frontend Study",
            company: "Self-Learning",
            description: "React 생태계 및 모던 웹 기술 스택 심화 학습"
        }
    ] as Experience[]
};

// --- 애니메이션 설정 ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
} as const;

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut" as const
        }
    })
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
    <div className="mb-12 sm:mb-16 text-center">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
        >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                {children}
            </h2>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
        </motion.div>
        {subtitle && (
            <motion.p
                className="text-slate-400 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

export default function Sklls_ui() {
    return (
        <div className="relative pt-10 pb-10">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            {/* --- 기술 스택 섹션 --- */}
            <motion.section
                id="skills"
                className="relative p-4 sm:p-6 md:p-12 lg:p-16 min-h-screen flex flex-col items-center justify-center overflow-hidden"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="w-full max-w-7xl relative z-10">
                    <SectionTitle subtitle="저에 대한 정보와 기술 스택을 소개합니다.">About Me</SectionTitle>

                    <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[180px] sm:auto-rows-[200px]">

                        {/* Main Intro Card */}
                        <motion.div
                            custom={0}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="row-span-2 col-span-1 md:col-span-2 lg:col-span-2"
                        >
                            <Card className="h-full flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-slate-950/60 border-slate-700/50 backdrop-blur-xl p-4 sm:p-6 md:p-8 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                                <div className="relative z-10">
                                    <motion.div
                                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500/40 to-purple-500/40 flex items-center justify-center text-indigo-300 mb-4 sm:mb-6 shadow-xl shadow-indigo-500/30"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Terminal size={28} className="sm:w-8 sm:h-8 group-hover:animate-pulse" />
                                    </motion.div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                                        Full Stack Developer
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base">
                                        문제 해결을 즐기며, 사용자에게 가치 있는 경험을 제공하는 웹 애플리케이션을 만듭니다.
                                        모던 웹 기술 트렌드를 빠르게 습득하고 적용하는 것을 좋아합니다.
                                    </p>
                                </div>

                                {/* Animated Progress Bar */}
                                <div className="relative z-10 mt-8 space-y-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Skill Level</span>
                                        <span className="text-sm text-indigo-400 font-mono font-bold">85%</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-800/80 rounded-full overflow-hidden shadow-inner border border-slate-700/50">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-indigo-500/50 relative overflow-hidden"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Background Icon */}
                                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-110">
                                    <Code2 size={240} className="text-indigo-400" />
                                </div>
                            </Card>
                        </motion.div>

                        {/* Social / Contact - GitHub */}
                        <motion.div
                            custom={1}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-1 row-span-1"
                        >
                            <Card className="h-full bg-gradient-to-br from-slate-800/50 to-indigo-900/50 border-slate-700/50 backdrop-blur-xl flex flex-col items-center justify-center text-center p-4 sm:p-6 hover:from-indigo-800/60 hover:to-indigo-900/60 hover:border-indigo-500/70 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105">
                                <Github className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-200 group-hover:text-white transition-colors" />
                                <h4 className="font-bold text-white text-sm sm:text-base md:text-lg">GitHub</h4>
                                <p className="text-xs text-slate-400 mt-1 sm:mt-1.5 group-hover:text-indigo-300 transition-colors">@INMD1</p>
                            </Card>
                        </motion.div>

                        {/* Social / Contact - Email */}
                        <motion.div
                            custom={2}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-1 row-span-1"
                        >
                            <Card className="h-full bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-slate-700/50 backdrop-blur-xl flex flex-col items-center justify-center text-center p-4 sm:p-6 hover:from-purple-800/60 hover:to-purple-900/60 hover:border-purple-500/70 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105">
                                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-200 group-hover:text-white transition-colors" />
                                <h4 className="font-bold text-white text-sm sm:text-base md:text-lg">Email</h4>
                                <p className="text-xs text-slate-400 mt-1 sm:mt-1.5 group-hover:text-purple-300 transition-colors break-all">lyw514549@gmail.com</p>
                            </Card>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            custom={3}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1"
                        >
                            <Card className="h-fullflex flex-col justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-xl p-4 sm:p-6 md:p-8 hover:border-purple-500/50 transition-all duration-500 group hover:shadow-xl hover:shadow-purple-500/20">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                                    <h4 className="text-slate-200 text-sm md:text-base font-bold uppercase tracking-wider">Tech Stack</h4>
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {PORTFOLIO_DATA.skills.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{
                                                delay: index * 0.05,
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15
                                            }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="bg-gradient-to-r from-slate-700/70 to-slate-800/70 text-slate-100 border border-slate-600/50 hover:from-indigo-500/40 hover:to-purple-500/40 hover:text-white hover:border-indigo-400/60 transition-all duration-300 cursor-default px-4 py-1.5 text-sm font-semibold shadow-lg hover:shadow-indigo-500/30"
                                            >
                                                {skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    )
}