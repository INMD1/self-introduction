import NavBar from "./componets/Header";
import Firstpage from "./componets/mainpage";
import Skill from "./componets/skill";
function App() {
  return (
    <div className="App">
      <header style={{ width: "100vw" }}>
        <NavBar />
      </header>
      <div style={{ height: "100vh"}}>
        <Firstpage />
      </div>
      <div style={{ height: "100vh"}}>
        <Skill/>
      </div>
    </div>
  );
}

export default App;
