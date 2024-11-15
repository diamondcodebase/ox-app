import { motion, useTransform, useMotionValue, useScroll } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScroll() {
    return (
        <div className="bg-neutral-800">
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Hello World!
                </span>
            </div>
            <HorizontalScrollCarousel />
        </div>    
    );
}


// Horizontal Scroll Carousel
const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
                {cards.map((card) => {
                return <BlockCard card={card} key={card.id} />;
                })}
            </motion.div>
            </div>
        </section>
    );
};
  

const BlockCard = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[300px] w-[400px] overflow-hidden bg-neutral-200"
        >
            <div
            style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid">
            <p className="bg-gradient-to-br from-white/20 to-white/0 p-5 text-xl font-black text-white backdrop-blur-lg">
                {card.title}
            </p>
            <p className="bg-gradient-to-br from-white/20 to-white/0 p-5 text-xl font-black text-white backdrop-blur-lg">
                {card.title2}
            </p>
            </div>
        </div>
    );
};  
  

const cards = [
    {
        url: "/imgs/abstract/1.jpg",
        title: "Nice to meet you!",
        title2: "My name is Diamond.",
        id: 1,
    },
    {
        url: "/imgs/abstract/1.jpg",
        title: "I've been in the tech industry for over 15 years.",
        id: 2,
    },
    {
        url: "/imgs/abstract/2.jpg",
        title: "I started my career in a scientific and engineering role.",
        id: 3,
    },
    {
        url: "/imgs/abstract/3.jpg",
        title: "As time went on, a significant shift pushed me toward coding.",
        id: 3,
    },
    {
        url: "/imgs/abstract/4.jpg",
        title: "I was amazed by how software could automate tasks.",
        id: 4,
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "Being a software developer, I am happy to explore this new tech field.",
        id: 5,
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "It gives me chances to learn new programming languages, frameworks, and technologies",
        id: 5,
    },
    {
        url: "/imgs/abstract/6.jpg",
        title: "My curiosity keeps me seeking how the latest innovations can solve real-world problems.",
        id: 6,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Working with teams with different talents, bringing projects to life drive my motivation.",
        id: 7,
    },
    {
        url: "/imgs/abstract/8.jpg",
        title: "I would be excited if one day I could work with you, fork~",
        id: 8,
    },
];