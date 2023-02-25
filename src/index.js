import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode="system" />
    <App />
  </ChakraProvider>
);

reportWebVitals();


// If the darkmode isn't working then follow these steps :
// 1. import extendTheme from chakraUi
// 2. const config = {
//   initialColorMode:"light",
//   useSystemColorMode: false,
// }
// 3. const theme = extendTheme({
//   config,
// });
// 4. In inside indexe.js before the <App/> component use the <ColorModeScript initialColorMode={theme.config.initialColorMode} />
// 5. <ChakraProvider theme={theme} />