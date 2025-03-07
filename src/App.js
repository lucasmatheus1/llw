import "./App.css";
//import { useState } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//import Switch from "@material-ui/core/Switch";
import Start from "./pages/Start";
import { Typography } from "@material-ui/core";

function App() {
  //const [darkState, setDarkState] = useState(false);
  //const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  // };
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={darkTheme}>
          {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
          <h1 style={{ color: "#8BB7E8" }}>Let's go!</h1>
          <Start />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
