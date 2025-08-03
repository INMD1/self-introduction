import * as React from "react";
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaVuejs } from "react-icons/fa";
import { SiOpenstack, SiProxmox, SiTypescript, SiMysql, SiPostgresql, SiVite } from "react-icons/si";

const skills = [
    { name: 'React', tag: "FrameWork", icon: <FaReact className="h-6 w-6 text-blue-500" /> },
    { name: 'Vue', tag: "FrameWork", icon: <FaVuejs className="h-6 w-6 text-[#41B883]" /> },
    { name: 'Vite', tag: "FrameWork", icon: <SiVite className="h-6 w-6 text-[#40A798]" /> },
    { name: 'Node.js', tag: "Language", icon: <FaNodeJs className="h-6 w-6 text-green-500" /> },
    { name: 'Python', tag: "Language", icon: <FaPython className="h-6 w-6 text-[#306998]" /> },
    { name: 'Docker', tag: "Infra", icon: <FaDocker className="h-6 w-6 text-blue-600" /> },
    { name: 'TypeScript', tag: "Language", icon: <SiTypescript className="h-6 w-6 text-blue-400" /> },
    { name: 'PostgreSQL', tag: "DB", icon: <SiPostgresql className="h-6 w-6 text-indigo-500" /> },
    { name: 'Mysql', tag: "DB", icon: <SiMysql className="h-6 w-6 text-[#F29111]" /> },
    { name: 'Openstack', tag: "Infra", icon: <SiOpenstack className="h-6 w-6 text-[#ed1e48]" /> },
    { name: 'Proxmox', tag: "Infra", icon: <SiProxmox className="h-6 w-6 text-[#fb8c00]" /> },
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
            <motion.section id="skills" className="p-10 min-h-[calc(100vh)] bg-[#E5E1DA] gird xl:flex items-center justify-center overflow-hidden " variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="mb-12 mt-52 lg:mt-52 xl:mb-52 text-center ">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Tech Stack</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 sm:text-xl dark:text-gray-400 mt-2">
                        애플리케이션 개발과 배포를 위해 다음과 같은 기술들을 주로 사용합니다.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mx-auto block lg:hidden">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                            {skill.icon}
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className="flex xl:ml-32 hidden lg:block ">
                    <div className="grid min-w-3xl gap-10 grid-cols-2 ">
                        <Card className="">
                            <CardHeader>
                                <CardTitle>Framwork</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-5  justify-evenly ">
                                    {skills.map((skill) => (
                                        skill.tag == "FrameWork" ?
                                            <div key={skill.name} className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                                                {skill.icon}
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            : <></>
                                    ))}
                                </div>

                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Language/Runtime</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2  gap-5  justify-evenly">
                                    {skills.map((skill) => (
                                        skill.tag == "Language" ?
                                            <div key={skill.name} className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                                                {skill.icon}
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            : <></>
                                    ))}
                                </div>

                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>DB</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-5   justify-evenly">
                                    {skills.map((skill) => (
                                        skill.tag == "DB" ?
                                            <div key={skill.name} className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                                                {skill.icon}
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            : <></>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Infra</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2   gap-5 justify-evenly">
                                    {skills.map((skill) => (
                                        skill.tag == "Infra" ?
                                            <div key={skill.name} className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                                                {skill.icon}
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            : <></>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>


                </div>
            </motion.section>

        </div>
    )

}