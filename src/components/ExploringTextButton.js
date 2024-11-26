import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ExploringButton.css";

export default function ExploringTextButton() {
    const [round, setRound] = useState(0);

    return (
    <div className="example">
      <div className="controls">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setRound(round+1)}
        >
          {"Explore"}
        </motion.button>
      </div>

      <AnimatePresence>
        {round > 0 ? (
            <motion.div
                className="box"
                exit={{ opacity: 0, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                {"Job 1"}
            </motion.div>
        ) : null}
        {round > 1 ? (
            <motion.div
                className="box"
                exit={{ opacity: 0, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                {"Job 2"}
            </motion.div>
        ) : null}
        {round > 2 ? (
            <motion.div
                className="box"
                exit={{ opacity: 0, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                {"Job 2"}
            </motion.div>
        ) : null}
        {round > 3 ? (
            <motion.div
                className="box"
                exit={{ opacity: 0, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                {"Job 2"}
            </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}