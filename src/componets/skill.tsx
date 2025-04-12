import React from "react";
import { VStack, Heading, Text, HStack } from "@chakra-ui/react";
import { FaVuejs, FaReact,FaUbuntu,FaGithub  } from "react-icons/fa";
import { SiRockylinux, SiJavascript, SiAndroidstudio, SiIntellijidea } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandKotlin } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaNode } from "react-icons/fa6";
import { MdCss } from "react-icons/md";
const Skill = () => {
    return (
        <div  id='skill' className="h-full" style={{ padding: "10%", backgroundColor: "#DCE2F0" }}>
            <Heading size='3xl'>DEVELOPMENT SKILLS</Heading>
            <br />
            <Text fontSize='xl'>아래에 있는 것들은 제가 프로젝트를 할때 써본 기술들입니다.</Text>
            <Text fontSize='xl'>그래서 다른 프로젝트에 빠르게 적용이 가능합니다.</Text>
            <div className="jb-division-line" />
            <Heading size='lg'>lang / FrameWork</Heading>
            <br />
            <div className="grid justify-items-stretch lg:flex lg:grid-cols-4 grid-rows-9 sm:grid-rows-2 gap-7">
                <div>
                    <VStack>
                        <HStack>
                            <FaVuejs style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Vue</Heading>
                        </HStack>
                        <Text fontSize='xl'>웹개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <FaReact style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>React</Heading>
                        </HStack>
                        <Text fontSize='xl'>웹개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <SiJavascript style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Javascript</Heading>
                        </HStack>
                        <Text fontSize='xl'>프론트및 백엔드 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <BsBootstrapFill style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Bootstrap</Heading>
                        </HStack>
                        <Text fontSize='xl'>프론트 디자인활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <TiHtml5 style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Html</Heading>
                        </HStack>
                        <Text fontSize='xl'>웹 개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <TbBrandKotlin style={{ height: "2.5=rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Kotlin</Heading>
                        </HStack>
                        <Text fontSize='xl'>안드로이드 개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <FaNode style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Node.js</Heading>
                        </HStack>
                        <Text fontSize='lg'>CLI/Express Api/사이트 개발</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <MdCss style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>CSS</Heading>
                        </HStack>
                        <Text fontSize='xl'>웹디자인 활용</Text>
                    </VStack>
                </div>
                {/* <div>
                    <VStack>
                        <HStack>
                            <IoLogoIonic style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Ionic</Heading>
                        </HStack>
                        <Text fontSize='xl'>웹앱 개발 활용</Text>
                    </VStack>
                </div> */}
            </div>
            <br />
            <div className="jb-division-line" />
            <Heading size='lg'>IDE</Heading>
            <br />
            <div className="grid justify-items-stretch  lg:flex lg:grid-cols-4 grid-rows-4 sm:grid-rows-1 gap-7">
                <div>
                    <VStack>
                        <HStack>
                            <DiVisualstudio style={{ height: "2rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Visual studio</Heading>
                        </HStack>
                        <Text fontSize='xl'>C/C++ 개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <VscVscode  style={{ height: "2rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Visual studio Code</Heading>
                        </HStack>
                        <Text fontSize='xl'>웹 개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <SiIntellijidea style={{ height: "2rem", width: 'auto' }} />
                            <Heading fontSize='xl'>intellij</Heading>
                        </HStack>
                        <Text fontSize='lg'>코틀린/자바 단일 개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <SiAndroidstudio style={{ height: "2rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Android studio</Heading>
                        </HStack>
                        <Text fontSize='xl'>안드로이드 앱 개발 활용</Text>
                    </VStack>
                </div>
            </div>
            <div className="jb-division-line" />
            <Heading size='lg'>other</Heading>
            <br />
            <div className=" grid justify-items-stretch lg:flex   lg:grid-cols-4 grid-rows-4 sm:grid-rows-1 gap-7">
                <div>
                    <VStack>
                        <HStack>
                            <FaUbuntu  style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Ubuntu</Heading>
                        </HStack>
                        <Text fontSize='xl'>서버 운용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <SiRockylinux   style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Rocky Linux</Heading>
                        </HStack>
                        <Text fontSize='xl'>서버 운용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <FaGithub    style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Github</Heading>
                        </HStack>
                        <Text fontSize='xl'>프로젝트 협업 활용</Text>
                    </VStack>
                </div>
            </div>
        </div>
    )
}

export default Skill;
