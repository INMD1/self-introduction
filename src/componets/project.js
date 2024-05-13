import { Text, Image, Stack, Divider, Heading, Link, Button, Card, CardBody, CardFooter, ButtonGroup, CardHeader } from '@chakra-ui/react'
import { useState } from 'react';
import jsondata from './data/index.json'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from '@chakra-ui/react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa6";

const Project = () => {
    const [data, setData] = useState({
        "title": "None",
        "body": "프로젝트를 선택해주세요.",
        "imageurl": "/image/403.webp",
        "size": "45%",
        "url": "#"
    });

    function changedata(number) {
        setData(jsondata[number])
    }

    return (
        <div id='project' className='h-full p-10 sm:pl-52 sm:pr-52' style={{ backgroundColor: "#EEF5FF" }}>
            <div className='grid grid-rows-3 grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='row-span-1 col-span-1 md:col-span-2'>
                    <Heading size="3xl">Project</Heading>
                    <br />
                    <Text fontSize='xl' >이번 구역은 제가 이때까지 해왔던 프로젝트를 소개하는 곳입니다.</Text>
                </div>
                <div className='row-span-2'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={data.imageurl}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{data.title}</Heading>
                                <Text>
                                    {data.body}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Link href={data.url}>
                                    <Button variant='solid' colorScheme='blue' >
                                        <FaGithub /> 레포 페이지 방문
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
                <div className='row-span-2 col-span-1'>
                    <Card style={{ height: "50vh", overflowY: "auto" }}>
                        <CardHeader>
                            <Text fontSize='sm'>만든 분야를 크게 분류하면..</Text>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <BreadcrumbLink fontSize="xl">Web</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink fontSize="xl">Android</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink fontSize="xl">Api</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </CardHeader>
                        <Divider />
                        <CardBody >
                            {/* 여기서 부터는 리스트로 불려옴 */}
                            <div>
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' onClick={() => { changedata(0); }}>
                                    <Heading size='md' my='2'>
                                        <LinkOverlay >
                                            self-introduction
                                        </LinkOverlay>
                                    </Heading>
                                    <Text>
                                        영원히 완성이 되지 않는 레포
                                    </Text>
                                </LinkBox>
                                <br />
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' onClick={() => { changedata(1); }}>
                                    <Heading size='md'>
                                        <LinkOverlay>
                                            APSU
                                        </LinkOverlay>
                                    </Heading>
                                    <Text>
                                        군 내 병영관리 시스템
                                    </Text>
                                </LinkBox>
                                <br />
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' onClick={() => { changedata(2); }}>
                                    <Heading size='md' my='2'>
                                        <LinkOverlay>
                                            Algorithm-web-view
                                        </LinkOverlay>
                                    </Heading>
                                    <Text>
                                        문제의 답을 보여주는 곳
                                    </Text>
                                </LinkBox>
                                <br />
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' onClick={() => { changedata(3); }}>
                                    <Heading size='md' my='2'>
                                        <LinkOverlay>
                                            server-dashboard
                                        </LinkOverlay>
                                    </Heading>
                                    <Text>
                                        서버 관리툴
                                    </Text>
                                </LinkBox>
                                <br />
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' onClick={() => { changedata(4); }}>
                                    <Heading size='md' my='2'>
                                        <LinkOverlay>
                                            DoD_DashBoard
                                        </LinkOverlay>
                                    </Heading>
                                    <Text>
                                        동아리 학교 정보 확인 사이트
                                    </Text>
                                </LinkBox>
                                <br />
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' onClick={() => { changedata(5); }}>
                                    <Heading size='md' my='2'>
                                        <LinkOverlay>
                                            deu_food_gui-widget-only
                                        </LinkOverlay>
                                    </Heading>
                                    <Text>
                                        메인화면에서 바로 볼수 있는 위젓
                                    </Text>
                                </LinkBox>
                                <br />
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' onClick={() => { changedata(6); }}>
                                    <Heading size='md' my='2'>
                                        <LinkOverlay>
                                        Computer-API
                                           
                                        </LinkOverlay>
                                    </Heading>
                                    <Text>
                                         server-dashboard에 필요한 API입니다.
                                    </Text>
                                </LinkBox>
                                <br />
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' onClick={() => { changedata(8); }}>
                                    <Heading size='md' my='2'>
                                        <LinkOverlay>
                                            Deu_food_api
                                        </LinkOverlay>
                                    </Heading>
                                    <Text>
                                        동의대 학식 또는 기숙사 식단을 가져옴니다.

                                    </Text>
                                </LinkBox>
                            </div>

                        </CardBody>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Project;
