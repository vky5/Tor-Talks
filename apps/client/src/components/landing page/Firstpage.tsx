"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GradientText from "../TextAnimations/GradientText/GradientText";

// importing components
import SlidingPanel from "./SlidingPannel";

function Firstpage() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0D0C13] overflow-hidden">
      {/* Pink Circle */}
      <motion.div
        className="absolute top-[15%] right-[-15vw] w-44 h-44 bg-[#FE3EAA] rounded-full transform -translate-y-1/2"
        animate={{
          x: [0, 15, -10, 20, -5],
          y: [0, -20, 15, -10, 5],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "linear",
          repeatType: "mirror",
        }}
      />

      {/* Blue Circle */}
      <motion.div
        className="absolute top-[8vh] left-[8vw] w-20 h-20 bg-[#6C19FF] rounded-full"
        animate={{
          x: [0, -10, 20, -15, 5],
          y: [0, 12, -18, 10, -5],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          ease: "linear",
          repeatType: "mirror",
        }}
      />

      {/* Centered Pigeon Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <GradientText className="text-6xl font-bold">Pigeon</GradientText>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center pt-[70vh] space-y-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 text-lg font-semibold text-white bg-[#6C19FF] rounded-2xl shadow-lg hover:bg-[#FE3EAA] transition-all duration-300"
          onClick={() => setShowPanel(true)}
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 text-lg font-semibold text-white bg-[#FE3EAA] rounded-2xl shadow-lg hover:bg-[#6C19FF] transition-all duration-300"
        >
          Login
        </motion.button>
      </div>

      {/* Sliding Panel */}
      {showPanel && <SlidingPanel onClose={() => setShowPanel(false)} />}

      {/* Small Animated Blue Circle at Bottom */}
      <motion.div
        className="absolute bottom-4 right-4 w-12 h-12 bg-[#31CDFF] rounded-full"
        animate={{
          x: [0, 8, -5, 10, -7],
          y: [0, -6, 10, -4, 8],
        }}
        transition={{
          repeat: Infinity,
          duration: 4.2,
          ease: "linear",
          repeatType: "mirror",
        }}
      />
    </div>
  );
}

export default Firstpage;
