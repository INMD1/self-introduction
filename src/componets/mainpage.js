import { Center, Heading, Image } from '@chakra-ui/react'

function mainpage() {
    return (
        //반응형 적용
        <div class="grid lg:grid-rows-3 md:grid-flow-col gap-4" style={{ padding: "10%", backgroundColor: "#F8F1F1" }}>
            <div class="lg:row-span-3 col-span-3 p-10" style={{borderRadius: "5%", backgroundColor: "#9BB8CD"}}>
                <Heading size='2xl' >Hello World!</Heading>
            </div>
            <div class="lg:row-span-2 col-span-2" >
                <Center>
                    <Image style={{borderRadius: "50%", height: "40vh"}} src='https://avatars.githubusercontent.com/u/87979171?v=4'/>
                </Center>
            </div>
            <div class="col-span-2 border-2" >3번째 레이어</div>
        </div>
    )
}

export default mainpage;