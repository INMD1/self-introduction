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
  Link
} from "@chakra-ui/react";
import { BiArrowToRight } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function mainpage() {


  return (
    <div className="w-full h-full flex grid justify-items-stretch lg:grid-cols-4 grid-rows-9 sm:grid-rows-5 gap-8 pt-10" style={{ padding: "10%", backgroundColor: "#FEFDED" }}>
      {/* Introduction Section */}
      <div className="col-span-3 row-span-6 order-3 md:max-lg:col-span-2 sm:order-none sm:col-span-2 justify-self-end self-center">
        <Heading size="2xl">Hello World!</Heading>
        <Heading size="lg">여러분들 반가워요!_👋</Heading>
        <br />
        <Heading size="lg">저는 INMD1 이고</Heading>
        <br />
        <Text fontSize="xl">현재 대학교에서 응용소프트웨어를 전공하고 있는</Text>
        <Text fontSize="xl">백엔드 지식을 가지고 있는 프론트 개발자 입니다.</Text>
        <div className="pt-5">
          <HStack>
           <Link href="#skill"> <Button colorScheme='green'><BiArrowToRight /></Button></Link>
            <Text>저가 무엇을 할수 있는지 가볼까요?</Text>
          </HStack>
        </div>
      </div>

      {/* Image Section */}
      <div className="row-span-3 col-span-3 order-1 md:max-lg:col-span-1 pt-10 sm:col-span-2 sm:order-none sm:pt-5 ">
        <Center>
          <Image className="rounded-full w-auto h-56 md:h-80" src="./logo.png" />
        </Center>
      </div>

      {/* Contact Section */}
      <div className="row-span-2 col-span-3 order-2 pt-16 sm:order-none sm:row-span-3 sm:pt-0 sm:col-span-2 wrap">
        <Heading size="lg">Contact</Heading>
        <HStack spacing='5vh' className="pt-5 sm:m-5">
          <Center>
            <Box className="h-20 sm:h-42">
              <VStack>
                <BsDiscord style={{ height: "1rem", width: 'auto' }} />
                <Text>Discord</Text>
                <Text>ubuntu22.04.1lts</Text>
              </VStack>
            </Box>
          </Center>
          <Center>
            <Box className="w-full h-20 sm:h-42">
              <VStack>
                <MdOutlineEmail style={{ height: "1rem", width: 'auto' }} />
                <Text>Email</Text>
                <Link href="mailto:lyw514549@gmail.com">lyw514549@gmail.com</Link>
              </VStack>
            </Box>
          </Center>
        </HStack>
      </div>
    </div>
  );
}

export default mainpage;
