'use client';
import { Box, Typography, Fade } from "@mui/material";
import { useState, useEffect } from "react";

const TextCarousel = () => {
  const texts = [
    "Welcome to Pigeon!",
    "A scalable and secure communication platform.",
    "Explore its capabilities.",
    "Revolutionizing messaging experiences.",
    "Join us today!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1F1F2E",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Fade in={true} timeout={1000}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {texts[currentIndex]}
        </Typography>
      </Fade>
    </Box>
  );
};

export default TextCarousel;
