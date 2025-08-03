import * as React from "react";
import { motion } from 'framer-motion'
import { Cloud, Code, Server, Database } from "lucide-react";

const skills = [
    { name: 'React', icon: <Code className="h-6 w-6 text-blue-500" /> },
    { name: 'Node.js', icon: <Server className="h-6 w-6 text-green-500" /> },
    { name: 'Python', icon: <Code className="h-6 w-6 text-yellow-500" /> },
    { name: 'Docker', icon: <Server className="h-6 w-6 text-blue-600" /> },
    { name: 'AWS', icon: <Cloud className="h-6 w-6 text-orange-500" /> },
    { name: 'TypeScript', icon: <Code className="h-6 w-6 text-blue-400" /> },
    { name: 'PostgreSQL', icon: <Database className="h-6 w-6 text-indigo-500" /> },
    { name: 'Mysql', icon: <Database className="h-6 w-6 text-[#F29111]" /> },

];

// --- 애니메이션 설정 ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function Sklls_ui() {
    return (
        <div>
            {/* --- 기술 스택 섹션 --- */}
            <motion.section id="skills" className="py-24 scroll-mt-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Tech Stack</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 sm:text-xl dark:text-gray-400 mt-2">
                        애플리케이션 개발과 배포를 위해 다음과 같은 기술들을 주로 사용합니다.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                            {skill.icon}
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </motion.section>

        </div>
    )

}