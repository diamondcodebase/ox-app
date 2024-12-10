import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./TimeLineButton.css";

export default function TimeLineButton({displayText, displayText2}) {
    const [round, setRound] = useState(0);

    return (
    <div
    style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >
        <div className='text-2xl sm:text-4xl font-bold p-20 mt-20'>
            { displayText }
        </div>
        <div className='text-2xl sm:text-4xl font-bold p-30 m-30'>
            { displayText2 }
        </div>
        <div className="controls">
            <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => setRound(round+1)}
            >
            {"Go Further"}
            </motion.button>
        </div>

        <AnimatePresence>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {round > 0 ? (
                    <motion.div
                        className="roleBox"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                    >
                        {"Research Scholar"}
                    </motion.div>
                ) : null}
                {round > 1 ? (
                    <motion.div
                        className="roleBox"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                    >
                        {"R&D Engineer"}
                    </motion.div>
                ) : null}
                {round > 2 ? (
                    <motion.div
                        className="roleBox"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                    >
                        {"Testing Engineer"}
                    </motion.div>
                ) : null}
                {round > 3 ? (
                    <motion.div
                        className="roleBox"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                    >
                        {"Software Developer"}
                    </motion.div>
                ) : null}
                {round > 4 ? (
                    <motion.div
                        className="roleBox"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                    >
                        {"Software Analyst"}
                    </motion.div>
                ) : null}
            </div>
        </AnimatePresence>
    </div>
  );
}
