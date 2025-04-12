import React from "react";
import { Text, Image, Stack, Heading, Link, Button } from "@chakra-ui/react";
import { useState } from "react";
import jsondata from "./data/index.json";
import { FaGithub } from "react-icons/fa6";
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
      <div className=" grid gap-0 pt-24 grid-rows-2 lg:flex grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-10 sm:pt-0">
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
          {/* //본문 내용 삽입할 공간 */}
          <Stack direction="row" justify="center"></Stack>
        </div>
        <div className="row-span-1 col-span-4 pt-9 sm:col-span-1 sm:row-span-2  sm:pt-0">
          <Heading size="2xl" className="pb-2">
            Projects
          </Heading>
          <Text fontSize="lg">이때까지 제가 만든 프로젝트들을 소개합니다.</Text>
        </div>
      </div>
    </div>
  );
};

export default Project;
