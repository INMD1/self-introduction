import React from "react";
import {
  Center,
  Heading,
  Image,
  Text,
  Button,
  HStack,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { BiArrowToRight } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function mainpage() {
  return (
    <div
      className="w-full h-full grid  sm:grid-rows-2 sm:grid-flow-col sm:gap-4 items-stretch  place-content-center "
      style={{ padding: "10%", backgroundColor: "#FEFDED" }}
    >
      <div className=" order-2 col-span-2  self-center sm:row-span-3 sm:order-none sm:pb-28">
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
        <div className="pt-5">
          <HStack>
            <Link href="#skill">
              {" "}
              <Button colorScheme="green">
                <BiArrowToRight />
              </Button>
            </Link>
            <Text>저는 무엇을 할수 있는지 가볼까요?</Text>
          </HStack>
        </div>
      </div>

      <div className="order-1 col-span-2 self-end mb-5 sm:order-none ">
        <Center>
          <Image
            className="rounded-full w-auto h-56 md:h-80"
            src="./logo.png"
          />
        </Center>
      </div>

      <div className="order-3 col-span-2 sm:order-none">
        <Center>
        <br/>
        <br/>
          <Heading size="lg">Contact(연락처)</Heading>
        </Center>
        <HStack spacing="5vh" className="pt-5 sm:m-5">
          <Center>
            <Box className="h-20 sm:h-42">
              <VStack>
                <BsDiscord style={{ height: "1rem", width: "auto" }} />
                <Text>Discord</Text>
                <Text>ubuntu22.04.1lts</Text>
              </VStack>
            </Box>
          </Center>
          <Center>
            <Box className="w-full h-20 sm:h-42">
              <VStack>
                <MdOutlineEmail style={{ height: "1rem", width: "auto" }} />
                <Text>Email</Text>
                <Link href="mailto:lyw514549@gmail.com">
                  lyw514549@gmail.com
                </Link>
              </VStack>
            </Box>
          </Center>
        </HStack>
      </div>
    </div>
  );
}

export default mainpage;
