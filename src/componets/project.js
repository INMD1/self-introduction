import { Text, Image, Stack, VStack, Heading, Center, Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Project = () => {
    return (
        <div className='h-full p-10 sm:p-72' style={{ backgroundColor: "#EEF5FF" }}>
            <div className='flex grid gap-0 grid-rows-2 sm:grid-cols-3 sm:grid-rows-2 sm:gap-16'>
                <div className='row-span-2 col-span-3 pt-5 content-center sm:col-span-2 sm:pt-0' style={{ backgroundColor: "#B4D4FF", borderRadius: "5%" }}>
                    <Image height="32%" src='/image/1p.webp' style={{ margin: "auto" }} ></Image>
                    <br />
                    <Stack direction='row'>
                        <div className='mx-0 p-5 sm:mx-20' >
                            <Heading size="lg">DEU-Widget</Heading>
                            <br />
                            <Text className='' fontSize="md">
                                이 프로젝트는 동의대학교 여러가지 앱에서 자주 이용하는 앱하고 학식을 스마트폰 메인페이지에서 먼저 보이게 하면 어떨까
                                해서 만들었습니다. 동의모바일하고 동의대출결앱을 바로 갈수 있게 버튼을 만들고 학식을 볼수있게 리스트를 만들었습니다.
                            </Text>
                        </div>
                    </Stack>
                </div>
                <div className='row-span-1 col-span-3 pt-9 sm:col-span-1 sm:row-span-2  sm:pt-0' >
                    <Heading size='2xl' className='pb-2'>Projects</Heading>
                    <Text fontSize="lg">제가 만든 프로젝트로 볼래요?</Text>
                    <br />
                    <Tabs isLazy>
                        <TabList>
                            <Tab>Web&*Webapp</Tab>
                            <Tab>Android</Tab>
                            <Tab>Api</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <VStack align='stretch'>
                                    <Button>self-introduction</Button>
                                    <Button>APSU</Button>
                                    <Button>Algorithm-web-view</Button>
                                    <Button>server-dashboard</Button>
                                    <Button>DoD_DashBoard</Button>
                                </VStack>
                            </TabPanel>
                            <TabPanel>
                                <VStack align='stretch'>
                                    <Button>deu_food_gui-widget-only </Button>
                                </VStack>
                            </TabPanel>
                            <TabPanel>
                                <VStack align='stretch'>
                                    <Button>Computer-API</Button>
                                    <Button>deu-Dorm-meal</Button>
                                    <Button>Deu_food_api</Button>
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}

export default Project;