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
      className="w-full h-full grid gap-x-16 md:grid-rows-2 md:grid-flow-col place-content-center "
      style={{ padding: "6%", backgroundColor: "#FEFDED" }}
    >
      <div className="order-2 col-span-2 self-center md:row-span-3 md:order-none md:pb-28">
        <p className="mainpage_title">Hello World!</p>
        <Heading size="md">여러분들 반가워요!_👋</Heading>
        <br />
        <Heading size="lg">저는 INMD1 이고</Heading>
        <br />
        <Text>현재 대학교에서 응용소프트웨어를 전공하고 있는</Text>
        <Text>백엔드,프론트 지식을 가지고 있는 원하는걸</Text>
        <Text>개발하는 개발자 입니다.</Text>
        <div className="flex items-center pt-5">
          <Link href="#skill" className="pr-10">
            <Button colorScheme="green">
              <BiArrowToRight />
              GOTO!
            </Button>
          </Link>
        </div>
      </div>
      <div className="order-1 col-span-2 self-end mb-5 md:order-none ">
        <Center>
          <Image
            className="rounded-full w-auto h-56 md:h-80"
            src="./logo.png"
          />
        </Center>
      </div>
      <div className="order-3 col-span-2 md:order-none">
        <Center className="pt-10">
          <Heading size="lg">Contact(연락처)</Heading>
        </Center>
        <div className="flex justify-center gap-5 mt-5">
          <Center>
            <Box className="h-20 md:h-42">
              <VStack>
                <BsDiscord style={{ height: "1rem", width: "auto" }} />
                <Text>Discord</Text>
                <Text>INMD</Text>
              </VStack>
            </Box>
          </Center>
          <Center>
            <Box className="w-full h-20 md:h-42">
              <VStack>
                <MdOutlineEmail style={{ height: "1rem", width: "auto" }} />
                <Text>Email</Text>
                <Link href="mailto:lyw514549@gmail.com">lyw514549(gmail)</Link>
              </VStack>
            </Box>
          </Center>
        </div>
      </div>
    </div>
  );
}

export default mainpage;
