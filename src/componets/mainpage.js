import { Grid, GridItem, Box, Image, Center } from "@chakra-ui/react";

function mainpage() {
    return (
        //반응형 적용
        <div class="grid lg:grid-rows-3 md:grid-flow-col gap-4" style={{paddingTop: "10vh", height: "90vh"}}>
            <div class="row-span-3 border-2 bg-sky-500">1번째 레이어</div>
            <div class="border-2 bg-sky-500">2번째 레이어</div>
            <div class="row-span-2  bg-sky-500">3번째 레이어</div>
        </div>
    )
}

export default mainpage;