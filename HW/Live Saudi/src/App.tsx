import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./componnet/Nav";
import Foot from "./componnet/Foot";
import { Container } from "@chakra-ui/react";
import HomeContent from "./componnet/HomeContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Container maxW={"5xl"}>
        
        <HomeContent/>
      </Container>
      <Foot />
    </div>
  );
}

export default App;
