import React from "react";
import { Heading,Text  } from "@chakra-ui/react";
const Skill = () => {
    return (
        <div className="h-full" style={{ padding: "10%", backgroundColor: "#87C4FF" }}>
            <Heading size='3xl'>DEVELOPMENT SKILLS</Heading>
            <br/>
            <Text fontSize='xl'>아래에 있는 것들은 제가 프로젝트를 할때 써본 기술들입니다.</Text>
            <Text fontSize='xl'>그래서 다른 프로젝트에 가도 코드를 이해할수 있습니다.</Text>
            <div className="jb-division-line"/>
        </div>
    )
}

export default Skill;