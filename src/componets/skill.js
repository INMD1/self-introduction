import React from "react";
import { VStack, Heading, Text, HStack } from "@chakra-ui/react";
import { FaVuejs,FaReact  } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandKotlin } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaNode } from "react-icons/fa6";
import { MdCss } from "react-icons/md";

const Skill = () => {
    return (
        <div className="h-full" style={{ padding: "10%", backgroundColor: "#87C4FF" }}>
            <Heading size='3xl'>DEVELOPMENT SKILLS</Heading>
            <br />
            <Text fontSize='xl'>아래에 있는 것들은 제가 프로젝트를 할때 써본 기술들입니다.</Text>
            <Text fontSize='xl'>그래서 다른 프로젝트에 가도 코드를 이해할수 있습니다.</Text>
            <div className="jb-division-line" />
            <Heading size='lg'>lang / FrameWork / CMS</Heading>
            <br />
            <div class="flex grid justify-items-stretch lg:grid-cols-4 grid-rows-9 sm:grid-rows-5 gap-6">
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
                            <FaReact  style={{ height: "2.5rem", width: 'auto' }} />
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
                            <BsBootstrapFill  style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Bootstrap</Heading>
                        </HStack>
                        <Text fontSize='xl'>프론트 디자인활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <TiHtml5    style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Html</Heading>
                        </HStack>
                        <Text fontSize='xl'>웹 개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <TbBrandKotlin    style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Kotlin</Heading>
                        </HStack>
                        <Text fontSize='xl'>안드로이드 개발 활용</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <FaNode    style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>Node.js</Heading>
                        </HStack>
                        <Text fontSize='xl'>CLI, Express Api/사이트 개발</Text>
                    </VStack>
                </div>
                <div>
                    <VStack>
                        <HStack>
                            <MdCss     style={{ height: "2.5rem", width: 'auto' }} />
                            <Heading fontSize='xl'>CSS</Heading>
                        </HStack>
                        <Text fontSize='xl'>웹디자인 활용</Text>
                    </VStack>
                </div>
            </div>
        </div>
    )
}

export default Skill;