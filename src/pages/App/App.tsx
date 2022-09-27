import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import FirstSlide from "../FirstSlide/FirstSlide";
import SecondSlide from "../SecondSlide/SecondSlide";
import ThirdSlide from "../ThirdSlide/ThirdSlide";
import { AppContainer } from "./style";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
    </AppContainer>
  );
}

export default App;
