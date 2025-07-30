import NavBar from "../components/Header";
import Firstpage from "../components/mainpage";
import Skill from "../components/skill";
import More from "../components/more";
import Project from "../components/project";

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
      <More />
    </div>
  );
}

export default App;
