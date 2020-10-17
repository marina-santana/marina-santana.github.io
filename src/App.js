import React from "react";
import Header from "./components/Header/index.js";
import Home from "./pages/Home";
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
