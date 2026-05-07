import * as React from "react";
import { motion } from 'framer-motion';
import { BookOpen, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Opnestack_Dloud-Dashboard',
        description: 'Openstack 기반의 클라우드 시스템을 사용자가 자유롭게 생성하거나 수정할수 있게 도와주는 클라우드 대시보드입니다.',
        tags: ['React', 'SQLite', 'MySQL'],
        liveUrl: '/projects/main',
        githubUrl: 'https://github.com/INMD1/Opnestack_Dloud-Dashboard',
        accent: 'bg-[#5e6ad2]',
        accentLight: 'bg-[#5e6ad2]/10',
        category: 'Cloud Infrastructure',
    },
    {
        title: 'skyline-apiserver-extenstion',
        description: '오픈스택의 차세대 대시보드인 Skyline을 수정해서 Opnestack_Dloud-Dashboard와 Openstack간 원활한 소통이 가능하게 하는 중계자 백엔드시스템 입니다.',
        tags: ['Python', 'MySQL'],
        liveUrl: '/projects/skylineextenstion',
        githubUrl: 'https://github.com/INMD1/skyline-apiserver-extenstion',
        accent: 'bg-[#5e6ad2]',
        accentLight: 'bg-[#5e6ad2]/10',
        category: 'Cloud Infrastructure',
    },
    {
        title: 'D Cloud Platform',
        description: 'Proxmox 가상화 기반에서 API 를 가져와서 관리하는 클라우드 플랫폼 시스템입니다.',
        tags: ['React', 'PHP', 'MySQL'],
        liveUrl: '/projects/aswdcp',
        githubUrl: 'https://github.com/INMD1-Repo/D-Cloud-platform',
        accent: 'bg-[#5e6ad2]',
        accentLight: 'bg-[#5e6ad2]/10',
        category: 'Cloud Infrastructure',
    },
    {
        title: 'ASW-PSMT',
        description: 'D Cloud Platform 을 응용해서 만든 학교 실습 시스템 관리 플랫폼입니다.',
        tags: ['React', 'PHP', 'MySQL'],
        liveUrl: '/projects/ASW-PSMT',
        githubUrl: 'https://github.com/INMD1/ASW-PSMT',
        accent: 'bg-[#828fff]',
        accentLight: 'bg-[#828fff]/10',
        category: 'Education Platform',
    },
    {
        title: 'APSU',
        description: '군대에서 자동으로 유동병력의 식사 인원을 체크할 수 있는 PWA 유틸리티입니다.',
        tags: ['Vue', 'Strapi', 'MySQL', 'PWA'],
        liveUrl: '/projects/APSU',
        githubUrl: 'https://github.com/INMD1-Repo/APSU',
        accent: 'bg-[#27a644]',
        accentLight: 'bg-[#27a644]/10',
        category: 'Utility / PWA',
    },
];

export default function Project_session() {
    return (
        <section id="projects" className="py-24 px-6 bg-[#010102]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[#5e6ad2] text-xs font-bold uppercase tracking-widest mb-3">Work</p>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-[#f7f8f8] mb-4">주요 프로젝트</h2>
                    <p className="text-[#8a8f98] text-sm">제가 진행했던 주요 프로젝트들입니다.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="group bg-[#0f1011] border border-[#23252a] rounded-lg overflow-hidden hover:border-[#34343a] hover:-translate-y-1 transition-all duration-200"
                        >
                            {/* Top accent bar */}
                            <div className={`h-1 ${project.accent}`} />

                            <div className="p-6">
                                <span className="text-xs font-semibold text-[#8a8f98] uppercase tracking-widest">{project.category}</span>
                                <h3 className="text-xl font-semibold text-[#f7f8f8] mt-2 mb-2">{project.title}</h3>
                                <p className="text-[#8a8f98] text-sm leading-relaxed mb-5">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2.5 py-1 bg-[#141516] border border-[#23252a] text-[#d0d6e0] rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2 pt-4 border-t border-[#23252a]">
                                    <button
                                        onClick={() => window.open(project.liveUrl, '_blank')}
                                        className="flex-1 py-2.5 px-4 bg-[#5e6ad2] text-white rounded-md text-sm font-medium hover:bg-[#828fff] transition-colors flex items-center justify-center gap-2"
                                        aria-label={`${project.title} 상세보기`}
                                    >
                                        <BookOpen size={14} /> 상세보기
                                    </button>
                                    <button
                                        onClick={() => window.open(project.githubUrl, '_blank')}
                                        className="py-2.5 px-4 border border-[#23252a] text-[#d0d6e0] rounded-md text-sm font-medium hover:bg-[#141516] hover:border-[#34343a] transition-colors flex items-center gap-2"
                                        aria-label={`${project.title} GitHub`}
                                    >
                                        <Github size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
