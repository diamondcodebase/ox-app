import { motion, useCycle } from "framer-motion";
import { useState } from "react";

export default function RotateSquareButton() {
    const [animate, cycle] = useCycle(
        { scale: 1, rotate: 0 },
        { scale: 1.2, rotate: 90 }
    );

    return (
        <motion.div
            style={{
                width: 200,
                height: 200,
                borderRadius: 40,
                backgroundColor: "#ccc",
                cursor: "pointer"
            }}
            animate={animate}
            onTap={cycle}
        >
            <p>Engineer</p>
        </motion.div>
    );
}