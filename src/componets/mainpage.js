import {
  Center,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  Button,
  HStack
} from "@chakra-ui/react";
function mainpage() {
  //mobile none -> middle md:max -> PC sm
  return (
    <div
      className="h-full flex grid justify-items-stretch lg:grid-cols-6 grid-rows-9 sm:grid-rows-5 gap-8 pt-10"
      style={{ padding: "10%", backgroundColor: "#F8F1F1" }}
    >
      <div className="col-span-3 row-span-6 order-3 md:max-lg:col-span-2 sm:order-none self-center">
        <Heading size="2xl">Hello World!</Heading>
        <Heading size="lg">여러분들 반가워요!_👋</Heading>
        <br />
        <Heading size="lg">저는 INMD1 이고</Heading>
        <br />
        <Text fontSize="xl">
          현재 대학교에서 응용소프트웨어를 전공하고 있는
        </Text>
        <Text fontSize="xl">
          백엔드 지식을 가지고 있는 프론트 개발자 입니다.
        </Text>
        <div className="p-5">
          <HStack>
            <Button>>></Button>
            <Text>다음 단계로 가볼까요?</Text>
          </HStack>
        </div>
      </div>
      {/* 이미지 들어가는 곳 */}
      <div className="row-span-3 col-span-3 order-1 md:max-lg:col-span-1 pt-10 sm:col-span-3 sm:order-none sm:pt-5">
        <Center>
          <Image
            className="rounded-full w-auto h-56  md:h-80"
            src="./logo.png"
          />
        </Center>
      </div>
      {/* 연락처 들어가는 곳 */}
      <div className="p-5 row-span-1 order-2 sm:order-none sm:row-span-3 col-span-3 ">
        <Heading size="lg">Contact</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <GridItem className="w-full h-full" bg="blue.500">
            <Center>
              디스코드
            </Center>
          </GridItem>
          <GridItem className="w-full h-full " bg="blue.500">
            <Center>
              이메일
            </Center>
          </GridItem>
          <GridItem className="w-full h-full " bg="blue.500">
            <Center>
              Linkdin
            </Center>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}

export default mainpage;
