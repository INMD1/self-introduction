import { Card, CardHeader, CardBody, CardFooter, Text, Image, Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'

const Project = () => {
    return (
        <div className="h-full" style={{ padding: "5%", paddingTop: "25vh", backgroundColor: "#548CA8" }}>
            <Card>
                <CardBody>
                    <div className='grid gap-10 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1'>
                        <Image src='/image/1p.webp'></Image>
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>1</Tab>
                                    <Tab>2</Tab>
                                    <Tab>3</Tab>
                                    <Tab>4</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Heading size="lg">DEU-Widget</Heading>
                                        <br/>
                                        <Text fontSize="md">
                                            이 프로젝트는 동의대학교 여러가지 앱에서 자주 이용하는 앱하고 학식을 스마트폰 메인페이지에서 먼저 보이게 하면 어떨까
                                            해서 만들었습니다. 동의모바일하고 동의대출결앱을 바로 갈수 있게 버튼을 만들고 학식을 볼수있게 리스트를 만들었습니다.
                                        </Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                </TabPanels>
                                <Text fontSize="xs">좀더 보고싶으면 깃허브를 방문해주세요!</Text>
                            </Tabs>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Project;