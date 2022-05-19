import React, { useState} from "react";

//ROUTES
import { Routes } from "./routes/Routes";


//STYLES
import { ThemeProvider } from "styled-components";
import dark from "./assets/styles/dark";
import light from "./assets/styles/light";
import GlobalStyle from "./assets/styles/global";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes toggleTheme={toggleTheme}/>
    </ThemeProvider>
    </>
  )
}

export default App
