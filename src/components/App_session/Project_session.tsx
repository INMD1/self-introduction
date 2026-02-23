import * as React from "react";
import * as Icons from "lucide-react";
import { motion } from 'framer-motion'
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge"
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

const projects = [
    {
        title: 'D Cloud Platform',
        description: 'Proxmox 가상화 기반에서 API을 가져와서 관리하는 시스템',
        tags: ['React', 'PHP', 'MySQL'],
        liveUrl: '/projects/aswdcp',
        githubUrl: 'https://github.com/INMD1-Repo/D-Cloud-platform',
    },
    {
        title: 'ASW-PSMT',
        description: 'D Cloud Platform을 응용해서 만든 실습 시스템 입니다.',
        tags: ['React', 'PHP', 'MySQL'],
        liveUrl: '/projects/ASW-PSMT',
        githubUrl: 'https://github.com/INMD1/ASW-PSMT',
    },
    {
        title: 'APSU',
        description: '군대에서 자동적으로 유동병력을 식사 인원을 체크할수 있는 유틸리티 입니다.',
        tags: ['Vue', 'Strapi', 'MySQL', "PWA"],
        liveUrl: '/projects/APSU',
        githubUrl: 'https://github.com/INMD1-Repo/APSU',
    },
];


export default function Project_session() {
    return (
        <div>
            <motion.section id="projects" className="p-4 sm:p-6 md:p-10 min-h-screen py-16 sm:py-20 md:py-24 scroll-mt-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
                    <p className="max-w-xl text-base sm:text-lg md:text-2xl mx-auto text-gray-600 dark:text-gray-400 mt-2 px-4">
                        제가 참여하고 이끌었던 주요 프로젝트들입니다.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto px-2 sm:px-0">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Card className="h-full overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="grid">
                                    <div className="p-4 sm:p-6 flex flex-col">
                                        <div >
                                            <CardTitle className="text-xl sm:text-2xl mb-2">{project.title}</CardTitle>
                                            <CardDescription className="mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</CardDescription>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map(tag => (
                                                    <Badge key={tag}>{tag}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
                                            <Button onClick={() => window.open(project.liveUrl, "_blank")} className="flex-1 sm:flex-none" aria-label={`${project.title} Notion 페이지 열기`}>
                                                <Icons.Book className="h-4 w-4" /> INotion
                                            </Button>
                                            <Button onClick={() => window.open(project.githubUrl, "_blank")} className="flex-1 sm:flex-none" aria-label={`${project.title} GitHub 리포지토리 열기`}>
                                                <Icons.Github className="h-4 w-4" /> Source
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}