import * as React from "react";
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

const projectGroups = [
    { section: 'Projects', title: null, description: null },
    {
        section: 'Infra Cloud',
        title: '인프라 · 클라우드',
        description: 'OpenStack·Proxmox 기반 클라우드 플랫폼과 물리 서버 관리 도구를 모았습니다.',
    },
    {
        section: 'Research',
        title: '문서 변환 연구',
        description: '변환 품질 분석과 모델 학습을 각각 독립된 연구 프로젝트로 소개합니다.',
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
                    <p className="text-[#8a8f98] text-sm leading-relaxed">
                        클라우드와 서버 운영부터 네트워크 실험, 문서 변환까지. 각 프로젝트의 문제와 해결 과정, 구현 내용과 검증 결과를 소개합니다.
                    </p>
                </motion.div>

                {projectGroups.map(group => (
                    <div key={group.section} className={group.title ? 'mt-16' : ''}>
                        {group.title && (
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold text-[#f7f8f8] mb-2">{group.title}</h3>
                                <p className="text-[#8a8f98] text-sm leading-relaxed">{group.description}</p>
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {projects.filter(project => project.section === group.section).map((project, i) => (
                                <motion.article
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    className="group min-w-0 flex flex-col bg-[#0f1011] border border-[#23252a] rounded-lg overflow-hidden hover:border-[#34343a] hover:-translate-y-1 transition-all duration-200"
                                >
                                    <div className={`h-1 ${project.section === 'Research' ? 'bg-[#828fff]' : 'bg-[#5e6ad2]'}`} />
                                    <div className="p-6 flex flex-1 flex-col min-w-0">
                                        <span className="text-xs font-semibold text-[#8a8f98] uppercase tracking-widest">{project.category}</span>
                                        <h3 className="text-xl font-semibold text-[#f7f8f8] mt-2 mb-2 break-words">{project.title}</h3>
                                        <p className="text-[#8a8f98] text-sm leading-relaxed mb-5">{project.description}</p>

                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs px-2.5 py-1 bg-[#141516] border border-[#23252a] text-[#d0d6e0] rounded-md font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {project.highlight && (
                                            <div className="mb-6 border-l-2 border-[#5e6ad2] pl-3">
                                                <p className="text-xs text-[#8a8f98] mb-1">{project.highlightLabel}</p>
                                                <p className="text-sm text-[#d0d6e0] leading-relaxed">{project.highlight}</p>
                                            </div>
                                        )}

                                        <div className="flex gap-2 pt-4 mt-auto border-t border-[#23252a]">
                                            <a
                                                href={`/projects/${project.id}`}
                                                className="flex-1 py-2.5 px-4 bg-[#5e6ad2] text-white rounded-md text-sm font-medium hover:bg-[#828fff] transition-colors flex items-center justify-center gap-2"
                                                aria-label={`${project.title} 상세보기`}
                                            >
                                                <BookOpen size={14} /> 상세보기
                                            </a>
                                            <a
                                                href={project.repositoryUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="py-2.5 px-4 border border-[#23252a] text-[#d0d6e0] rounded-md text-sm font-medium hover:bg-[#141516] hover:border-[#34343a] transition-colors flex items-center gap-2"
                                                aria-label={`${project.title} 코드 저장소`}
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
