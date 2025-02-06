"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

import SignUpForm from "./SignupComponent";
import SignInForm from "./SigninComponent";
import TextCarousel from "./TextCarousel";
interface SlidingPanelProps {
  onClose: () => void;
  showSignIn?: boolean;
  setShowSignIn: (value: boolean) => void;
}
export default function SlidingPanel({
  onClose,
  showSignIn = false,
  setShowSignIn,
}: SlidingPanelProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
    setShowSignIn(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 w-full bg-[#1F1F2E] text-white p-8 z-50 shadow-2xl rounded-t-3xl"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          key="sliding-panel"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-[#FE3EAA] transition-colors"
            aria-label="Close"
          >
            <IoClose />
          </button>

          {showSignUpForm ? (
            <SignUpForm />
          ) : showSignIn ? (
            <SignInForm />
          ) : (
            <>
              <h1 className="text-4xl font-bold mb-4">Welcome to Pigeon</h1>
              <div className="mb-8">
                <TextCarousel />
              </div>
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 text-lg font-semibold text-white bg-[#FE3EAA] rounded-2xl shadow-lg hover:bg-[#6C19FF] transition-all duration-300"
                  onClick={() => setShowSignUpForm(true)}
                >
                  Sign Up
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
