import { Center, Image } from '@chakra-ui/react'

function mainpage() {
    return (
        //반응형 적용
        <div class="grid lg:grid-rows-3 md:grid-flow-col gap-4" style={{ padding: "10%", backgroundColor: "#F8F1F1" }}>
            <div class="lg:row-span-3 border-2 bg-sky-500"></div>
            <div class="lg:row-span-2">
                <Center>
                    <Image style={{borderRadius: "50%"}} src='https://avatars.githubusercontent.com/u/87979171?v=4'/>
                </Center>
            </div>
            <div class="bg-sky-500">3번째 레이어</div>
        </div>
    )
}

export default mainpage;