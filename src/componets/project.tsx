import React from "react";
import { Text, Image, Stack, Heading, Link, Button } from "@chakra-ui/react";
import { useState } from "react";
// import jsondata from "./data/index.json";
import { FaGithub } from "react-icons/fa6";
import { Tabs } from "@chakra-ui/react";
const Project = () => {
  const [data] = useState({
    title: "None",
    body: "프로젝트를 선택해주세요.",
    imageurl: "/image/403.webp",
    size: "45%",
    url: "#",
  });

  return (
    <div
      id="project"
      className="h-full p-10 sm:p-44"
      style={{ backgroundColor: "#EEF5FF" }}
    >
      <div className="flex grid gap-0 pt-24 grid-rows-2  grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-10 sm:pt-0">
        <div
          className="row-span-2 col-span-4 pt-8 sm:col-span-1 sm:pt-0"
          style={{
            backgroundColor: "#B4D4FF",
            borderRadius: "3%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            className="sm:w-7/12"
            src={data.imageurl}
            style={{
              height: "auto",
              objectFit: "contain",
              padding: "8%",
            }}
          />
          <br />

          <Stack direction="row" justify="center">
            <div className="mx-0 p-5 sm:mx-20">
              <Heading size="lg">{data.title}</Heading>
              <br />
              <Text className="" fontSize="md">
                {data.body}
                <br />
                <br />
                <Link>
                  <Button color="black">
                    <FaGithub /> Github View
                  </Button>
                  <br />
                  <br />
                  <br />
                </Link>
              </Text>
            </div>
          </Stack>
        </div>
        <div className="row-span-1 col-span-4 pt-9 sm:col-span-1 sm:row-span-2  sm:pt-0">
          <Heading size="2xl" className="pb-2">
            Projects
          </Heading>
          <Text fontSize="lg">이때까지 제가 만든 프로젝트들을 소개합니다.</Text>
          <br />
          <Tabs.Root isLazy>
            <Tabs.List>
              <Tabs.Indicator>Web/Webapp</Tabs.Indicator>
              <Tabs.Indicator>Android</Tabs.Indicator>
              <Tabs.Indicator>Api</Tabs.Indicator>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default Project;
