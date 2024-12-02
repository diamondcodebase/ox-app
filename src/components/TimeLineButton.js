import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./TimeLineButton.css";

export default function TimeLineButton() {
    const [round, setRound] = useState(0);

    return (
    <div className="main flex flex-row items-center justify-between"
    style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >
      <div className="controls">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setRound(round+1)}
        >
          {"Go Further"}
        </motion.button>
      </div>

      <AnimatePresence>
        {round > 0 ? (
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
            >
                {"Research Scholar"}
            </motion.div>
        ) : null}
        {round > 1 ? (
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
            >
                {"R&D Engineer"}
            </motion.div>
        ) : null}
        {round > 2 ? (
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
            >
                {"Testing Engineer"}
            </motion.div>
        ) : null}
        {round > 3 ? (
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
            >
                {"Software Developer"}
            </motion.div>
        ) : null}
        {round > 4 ? (
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
            >
                {"Software Analyst"}
            </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
