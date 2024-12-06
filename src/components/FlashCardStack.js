import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";

function Card(props) {
    const [exitX, setExitX] = useState(0);
    const techArr = ["VB.Net", "C#", "MSSQL"];

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackCard = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 }
    };

    function assignCardText(){
        return props.index < techArr.length ? techArr[props.index] : "";
    }

    function handleDragEnd(_, info) {
        if (info.offset.x < -100) {
            setExitX(-250);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            props.setIndex(props.index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: 150,
                height: 150,
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
            // Dragging
            drag={props.drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            // Animation
            variants={props.frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                props.frontCard
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
            }
        >
            <motion.div
                className='flex flex-col items-center justify-between text-2xl sm:text-4xl font-bold p-3 m-3'
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#EEDD44",
                    borderRadius: 30,
                    scale,
                    justifyContent: 'center',
                }}
            >
                <div>{assignCardText()}</div>
            </motion.div>
        </motion.div>
    );
}

export default function FlashCardStack({displayText}) {
    const [index, setIndex] = useState(0);

    return (
        <motion.div className="flex flex-col items-center justify-between"
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#554422',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='text-xl sm:text-3xl font-bold p-3 m-3'>
                { displayText }
            </div>
            <motion.div style={{ width: 200, height: '80vh', position: "relative" }}>
                <AnimatePresence initial={false}>
                    <Card key={index + 1} frontCard={false} />
                    <Card
                        key={index}
                        frontCard={true}
                        index={index}
                        setIndex={setIndex}
                        drag="x"
                    />
                </AnimatePresence>
            </motion.div>
        </motion.div>        
    );
}