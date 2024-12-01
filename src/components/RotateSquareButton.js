import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function RotateSquareButton({displayText}) {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated((prevState) => !prevState);
    };

    const softwareDeveloper = "Software Developer";

    return (
        <motion.div className="flex flex-col items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: isRotated?
                'url("./software_develop.png")'
                : 'url("./engineer_lab.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='text-xl sm:text-3xl font-bold p-3 m-3'>
                { displayText }
            </div>
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
                    margin: isRotated ? 80 : 80,
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

        </motion.div>

    );
}