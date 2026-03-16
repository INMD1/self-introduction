import * as React from "react";
import { motion } from 'framer-motion';
import { BookOpen, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'D Cloud Platform',
        description: 'Proxmox 가상화 기반에서 API를 가져와서 관리하는 클라우드 플랫폼 시스템입니다.',
        tags: ['React', 'PHP', 'MySQL'],
        liveUrl: '/projects/aswdcp',
        githubUrl: 'https://github.com/INMD1-Repo/D-Cloud-platform',
        accent: 'bg-blue-500',
        accentLight: 'bg-blue-50',
        category: 'Cloud Infrastructure',
    },
    {
        title: 'ASW-PSMT',
        description: 'D Cloud Platform을 응용해서 만든 학교 실습 시스템 관리 플랫폼입니다.',
        tags: ['React', 'PHP', 'MySQL'],
        liveUrl: '/projects/ASW-PSMT',
        githubUrl: 'https://github.com/INMD1/ASW-PSMT',
        accent: 'bg-violet-500',
        accentLight: 'bg-violet-50',
        category: 'Education Platform',
    },
    {
        title: 'APSU',
        description: '군대에서 자동으로 유동병력의 식사 인원을 체크할 수 있는 PWA 유틸리티입니다.',
        tags: ['Vue', 'Strapi', 'MySQL', 'PWA'],
        liveUrl: '/projects/APSU',
        githubUrl: 'https://github.com/INMD1-Repo/APSU',
        accent: 'bg-emerald-500',
        accentLight: 'bg-emerald-50',
        category: 'Utility / PWA',
    },
];

export default function Project_session() {
    return (
        <section id="projects" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Work</p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">주요 프로젝트</h2>
                    <p className="text-slate-500 text-sm">제가 참여하고 이끌었던 주요 프로젝트들입니다.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Top accent bar */}
                            <div className={`h-1 ${project.accent}`} />

                            <div className="p-6">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{project.category}</span>
                                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">{project.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2 pt-4 border-t border-slate-100">
                                    <button
                                        onClick={() => window.open(project.liveUrl, '_blank')}
                                        className="flex-1 py-2.5 px-4 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                                        aria-label={`${project.title} 상세보기`}
                                    >
                                        <BookOpen size={14} /> 상세보기
                                    </button>
                                    <button
                                        onClick={() => window.open(project.githubUrl, '_blank')}
                                        className="py-2.5 px-4 border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center gap-2"
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
