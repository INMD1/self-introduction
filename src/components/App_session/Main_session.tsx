
import { motion } from 'framer-motion';
import * as React from "react";

function First() {
    return (
        <>
            {/* --- 히어로 섹션 --- */}
            <section className="relative min-h-[calc(100vh)] flex items-center justify-center overflow-hidden p-0 sm:p-10">
                {/* 배경 그라데이션 */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 dark:from-pink-900/30 dark:via-purple-900/20 dark:to-blue-900/30"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob dark:opacity-20"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 dark:opacity-20"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 dark:opacity-20"></div>

                <motion.div
                    className="relative  w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-20 sm:gap-x-42 justify-items-center-safe sm:items-center "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* 왼쪽: 이미지 (글래스모피즘) */}
                    <div className="relative p-4 w-60 sm:w-auto">
                        <div className="absolute inset-0 bg-white/30 dark:bg-black/20 rounded-3xl backdrop-blur-lg shadow-2xl transform -rotate-6 transition-transform duration-500 hover:rotate-0"></div>
                        <img
                            src="https://avatars.githubusercontent.com/u/87979171?v=4"
                            alt="프로필 사진"
                            className="relative w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>
                    {/* 오른쪽: 텍스트 및 링크 */}
                    <div className="text-left m-10 sm:m-0">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-800 dark:text-gray-100">
                            풀스택 개발자 OOO입니다.
                        </h1>
                        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400 mb-8">
                            아이디어를 코드로 구현하고, 안정적인 인프라 위에서 사용자의 문제를 해결합니다.
                        </p>
                        <div className="flex flex-col items-start gap-3">
                            <a href="#projects" className="w-full sm:w-2/3 p-4 border border-gray-300 dark:border-gray-700 rounded-lg text-left hover:bg-white/50 dark:hover:bg-white/10 transition-colors">프로젝트 보기</a>
                            <a href="#skills" className="w-full sm:w-2/3 p-4 border border-gray-300 dark:border-gray-700 rounded-lg text-left hover:bg-white/50 dark:hover:bg-white/10 transition-colors">기술 스택</a>
                            <a href="#experience" className="w-full sm:w-2/3 p-4 border border-gray-300 dark:border-gray-700 rounded-lg text-left hover:bg-white/50 dark:hover:bg-white/10 transition-colors">경력 및 경험</a>
                            <a href="#contact" className="w-full sm:w-2/3 p-4 border border-gray-300 dark:border-gray-700 rounded-lg text-left hover:bg-white/50 dark:hover:bg-white/10 transition-colors">연락하기</a>
                        </div>
                    </div>
                </motion.div>
            </section>


        </>
    )
}

export default First;