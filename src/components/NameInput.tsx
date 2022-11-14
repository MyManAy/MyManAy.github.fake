import { TextField, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import colorTheme from "../styles/colorTheme";

export interface IAppProps {
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
}

export default function App({ handleKeyDown, handleTextChange }: IAppProps) {
  return (
    <ThemeProvider theme={colorTheme}>
      <TextField
        style={{
          backgroundColor: "#F7D8B5",
          border: "30px solid #FFF",
          textAlign: "center",
          margin: "20px",
        }}
        id="outlined-name"
        label="Enter Name"
        variant="outlined"
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
    </ThemeProvider>
  );
}
