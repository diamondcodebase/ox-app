import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ExploringButton.css";

export default function ExploringButton() {
    const [show, setShow] = useState(true);

    return (
    <div className="example">
      <div className="controls">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShow(!show)}
        >
          {show ? "Remove" : "Add"}
        </motion.button>
      </div>

      <AnimatePresence>
        {show ? (
          <motion.div
            className="box"
            exit={{ opacity: 0, scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

