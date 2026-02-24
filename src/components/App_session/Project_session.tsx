import * as React from "react";
import * as Icons from "lucide-react";
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Sparkles, ExternalLink, Github } from "lucide-react";

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: index * 0.15,
            ease: "easeOut" as const
        }
    })
};

const projects = [
    {
        title: 'D Cloud Platform',
        description: 'Proxmox 가상화 기반에서 API을 가져와서 관리하는 시스템',
        tags: ['React', 'PHP', 'MySQL'],
        liveUrl: '/projects/aswdcp',
        githubUrl: 'https://github.com/INMD1-Repo/D-Cloud-platform',
        accent: 'indigo',
        icon: Icons.Cloud,
    },
    {
        title: 'ASW-PSMT',
        description: 'D Cloud Platform을 응용해서 만든 실습 시스템 입니다.',
        tags: ['React', 'PHP', 'MySQL'],
        liveUrl: '/projects/ASW-PSMT',
        githubUrl: 'https://github.com/INMD1/ASW-PSMT',
        accent: 'emerald',
        icon: Icons.Server,
    },
    {
        title: 'APSU',
        description: '군대에서 자동적으로 유동병력을 식사 인원을 체크할수 있는 유틸리티 입니다.',
        tags: ['Vue', 'Strapi', 'MySQL', "PWA"],
        liveUrl: '/projects/APSU',
        githubUrl: 'https://github.com/INMD1-Repo/APSU',
        accent: 'violet',
        icon: Icons.Shield,
    },
];

const accentStyles: Record<string, {
    gradient: string;
    hoverBorder: string;
    hoverShadow: string;
    iconBg: string;
    iconColor: string;
    tagHover: string;
}> = {
    indigo: {
        gradient: 'from-indigo-500/10 to-blue-500/10',
        hoverBorder: 'hover:border-indigo-500/50',
        hoverShadow: 'hover:shadow-indigo-500/20',
        iconBg: 'from-indigo-500/30 to-blue-500/30',
        iconColor: 'text-indigo-300',
        tagHover: 'hover:from-indigo-500/40 hover:to-blue-500/40',
    },
    emerald: {
        gradient: 'from-emerald-500/10 to-green-500/10',
        hoverBorder: 'hover:border-emerald-500/50',
        hoverShadow: 'hover:shadow-emerald-500/20',
        iconBg: 'from-emerald-500/30 to-green-500/30',
        iconColor: 'text-emerald-300',
        tagHover: 'hover:from-emerald-500/40 hover:to-green-500/40',
    },
    violet: {
        gradient: 'from-violet-500/10 to-purple-500/10',
        hoverBorder: 'hover:border-violet-500/50',
        hoverShadow: 'hover:shadow-violet-500/20',
        iconBg: 'from-violet-500/30 to-purple-500/30',
        iconColor: 'text-violet-300',
        tagHover: 'hover:from-violet-500/40 hover:to-purple-500/40',
    },
};


export default function Project_session() {
    return (
        <div className="relative">
            {/* Dark gradient background - matching About Me section */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-950 overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <motion.section
                id="projects"
                className="relative p-4 sm:p-6 md:p-12 lg:p-16 min-h-screen flex flex-col items-center justify-center overflow-hidden scroll-mt-20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="w-full max-w-6xl relative z-10">
                    {/* Section Title */}
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
                                Projects
                            </h2>
                            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                        </motion.div>
                        <motion.p
                            className="text-slate-400 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            제가 참여하고 이끌었던 주요 프로젝트들입니다.
                        </motion.p>
                    </div>

                    {/* Project Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                        {projects.map((project, index) => {
                            const style = accentStyles[project.accent];
                            const IconComponent = project.icon;
                            return (
                                <motion.div
                                    key={project.title}
                                    custom={index}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="group"
                                >
                                    <div className={`h-full flex flex-col rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-slate-950/60 border border-slate-700/50 backdrop-blur-xl p-5 sm:p-6 md:p-7 ${style.hoverBorder} transition-all duration-500 hover:shadow-2xl ${style.hoverShadow} relative overflow-hidden`}>
                                        {/* Hover gradient overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col flex-1">
                                            {/* Icon + Title */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <motion.div
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${style.iconBg} flex items-center justify-center ${style.iconColor} shadow-lg shrink-0`}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <IconComponent size={24} />
                                                </motion.div>
                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5 group-hover:text-slate-300 transition-colors duration-300">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map(tag => (
                                                    <Badge
                                                        key={tag}
                                                        variant="secondary"
                                                        className={`bg-gradient-to-r from-slate-700/70 to-slate-800/70 text-slate-200 border border-slate-600/50 ${style.tagHover} hover:text-white hover:border-slate-500/60 transition-all duration-300 cursor-default px-3 py-1 text-xs font-medium`}
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3 mt-auto">
                                                <button
                                                    onClick={() => window.open(project.liveUrl, "_blank")}
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-700/60 hover:text-white hover:border-slate-600 transition-all duration-300 group/btn"
                                                    aria-label={`${project.title} Notion 페이지 열기`}
                                                >
                                                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                    IN-Notion
                                                </button>
                                                <button
                                                    onClick={() => window.open(project.githubUrl, "_blank")}
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-700/60 hover:text-white hover:border-slate-600 transition-all duration-300 group/btn"
                                                    aria-label={`${project.title} GitHub 리포지토리 열기`}
                                                >
                                                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                    Source
                                                </button>
                                            </div>
                                        </div>

                                        {/* Background decorative icon */}
                                        <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-110">
                                            <IconComponent size={160} />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>
        </div>
    )
}