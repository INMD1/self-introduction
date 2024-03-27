import { Text, Image, Stack, Divider, Heading, Center } from '@chakra-ui/react'

const Project = () => {
    return (
        <div className='h-full pt-24 sm:pt-44' style={{ padding: "5%", backgroundColor: "#548CA8" }}>
            <div className='flex grid auto-row-max gap-0 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 sm:gap-16'>
                <div className='row-span-2 col-span-3  order-2 sm:col-span-2 sm:order-none'>
                        <Image height="40%" src='/image/1p.webp' ></Image>
                    <br />
                    <Stack direction='row'>
                        <Divider orientation='vertical' />
                        <div>
                            <Heading size="lg">DEU-Widget</Heading>
                            <br />
                            <Text fontSize="md">
                                이 프로젝트는 동의대학교 여러가지 앱에서 자주 이용하는 앱하고 학식을 스마트폰 메인페이지에서 먼저 보이게 하면 어떨까
                                해서 만들었습니다. 동의모바일하고 동의대출결앱을 바로 갈수 있게 버튼을 만들고 학식을 볼수있게 리스트를 만들었습니다.
                            </Text>
                        </div>
                    </Stack>
                </div>
                <div className='col-span-3 order-1 sm:col-span-1 sm:order-none'>
                    <Heading size='xl'>Projects</Heading>
                    <Text fontSize="sm">만든 프로젝트들 중 대표적인 몇가지를 표시합니다.</Text>
                </div>
            </div>

        </div>
    )
}

export default Project;