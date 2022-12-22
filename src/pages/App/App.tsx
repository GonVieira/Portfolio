import React, { useState, useEffect } from "react";
import GoToTopButton from "../../components/TopButton/GoToTopButton";
import FirstSlide from "../FirstSlide/FirstSlide";
import Footer from "../Footer/Footer";
import FourthSlide from "../FourthSlide/FourthSlide";
import SecondSlide from "../SecondSlide/SecondSlide";
import ThirdSlide from "../ThirdSlide/ThirdSlide";
import { AppContainer } from "./style";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <AppContainer>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <Footer />
      <GoToTopButton isActive={showButton} setIsActive={setShowButton}/>
    </AppContainer>
  );
}

export default App;
