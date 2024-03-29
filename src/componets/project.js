import { Text, Image, Stack, VStack, Heading, Center, Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react';
import jsondata from './data/index.json'

const Project = () => {
    const [data, setData] = useState({
        "title": "None",
        "body": "프로젝트를 선택해주세요.",
        "imageurl": "/image/403.webp",
        "size": "45%"
    }); 

    function changedata(number) {
        setData(jsondata[number])
    }

    return (
        <div className='h-full p-10 sm:p-72' style={{ backgroundColor: "#EEF5FF" }}>
            <div className='flex grid gap-0 pt-24 grid-rows-2 sm:grid-cols-3 sm:grid-rows-2 sm:gap-16 sm:pt-0'>
                <div className='row-span-2 col-span-3 pt-10 content-center sm:col-span-2 sm:pt-0' style={{ backgroundColor: "#B4D4FF", borderRadius: "5%" }}>
                    <Image height={data.size} src={data.imageurl} style={{ margin: "auto" }} ></Image>
                    <br />
                    <Stack direction='row'>
                        <div className='mx-0 p-5 sm:mx-20' >
                            <Heading size="lg">{data.title}</Heading>
                            <br />
                            <Text className='' fontSize="md">
                                {data.body}
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
                            <Tab>Web/Webapp</Tab>
                            <Tab>Android</Tab>
                            <Tab>Api</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <VStack align='stretch'>
                                    <Button onClick={() => {changedata(0)}}>self-introduction</Button>
                                    <Button onClick={() => {changedata(1)}}>APSU</Button>
                                    <Button onClick={() => {changedata(0)}}>Algorithm-web-view</Button>
                                    <Button onClick={() => {changedata(0)}}>server-dashboard</Button>
                                    <Button onClick={() => {changedata(0)}}>DoD_DashBoard</Button>
                                </VStack>
                            </TabPanel>
                            <TabPanel>
                                <VStack align='stretch'>
                                    <Button onClick={() => {changedata(0)}}>deu_food_gui-widget-only </Button>
                                </VStack>
                            </TabPanel>
                            <TabPanel>
                                <VStack align='stretch'>
                                    <Button onClick={() => {changedata(0)}}>Computer-API</Button>
                                    <Button onClick={() => {changedata(0)}}>deu-Dorm-meal</Button>
                                    <Button onClick={() => {changedata(0)}}>Deu_food_api</Button>
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