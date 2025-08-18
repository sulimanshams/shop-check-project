import React from "react";
import "./App.css";
import { Box, Typography  } from "@mui/material";
import bgImage from "./assets/background-image.png";

export default function Header() {
  return (
    <Box sx={{ position: "relative", width: "100%"}}>
      <Box
        component="img"
        src={bgImage}
        alt="header"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "44px",
          left: "690px",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff"  , fontFamily:"Inter , sans-serif" , fontWeight:700 , fontSize:"2rem" }}>
          Checkout
        </Typography>
      </Box>

      <Box
        sx={{
            position:"absolute",
            backgroundColor:"#394150",
            color:"#fff",
            borderRadius:"20px",
            padding:"4px 12px",
            fontSize:"0.875rem",
            fontWeight:"bold",
            width:"60px",
            height:"20px",
            alignContent:"center",
            top:54,
            left:880

        }}
      > 3 ITEMS</Box>
    </Box>
  );
}
