import * as React from "react";
import { motion } from 'framer-motion'
import { Briefcase, Trophy, Award, ChevronDown } from "lucide-react";

const experiences = [
    {
        role: "Developer Intern",
        type: "Inc" as const,
        company: "시냅플리",
        period: "2023 - 2023",
        description: "Nextjs기반 회사 프로그램 유지보수를 하고 기존 패키지를 최신화 작업을 했습니다.",
    },
    {
        role: "우수상",
        company: "한국멀티미디어학회 추계학술발표 대회",
        creater: "한국멀티미디어학회",
        type: "festival" as const,
        period: "2025",
    },
    {
        role: "한국콘텐츠학회장상",
        company: "K-해커톤 12",
        creater: "과학기술정보통신부",
        type: "festival" as const,
        period: "2024",
    },
    {
        role: "Fullstack Developer",
        company: "시냅플리",
        type: "Inc" as const,
        period: "2024 - 2026",
        description: "Next,Nest.js을 이용해서 프론트와 백엔드 작업을 했으면 현재 SNS와 AI 연동 작업을 하고 있습니다.",
    },
];

// --- 애니메이션 설정 ---
const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
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

function ExperienceCard({ exp, index }: { exp: typeof experiences[number], index: number }) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const isInc = exp.type === "Inc";

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="group"
        >
            <div className={`relative rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-500
                ${isInc
                    ? 'bg-white/[0.03] border-slate-200/20 dark:border-slate-700/50 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10'
                    : 'bg-gradient-to-br from-amber-500/[0.03] to-yellow-500/[0.03] border-amber-200/20 dark:border-amber-700/30 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10'
                }`}
            >
                {/* Accent bar on the left */}
                <div className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl
                    ${isInc
                        ? 'bg-gradient-to-b from-blue-500 to-indigo-600'
                        : 'bg-gradient-to-b from-amber-400 to-yellow-500'
                    }`}
                />

                <div className="p-5 sm:p-6 pl-6 sm:pl-7">
                    <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                            className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg
                                ${isInc
                                    ? 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-400'
                                    : 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 text-amber-400'
                                }`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {isInc ? <Briefcase size={22} /> : <Trophy size={22} />}
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 mb-1.5">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">
                                    {exp.role}
                                </h3>
                                <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 w-fit
                                    ${isInc
                                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                                    }`}
                                >
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mb-1">
                                <p className={`text-sm font-semibold
                                    ${isInc ? 'text-blue-600 dark:text-blue-400' : 'text-amber-600 dark:text-amber-400'}`}
                                >
                                    {exp.company}
                                </p>
                                {isInc && (
                                    <span className="text-xs text-gray-400 dark:text-slate-500">•</span>
                                )}
                                {isInc && (
                                    <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">
                                        {exp.type === "Inc" ? "기업" : ""}
                                    </span>
                                )}
                            </div>

                            {/* Festival specific: Creator */}
                            {!isInc && exp.creater && (
                                <div className="flex items-center gap-1.5 mb-1">
                                    <Award size={14} className="text-amber-500/60" />
                                    <p className="text-xs text-gray-500 dark:text-slate-400">
                                        주최: {exp.creater}
                                    </p>
                                </div>
                            )}

                            {/* Expandable description for Inc type */}
                            {isInc && exp.description && (
                                <div className="mt-3">
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                                    >
                                        <span>상세 보기</span>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown size={14} />
                                        </motion.div>
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: isExpanded ? "auto" : 0,
                                            opacity: isExpanded ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mt-2 pl-0.5 border-l-2 border-blue-500/20 pl-3">
                                            {exp.description}
                                        </p>
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Decorative glow for award cards */}
                {!isInc && (
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl group-hover:bg-amber-400/10 transition-all duration-700" />
                )}
            </div>
        </motion.div>
    );
}


export default function Personal_history() {
    const incExperiences = experiences.filter(e => e.type === "Inc");
    const festivalExperiences = experiences.filter(e => e.type === "festival");

    return (
        <motion.section
            id="experience"
            className="p-4 sm:p-6 md:p-10 lg:p-16 min-h-screen py-16 sm:py-20 md:py-24 scroll-mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-14 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                            Experience
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                            제가 걸어온 길과 성장 과정입니다.
                        </p>
                    </motion.div>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Career Column */}
                    <div>
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                                <Briefcase size={16} className="text-blue-500" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
                                경력
                            </h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
                        </motion.div>
                        <div className="space-y-4">
                            {incExperiences.map((exp, index) => (
                                <ExperienceCard key={index} exp={exp} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Awards Column */}
                    <div>
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                                <Trophy size={16} className="text-amber-500" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
                                수상
                            </h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-amber-500/20 to-transparent" />
                        </motion.div>
                        <div className="space-y-4">
                            {festivalExperiences.map((exp, index) => (
                                <ExperienceCard key={index} exp={exp} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}