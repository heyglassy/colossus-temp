import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import styled, { css } from "styled-components";

import Frontpage from "./Frontpage";
import Failure from "./Failure";
import Redirect from "./Redirect";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <>
      <Marquee style={{ backgroundColor: "#5F4BDD" }} gradient={true} gradientColor={[0, 0, 28]} speed={10}>
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => <ScrollText key={i}>CONFIDENTIAL DO NOT SHARE</ScrollText>)}
      </Marquee>
      <Router>
        <Routes>
          <Route path="*" element={<Frontpage />} />
        </Routes>
      </Router>
      <Marquee style={{ backgroundColor: "#5F4BDD", marginTop: "80px" }} gradient={true} gradientColor={[0, 0, 28]} speed={10}>
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => <ScrollText key={i}>CONFIDENTIAL DO NOT SHARE</ScrollText>)}
      </Marquee>
    </>
  );
}

export default App;

const ScrollText = styled.p`
  color: #ffffff;
  margin: 5px;
  margin-right: 50px;
`;
