import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { SettingProvider } from "./contexts/SettingContext";
import { DirectProvider } from "./contexts/DirectContext";
import { RecoilRoot } from "recoil";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <SettingProvider>
          <DirectProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </DirectProvider>
        </SettingProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
