import * as React from "react";
import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const experiences = [
    {
        role: "Developer Intern",
        type: "Inc",
        company: "시냅플리",
        period: "2023 - 2023",
        description: "Nextjs기반 회사 프로그램 유지보수를 하고 기존 패키지를 최신화 작업을 했습니다."
    },
    {
        role: "한국콘텐츠학회장상",
        company: "K-해커톤 12",
        creater: "과학기술정보통신부",
        type: "festival",
        period: "2024",
    },
    {
        role: "Fullstack Developer",
        company: "시냅플리",
        type: "Inc",
        period: "2024 - 현재",
        description: "Next,Nest.js을 이용해서 프론트와 백엔드 작업을 했으면 현재 SNS와 AI 연동 작업을 하고 있습니다. "
    },
]


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
};

export default function Personal_history() {
    return (
        <div>
            <hr />
            <motion.section id="experience" className="p-4 sm:p-6 md:p-10 min-h-screen py-16 sm:py-20 md:py-24 scroll-mt-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
                    <p className="max-w-xl text-base sm:text-lg md:text-2xl mx-auto text-gray-600 dark:text-gray-400 mt-2 px-4">
                        제가 걸어온 길과 성장 과정입니다.
                    </p>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-3 sm:left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative mb-8 pl-8 sm:pl-0"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {
                                exp.type == "Inc" ? <div>
                                    <div className="absolute left-3 sm:left-1/2 top-1 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-950"></div>
                                    <div className={`sm:w-5/12 ${index % 2 === 0 ? 'sm:ml-auto sm:pl-8' : 'sm:mr-auto sm:pr-8 sm:text-right'}`}>
                                        <div className="p-3 sm:p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                                            <p className="font-bold text-base sm:text-lg">{exp.role}</p>
                                            <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">{exp.company}</p>
                                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 ">{exp.period}</p>
                                            <Accordion type="single" collapsible>
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger className="text-sm sm:text-base">더보기</AccordionTrigger>
                                                    <AccordionContent>
                                                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    <div>
                                        <div className="absolute left-3 sm:left-1/2 top-1 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-green-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-950"></div>
                                        <div className={`sm:w-5/12 ${index % 2 === 0 ? 'sm:ml-auto sm:pl-8' : 'sm:mr-auto sm:pr-8 sm:text-right'}`}>
                                            <div className="p-3 sm:p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                                                <p className="font-bold text-base sm:text-lg">{exp.role}</p>
                                                <p className="text-xs sm:text-sm">주최자: {exp.creater}</p>
                                                <p className="text-sm text-green-600 dark:text-blue-400 mb-1">{exp.company}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 ">{exp.period}</p>
                                            </div>
                                        </div>
                                    </div>
                            }


                        </motion.div>

                    ))}

                </div>
            </motion.section>
        </div>
    )
}