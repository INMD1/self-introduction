import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

const projects = [
  {
    id: 1,
    title: '개인 포트폴리오 웹사이트',
    description: 'React와 Tailwind CSS를 사용하여 제작한 반응형 개인 포트폴리오 사이트입니다. 저의 기술 스택과 프로젝트 경험을 시각적으로 보여줍니다.',
    link: '#',
  },
  {
    id: 2,
    title: '팀 협업용 칸반 보드',
    description: '드래그 앤 드롭 기능을 갖춘 업무 관리 도구입니다. Firebase를 연동하여 실시간 데이터 동기화를 구현했습니다.',
    link: '#',
  },
  {
    id: 3,
    title: '실시간 날씨 정보 앱',
    description: '공공 API를 활용하여 현재 위치의 날씨 정보를 알려주는 웹 애플리케이션입니다. 사용자의 위치 정보를 기반으로 동적으로 데이터를 가져옵니다.',
    link: '#',
  },
  {
    id: 4,
    title: '온라인 쇼핑몰 클론',
    description: 'Next.js를 사용하여 서버 사이드 렌더링을 구현한 이커머스 플랫폼입니다. 상품 목록, 장바구니, 결제 기능을 포함하고 있습니다.',
    link: '#',
  },
];

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
      className="h-full p-10 sm:p-40"
      style={{ backgroundColor: "#EEF5FF" }}
    >
      {/* --- 프로젝트 목록 섹션 --- */}
      <h2 className="text-6xl font-bold tracking-tight mb-16">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => window.open(project.link, '_blank')}
              >
                자세히 보기
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
