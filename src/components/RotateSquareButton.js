import { motion, useCycle } from "framer-motion";
import { useState } from "react";

export default function RotateSquareButton() {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated((prevState) => !prevState);
    };

    const softwareDeveloper = "Software Developer";

    return (
        <motion.div 
            className="flex flex-col items-center justify-center"
            style={{
                width: 200,
                height: 200,
                borderRadius: 40,
                padding: 10,
                margin: 10,
                cursor: "pointer"
            }}
            animate={{
                rotate: isRotated ? 0 : 90,
                scale: isRotated ? 1.5 : 1,
                backgroundColor: isRotated? "#dd4" : "#8dd",
                padding: isRotated ? 10 : 10,
                margin: isRotated ? 10 : 10,
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut'
            }}
            onClick={handleClick}
        >
            <motion.div
                className="font-bold"
                animate={{
                    rotate: isRotated? 0 : -90,
                    padding: isRotated? 10 : 10,
                    scale: isRotated ? 1.25 : 1.5,
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut'
                }}
            >
                {isRotated ? "Software Developer" : "Engineer" }
            </motion.div>
        </motion.div>
    );
}