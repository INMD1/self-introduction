import * as React from "react";
import { motion } from 'framer-motion'
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge, Book, Github } from "lucide-react";

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

const projects = [
    {
        title: '실시간 협업 대시보드',
        description: '다수의 사용자가 동시에 데이터를 시각화하고 편집할 수 있는 웹 기반 대시보드입니다. WebSocket을 이용한 실시간 통신이 핵심입니다.',
        image: 'https://placehold.co/1280x800/1e293b/ffffff?text=Project+A',
        tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'AI 기반 상품 추천 시스템',
        description: '사용자 행동 데이터를 분석하여 개인화된 상품을 추천하는 백엔드 시스템을 구축했습니다. Python과 FastAPI를 사용했습니다.',
        image: 'https://placehold.co/1280x800/475569/ffffff?text=Project+B',
        tags: ['Python', 'FastAPI', 'Machine Learning', 'Docker'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        title: '클라우드 네이티브 CI/CD 파이프라인',
        description: 'GitHub Actions와 Kubernetes를 연동하여 개발부터 배포까지의 과정을 자동화하는 파이프라인을 설계 및 구축했습니다.',
        image: 'https://placehold.co/1280x800/1f2937/ffffff?text=Project+C',
        tags: ['AWS', 'Kubernetes', 'Docker', 'GitHub Actions'],
        liveUrl: '#',
        githubUrl: '#',
    },
];

export default function Project_session() {
    return (
        <div>
            <motion.section id="projects" className="py-24 scroll-mt-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mt-2">
                        제가 참여하고 이끌었던 주요 프로젝트들입니다.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <motion.div key={project.title} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <Card className="overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="grid md:grid-cols-2">
                                    <div className="p-6 flex flex-col justify-between">
                                        <div>
                                            <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                                            <CardDescription className="mb-4">{project.description}</CardDescription>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 mt-4">
                                            <Button variant="link" onClick={() => window.open(project.liveUrl, '_blank')}>
                                                Notion  <Book className="ml-2 h-4 w-4" />
                                            </Button>
                                            <Button variant="link" onClick={() => window.open(project.githubUrl, '_blank')}>
                                                <Github className="mr-2 h-4 w-4" /> Code
                                            </Button>
                                        </div>
                                    </div>
                                    <img src={project.image} alt={project.title} className="h-full w-full object-cover hidden md:block" />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}