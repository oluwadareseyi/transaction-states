"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";

const buttonCopy: Record<string, string> = {
  loading: "Analyzing\u00A0 Transaction",
  warning: "Transaction \u00A0Warning",
  success: "Transaction \u00A0Safe",
};

const textColors: Record<string, string> = {
  loading: "#4DAFFF",
  warning: "#FF3F3F",
  success: "#34C759",
};

const backgroundColors: Record<string, string> = {
  loading: "#4DAFFF",
  warning: "#FF3F3F",
  success: "#34C759",
};

const TransactionStates = () => {
  const [buttonState, setButtonState] = useState("loading");
  const [ref, bounds] = useMeasure();

  const buttonCopyArray = buttonCopy[buttonState].split(" ");

  return (
    <>
      <motion.div
        layout
        transition={{
          duration: 0.25,
          type: "spring",
          bounce: 0,
        }}
        className="h-12 flex items-center justify-center text-smrounded-full px-8 transition-colors duration-200 relative font-medium overflow-hidden"
        style={{ color: textColors[buttonState] }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-[0.15] transition-colors duration-200"
          style={{ backgroundColor: backgroundColors[buttonState] }}
        />
        <span className=""></span>
        <AnimatePresence mode="popLayout" initial={false}>
          {buttonCopyArray.map((char, index) => (
            <motion.span
              key={char}
              layoutId={char}
              initial={{ opacity: 0, x: buttonState !== "loading" ? 50 : -50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.25,
                  type: "spring",
                  bounce: 0,

                  delay: 0.01,
                },
              }}
              exit={{
                opacity: 0,
                x: buttonState !== "loading" ? 50 : -50,
                transition: {
                  duration: 0.1,
                },
              }}
              transition={{
                duration: 0.25,
                type: "spring",
                bounce: 0,
                opacity: {
                  duration: 0.35,
                  type: "spring",
                  bounce: 0,
                },
              }}
              className="relative z-1 inline-block will-change-transform"
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex gap-2 mt-4">
        <button onClick={() => setButtonState("loading")}>Set Loading</button>
        <button onClick={() => setButtonState("warning")}>Set Warning</button>
        <button onClick={() => setButtonState("success")}>Set Success</button>
      </div>
    </>
  );
};

export default TransactionStates;
