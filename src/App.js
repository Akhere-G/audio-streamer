import React from "react";
import { AudioRecorder } from "./components";
import { Container, Wrapper } from "./styles";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Audio Recording App</h1>
        <AudioRecorder />
      </Wrapper>
    </Container>
  );
};

export default App;
