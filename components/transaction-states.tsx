"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Transition } from "motion/react";
import WarningIcon from "./warningIcon";
import CheckIcon from "./checkicon";

const transactionStates: Record<string, { copy: string; color: string }> = {
  loading: {
    copy: "Analyzing\u00A0 Transaction",
    color: "#4DAFFF",
  },
  warning: {
    copy: "Transaction \u00A0Warning",
    color: "#FF3F3F",
  },
  success: {
    copy: "Transaction \u00A0Safe",
    color: "#34C759",
  },
};

const SPRING = {
  type: "spring",
  damping: 10,
  mass: 0.45,
  stiffness: 100,
};

const TransactionStates = () => {
  const [buttonState, setButtonState] = useState("loading");
  const [isSuccess, setIsSuccess] = useState(false);

  const buttonCopyArray = transactionStates[buttonState].copy.split(" ");

  useEffect(() => {
    // This is a hack to simulate the transaction states
    const interval = setInterval(() => {
      setButtonState((prev) => {
        if (prev === "success") {
          setIsSuccess(false);
        } else {
          setIsSuccess(true);
        }

        if (prev === "loading") {
          return isSuccess ? "success" : "warning";
        } else {
          return "loading";
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [buttonState, isSuccess]);

  return (
    <>
      <motion.div
        layout
        transition={{
          duration: 0.25,
          type: "spring",
          bounce: 0,
        }}
        className="h-12 flex items-center justify-center text-smrounded-full px-6 gap-2 transition-colors duration-200 relative font-medium overflow-hidden leading-none"
        style={
          {
            color: transactionStates[buttonState].color,
            "--blue": transactionStates["loading"].color,
            "--red": transactionStates["warning"].color,
            "--green": transactionStates["success"].color,
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-0 rounded-full opacity-[0.15] transition-colors duration-200 pointer-events-none"
          style={{ backgroundColor: transactionStates[buttonState].color }}
        />
        <AnimatePresence initial={false} mode="popLayout">
          {buttonState === "loading" && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                transformOrigin: "right center",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transformOrigin: "right center",
              }}
              exit={{ opacity: 0, scale: 0.8, transformOrigin: "right center" }}
              transition={
                {
                  duration: 0.4,
                  ...SPRING,
                } as Transition
              }
              className="w-6 h-6 flex items-center justify-center"
              key="loading"
            >
              <div className="spinner"></div>
            </motion.div>
          )}

          {buttonState === "warning" && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                transformOrigin: "left bottom",
              }}
              animate={{ opacity: 1, scale: 1, transformOrigin: "left bottom" }}
              exit={{ opacity: 0, scale: 0.8, transformOrigin: "left bottom" }}
              transition={
                {
                  duration: 0.4,
                  ...SPRING,
                } as Transition
              }
              className="w-5 h-5 flex items-center justify-center"
              style={{ color: transactionStates["warning"].color }}
              key="warning"
            >
              <div className="warning-icon">
                <WarningIcon />
              </div>
            </motion.div>
          )}

          {buttonState === "success" && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                transformOrigin: "left bottom",
              }}
              animate={{ opacity: 1, scale: 1, transformOrigin: "left bottom" }}
              exit={{ opacity: 0, scale: 0.8, transformOrigin: "left bottom" }}
              transition={
                {
                  duration: 0.4,
                  ...SPRING,
                } as Transition
              }
              className="w-6 h-6 flex items-center justify-center"
              style={{ color: transactionStates["success"].color }}
              key="success"
            >
              <div className="check-icon">
                <CheckIcon />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <AnimatePresence mode="popLayout" initial={false}>
            {buttonCopyArray.map((char, index) => (
              <motion.span
                key={char}
                layoutId={char}
                initial={{
                  opacity: 0,
                  x: buttonState !== "loading" ? 50 : -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.25,
                    ...SPRING,
                    delay: 0.01,
                  } as Transition,
                }}
                exit={{
                  opacity: 0,
                  x: buttonState !== "loading" ? 40 : -40,
                  transition: {
                    duration: 0.15,
                  } as Transition,
                }}
                transition={
                  {
                    duration: 0.25,
                    ...SPRING,
                    opacity: {
                      duration: 0.35,
                      ...SPRING,
                    },
                  } as Transition
                }
                className="relative z-1 inline-block will-change-transform"
              >
                {char}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* <div className="flex gap-2 mt-4">
        <button onClick={() => setButtonState("loading")}>Set Loading</button>
        <button onClick={() => setButtonState("warning")}>Set Warning</button>
        <button onClick={() => setButtonState("success")}>Set Success</button>
      </div> */}
    </>
  );
};

export default TransactionStates;
