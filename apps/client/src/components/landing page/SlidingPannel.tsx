"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

import TextCarousel from "./TextCarousel";

interface SlidingPanelProps {
  onClose: () => void;
}

export default function SlidingPanel({ onClose }: SlidingPanelProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    // Start closing animation
    setIsVisible(false);
    // Delay calling onClose after the closing animation completes
    setTimeout(() => onClose(), 300); // Ensure onClose is called after animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 w-full bg-[#1F1F2E] text-white p-8 z-50 shadow-2xl rounded-t-3xl"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Faster closing animation
          key="sliding-panel"
        >
          {/* Close Icon */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-[#FE3EAA] transition-colors"
            aria-label="Close"
          >
            <IoClose />
          </button>

          <h1 className="text-4xl font-bold mb-4">Welcome to Pigeon</h1>

          <TextCarousel />
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 text-lg font-semibold text-white bg-[#FE3EAA] rounded-2xl shadow-lg hover:bg-[#6C19FF] transition-all duration-300"
            >
              Login
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
