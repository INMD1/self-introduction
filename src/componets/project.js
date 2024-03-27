import { Card, CardHeader, CardBody, CardFooter, Text, Image, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Project = () => {
    return (
        <div className="h-full" style={{ padding: "10%", paddingTop: "25vh", backgroundColor: "#548CA8" }}>
            <Card>
                <CardBody>
                    <div className='grid gap-10 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1'>
                        <Image src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'></Image>
                        <div>
                            <Tabs variant='enclosed'>
                                <TabList>
                                    <Tab>1</Tab>
                                    <Tab>2</Tab>
                                    <Tab>3</Tab>
                                    <Tab>4</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <p>one!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            <Text fontSize="xs">좀더 보고싶으면 깃허브를 방문해주세요!</Text>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Project;