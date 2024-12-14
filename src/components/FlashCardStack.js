import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";

function Card(props) {
    const [exitX, setExitX] = useState(0);
    const techArr = [
        "Java","VB.Net","C#","MSSQL","Restful API","HTML/CSS","JavaScript","jQuery","NodeJS","VueJS",
        "Git","WordPress","NuxtJS","Strapi","MySQL","PHP","AWS","Java Spring Boot","Python","Jupyter Notebook",
        "Machine Learning","ReactJS","Go","DevOps","Jenkins","Azure",
    ];

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
        return props.index < techArr.length ? techArr[props.index] : "What's next?";
    }

    function handleDragEnd(_, info) {
        if (info.offset.x < -100) {
            setExitX(-250);
            props.setIndex(props.index + 1);
            props.setRound(props.round+1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            props.setIndex(props.index + 1);
            props.setRound(props.round+1);
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
                    x: -15,
                    width: 200,
                    height: 200,
                    color:"#000",
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


function Brick(props) {
    return (
        <motion.div
            className="flex flex-col items-center justify-between text-base sm:text-base font-bold p-1"
            style={{ 
                x: props.x,
                y: props.y, 
                position: "relative", 
                backgroundColor: props.backgroundColor,
                borderRadius: 10,
                justifyContent: 'center',
                inlineSize: '100px',
                height:'25px',
                padding: '0px 0px 0px 0px',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
        >
            {props.assignText}
        </motion.div>
    );
}


export default function FlashCardStack({displayText}) {
    const [index, setIndex] = useState(0);
    const [round, setRound] = useState(0);
    const techArr = [
        "Java","VB.Net","C#","MSSQL","Restful API","HTML/CSS","JavaScript","jQuery","NodeJS","VueJS",
        "Git","WordPress","NuxtJS","Strapi","MySQL","PHP","AWS","SpringBoot","Python","Jupyter",
        "ML","ReactJS","Go","DevOps","Jenkins","Azure"
    ];

    return (
        <motion.div className="flex flex-col items-center justify-between"
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                backgroundColor: '#554422',
                backgroundSize: 'cover',
            }}
        >
            <div className='text-xl sm:text-3xl font-bold p-3 m-3'>
                { displayText }
            </div>
            <motion.div style={{ width: 205, height: '80vh', position: "relative" }}>
                <AnimatePresence initial={false}>
                    <Card key={index + 1} frontCard={false} />
                    <Card
                        key={index}
                        frontCard={true}
                        index={index}
                        round={round}
                        techArr={techArr}
                        setIndex={setIndex}
                        setRound={setRound}
                        drag="x"
                    />
                </AnimatePresence>
                <AnimatePresence>
                    {round > 0 ? (
                        <Brick x={-20} y={320} backgroundColor={'#777700'} assignText={techArr[0]} />
                    ) : null}
                    {round > 1 ? (
                        <Brick x={-20} y={330} backgroundColor={'#999900'} assignText={techArr[1]} />
                    ) : null}
                    {round > 2 ? (
                        <Brick x={-150} y={320} backgroundColor={'#777700'} assignText={techArr[2]} />
                    ) : null}
                    {round > 3 ? (
                        <Brick x={-20} y={315} backgroundColor={'#999900'} assignText={techArr[3]} />
                    ) : null}
                    {round > 4 ? (
                        <Brick x={-150} y={305} backgroundColor={'#777700'} assignText={techArr[4]} />
                    ) : null}
                    {round > 5 ? (
                        <Brick x={115} y={180} backgroundColor={'#999900'} assignText={techArr[5]} />
                    ) : null}
                    {round > 6 ? (
                        <Brick x={250} y={140} backgroundColor={'#777700'} assignText={techArr[6]} />
                    ) : null}
                    {round > 7 ? (
                        <Brick x={250} y={150} backgroundColor={'#999900'} assignText={techArr[7]} />
                    ) : null}
                    {round > 8 ? (
                        <Brick x={250} y={160} backgroundColor={'#777700'} assignText={techArr[8]} />
                    ) : null}
                    {round > 9 ? (
                        <Brick x={115} y={45} backgroundColor={'#999900'} assignText={techArr[9]} />
                    ) : null}
                    {round > 10 ? (
                        <Brick x={250} y={180} backgroundColor={'#777700'} assignText={techArr[10]} />
                    ) : null}
                    {round > 11 ? (
                        <Brick x={115} y={100} backgroundColor={'#999900'} assignText={techArr[11]} />
                    ) : null}
                    {round > 12 ? (
                        <Brick x={115} y={40} backgroundColor={'#777700'} assignText={techArr[12]} />
                    ) : null}
                    {round > 13 ? (
                        <Brick x={115} y={85} backgroundColor={'#999900'} assignText={techArr[13]} />
                    ) : null}
                    {round > 14 ? (
                        <Brick x={-20} y={75} backgroundColor={'#777700'} assignText={techArr[14]} />
                    ) : null}
                    {round > 15 ? (
                        <Brick x={250} y={20} backgroundColor={'#999900'} assignText={techArr[15]} />
                    ) : null}
                    {round > 16 ? (
                        <Brick x={115} y={80} backgroundColor={'#777700'} assignText={techArr[16]} />
                    ) : null}
                    {round > 17 ? (
                        <Brick x={-20} y={-140} backgroundColor={'#999900'} assignText={techArr[17]} />
                    ) : null}
                    {round > 18 ? (
                        <Brick x={-150} y={-115} backgroundColor={'#777700'} assignText={techArr[18]} />
                    ) : null}
                    {round > 19 ? (
                        <Brick x={-150} y={-175} backgroundColor={'#999900'} assignText={techArr[19]} />
                    ) : null}
                    {round > 20 ? (
                        <Brick x={-150} y={-235} backgroundColor={'#777700'} assignText={techArr[20]} />
                    ) : null}
                    {round > 21 ? (
                        <Brick x={250} y={-270} backgroundColor={'#999900'} assignText={techArr[21]} />
                    ) : null}
                    {round > 22 ? (
                        <Brick x={-150} y={-110} backgroundColor={'#777700'} assignText={techArr[22]} />
                    ) : null}
                    {round > 23 ? (
                        <Brick x={115} y={-130} backgroundColor={'#999900'} assignText={techArr[23]} />
                    ) : null}
                    {round > 24 ? (
                        <Brick x={-20} y={-140} backgroundColor={'#777700'} assignText={techArr[24]} />
                    ) : null}
                    {round > 25 ? (
                        <Brick x={250} y={-160} backgroundColor={'#999900'} assignText={techArr[25]} />
                    ) : null}
                </AnimatePresence>
            </motion.div>
        </motion.div>       
    );
}