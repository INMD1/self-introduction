import * as React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function ProjectShowcase({ id }: { id?: string }) {
    const parms = id.replace("/projects/", "")
    return (
        <div className="space-y-16">
             <h1 className="text-3xl font-bold mb-4">Project ID: {parms}</h1>
            <section id="intro">
                <motion.h1
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    ✨ MyProject – 나만의 프로젝트
                </motion.h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    이 프로젝트는 누구나 쉽게 사용할 수 있도록 만든 개인 프로젝트입니다. 직관적인 UI와 빠른 배포 환경을 갖추고 있어, 빠르게 MVP를 만들 수 있습니다.
                </p>
            </section>

            <section id="tech">
                <h2 className="text-2xl font-semibold mb-2">🛠 기술 스택</h2>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                    <li>React (w/ Vite)</li>
                    <li>TailwindCSS</li>
                    <li>Framer Motion</li>
                    <li>TypeScript</li>
                </ul>
            </section>

            <section id="features">
                <h2 className="text-2xl font-semibold mb-2">🚀 주요 기능</h2>
                <ul className="list-decimal list-inside text-gray-800 space-y-1">
                    <li>사용자 친화적인 UI</li>
                    <li>모바일 최적화</li>
                    <li>가볍고 빠른 로딩</li>
                </ul>
            </section>

            <section id="screenshots">
                <h2 className="text-2xl font-semibold mb-2">📸 스크린샷</h2>
                <img
                    src="https://via.placeholder.com/800x400.png?text=Project+Preview"
                    alt="Project preview"
                    className="rounded-xl border shadow"
                />
            </section>

            <section id="github">
                <a
                    href="https://github.com/yourusername/myproject"
                    target="_blank"
                    className="inline-flex items-center text-blue-600 hover:underline"
                >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub 저장소 보기
                </a>
            </section>
        </div>
    );
}
