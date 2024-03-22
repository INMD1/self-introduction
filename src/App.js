import NavBar from "./componets/Header";
import Firstpage from "./componets/mainpage";
function App() {
  return (
    <div className="App">
      <header style={{ width: "100vw" }}>
        <NavBar />
      </header>
      <div style={{ height: "100vh" }}>
        <Firstpage />
      </div>
    </div>
  );
}

export default App;
