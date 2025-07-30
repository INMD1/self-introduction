import React from "react";
import { FaVuejs, FaReact, FaUbuntu } from "react-icons/fa";
import {
  SiRockylinux,
  SiJavascript,
  SiAndroidstudio,
  SiIntellijidea,
  SiProxmox,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandKotlin } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";

const Skill = () => {
  return (
    <div
      id="skill"
      className="h-full"
      style={{ padding: "10%", backgroundColor: "#DCE2F0" }}
    >
      <p className="text-6xl font-bold">DEVELOPMENT SKILLS</p>
      <br />
      <p>아래에 있는 것들은 제가 프로젝트를 할때 써본 기술들입니다.</p>
      <p>다른 업무나 협업 할때 쉽게 프로젝트를 이해할수 있습니다.</p>
      <div className="jb-division-line" />
      <p className="font-bold text-3xl">lang / FrameWork</p>
      <br />
      <div className="grid md:grid-flow-col md:grid-rows-2 gap-7">
        <div className="grid justify-center justify-items-center">
          <FaVuejs style={{ height: "2.5rem", width: "auto" }} />
          <p className="font-bold">Vue</p>
          <p>웹개발 활용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <FaReact style={{ height: "2.5rem", width: "auto" }} />
          <p className="font-bold">React</p>
          <p>웹개발 활용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <SiJavascript style={{ height: "2.5rem", width: "auto" }} />
          <p className="font-bold">Javascript</p>
          <p>프론트및 백엔드 활용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <BsBootstrapFill style={{ height: "2.5rem", width: "auto" }} />
          <p className="font-bold">Bootstrap</p>
          <p>프론트 디자인활용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <TbBrandKotlin style={{ height: "2.5=rem", width: "auto" }} />
          <p className="font-bold">Kotlin</p>
          <p>안드로이드 개발 활용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <FaNode style={{ height: "2.5rem", width: "auto" }} />
          <p className="font-bold">Node.js</p>
          <p>CLI/Express Api/사이트 개발</p>
        </div>
      </div>
      <br />
      <div className="jb-division-line" />
      <p className="font-bold text-3xl">IDE</p>
      <br />
      <div className="grid md:grid-flow-col gap-7">
        <div className="grid justify-center justify-items-center">
          <DiVisualstudio style={{ height: "2rem", width: "auto" }} />
          <p className="font-bold">Visual studio</p>

          <p>C/C++ 개발 활용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <VscVscode style={{ height: "2rem", width: "auto" }} />
          <p className="font-bold">Visual studio Code</p>

          <p>웹 개발 활용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <SiIntellijidea style={{ height: "2rem", width: "auto" }} />
          <p className="font-bold">intellij</p>

          <p>코틀린/자바 단일 개발 활용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <SiAndroidstudio style={{ height: "2rem", width: "auto" }} />
          <p className="font-bold">Android studio</p>

          <p>안드로이드 앱 개발 활용</p>
        </div>
      </div>
      <div className="jb-division-line" />
      <p className="font-bold text-3xl">Other</p>
      <br />
      <div className=" grid md:grid-flow-col gap-7">
        <div className="grid justify-center justify-items-center">
          <FaUbuntu style={{ height: "2.5rem", width: "auto" }} />
          <p className="font-bold">Ubuntu</p>
          <p>서버 운용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <SiRockylinux style={{ height: "2.5rem", width: "auto" }} />
          <p className="font-bold">Rocky Linux</p>
          <p>서버 운용</p>
        </div>
        <div className="grid justify-center justify-items-center">
          <SiProxmox style={{ height: "2.5rem", width: "auto" }} />
          <p className="font-bold">Proxmox</p>
          <p>서버 운용</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
