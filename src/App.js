import { Container, position } from "@chakra-ui/react";
import NavBar from "./componets/Header";
import Firstpage from "./componets/mainpage";
function App() {
  return (
    <div className="App">
      <header style={{position:'fixed', width: '100vw'}}>
        <NavBar />
      </header>
      <Container maxW='8xl'>
        <Firstpage />
      </Container>
    </div>
  );
}

export default App;
