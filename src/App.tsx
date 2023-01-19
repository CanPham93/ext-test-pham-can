import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import createRoutes from "./routes";
import "./App.scss";

const ButtonGoTop = styled("button")(() => ({
  position: "fixed",
  bottom: 30,
  right: 20,
  padding: 0,
  background: "transparent",
  border: "none",
  width: 48,
  height: 48,
  outline: "none",
  cursor: "pointer"
}));

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="App">
      {createRoutes()}
      <ButtonGoTop
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <img width="100%" height="100%" src="/icons/component_scroll.png" alt="" />
      </ButtonGoTop>
    </div>
  );
}

export default App;
