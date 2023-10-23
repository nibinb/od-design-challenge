import React from 'react';
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalFonts from "./assets/fonts/fonts";
import AccordionCard from "./components/AccordionCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <AccordionCard />
    </ThemeProvider>
  </React.StrictMode>
);