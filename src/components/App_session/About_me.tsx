//@ts-nocheck
import * as React from "react";
import { motion } from 'framer-motion'
import about from "@/assets/image.png"
import about2 from "@/assets/bage.png"

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

function About_me() {
    return (
        <>
            {/* --- 소개 섹션 --- */}
            < motion.section id="about" className="p-10 bg-[#89A8B2] min-h-[calc(100vh)] gird lg:flex items-center justify-center py-24 scroll-mt-20 " variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }
            }>
                <div className="flex container lg:grid md:grid-cols-5 gap-8 md:gap-12 justify-items-center-safe">
                    <div className="md:col-span-3">
                        <h2 className="text-5xl font-bold tracking-tight mb-4">Who am ME?</h2>
                        <img
                            src={about2}
                            alt="코딩하는 모습"
                            className="rounded-xl shadow-lg w-full h-auto object-cover block lg:hidden mt-10 mb-10"
                        />
                        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-xl">
                            <p className="mt-20 mb-10 italic text-xl lg:text-2xl text-center">
                                `
                                저는 흩어진 퍼즐을 하나하나 맞춰나가는 개발자입니다.`
                            </p>
                            <p>
                                저는 사용자의 아이디어가 실제 동작하는 제품으로 탄생하는 전 과정에 기여하는 것을 즐기는 개발자입니다. 매끄러운 사용자 경험을 위한 프론트엔드 개발부터, 안정적이고 효율적인 데이터 처리를 위한 백엔드 시스템 설계, 그리고 이를 안정적으로 운영하기 위한 인프라 구축까지, 기술의 모든 스펙트럼에 깊은 관심을 가지고 있습니다.
                            </p>
                            <p>
                                복잡한 문제를 마주했을 때, 이를 논리적으로 분해하고 최적의 기술 스택을 선택하여 해결책을 찾아내는 과정에서 가장 큰 성취감을 느낍니다. 저는 단순히 코드를 작성하는 것을 넘어, 비즈니스 목표를 이해하고 기술을 통해 실질적인 가치를 창출하는 것을 목표로 합니다.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-2 hidden lg:block w-[23em]">
                        <img
                            src={about}
                            alt="코딩하는 모습"
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </motion.section >
        </>
    )
}


export default About_me;