import NavBar from "./componets/Header";
import Firstpage from "./componets/mainpage";
import Project from "./componets/project";
import Skill from "./componets/skill";
import More from "./componets/more";

function App() {
  return (
    <div className="App">
      <header style={{ width: "100vw" }}>
        <NavBar />
      </header>
      <div style={{ height: "100vh" }}>
        <Firstpage />
      </div>
      <Skill />
      <Project />
      <More/>
    </div>
  );
}

export default App;
