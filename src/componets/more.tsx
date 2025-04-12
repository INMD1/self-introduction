import React from 'react';
import { HStack, Card, VStack, List, Text, Heading, Center, Link } from '@chakra-ui/react'
import { FaBoxArchive } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const More = () => {
    return (
        <div className="p-10 sm:p-48" style={{ backgroundColor: "#749BC2" }}>
            <div className='pb-10'>
                <center>
                    <Heading size="4xl">Some More?</Heading>
                    <Text as="b" fontSize="xl">좀 더 저에 대해서 알고 싶나요? 밑에 사이트를 방문해주세요!</Text>
                </center>
            </div>
            <div className='flex grid gap-10 sm:grid-cols-2'>
                <div className='grid-cols-1'>
                    <Card.Root>
                        <Card.Body>
                            <Center>
                                <VStack>
                                    <HStack>
                                        <FaGithubSquare  style={{ height: '6vh', width: 'auto' }} />
                                        <Heading size="xl">Github</Heading>
                                    </HStack>
                                    <Link href='https://github.com/INMD1'><Text>https://github.com/INMD1</Text></Link>
                                    <Text>코딩 문제를 풀고 소스코드를 공개하는 사이트</Text>
                                    <List.Root>
                                        <List.Item>백준 문제 소스코드</List.Item>
                                        <List.Item>라비다 문제 소스코드</List.Item>
                                        <List.Item>Ascode 문제 소스코드</List.Item>
                                    </List.Root>
                                </VStack>
                            </Center>
                        </Card.Body>
                    </Card.Root>
                </div>
                <div className='grid-cols-1'>
                    <Card.Root>
                        <Card.Body>
                            <Center>
                                <VStack>
                                    <HStack>
                                        <FaBoxArchive style={{ height: '6vh', width: 'auto' }} />
                                        <Heading size="xl">Amview</Heading>
                                    </HStack>
                                    <Link href='https://amview.powerinmd.com'><Text>https://amview.powerinmd.com</Text></Link>
                                    <Text>코딩 문제를 풀고 소스코드를 공개하는 사이트</Text>

                                    <List.Root>
                                        <List.Item>백준 문제 소스코드</List.Item>
                                        <List.Item>라비다 문제 소스코드</List.Item>
                                        <List.Item>Ascode 문제 소스코드</List.Item>
                                    </List.Root>
                                </VStack>
                            </Center>
                        </Card.Body>
                    </Card.Root>
                </div>
            </div>
        </div>

    )
}

export default More