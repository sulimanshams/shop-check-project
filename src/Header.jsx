import React from "react";
import { Box } from "@mui/material";
import bgImage from "./photos/background-image.png"; // درست است



export default function HeaderComponent() {
  return (
    <Box
      component="img"
      src={bgImage}
      alt="Header Background"
      sx={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  );
}
