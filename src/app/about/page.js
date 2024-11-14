"use client";
import BasicButtonPanel from "@/components/BasicButtonPanel"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// import { useSearchParams } from "next/navigation";
// For passing current lang state
//import Link from "next/link"; // import the Link Tag
//import translation from "@/data/translation";


export default function About() {
    const FadeMoveOut = batch(Sticky(), Fade(), MoveOut(0,-200));
    const ZoomInScrollOut = batch(ZoomIn(), FadeIn(), Sticky(), MoveOut(0,-200));
    const FadeUp = batch(Fade(), Move(), Sticky());
    const CastUp = batch(Sticky(), FadeIn(), MoveOut(-100,0));
    const FadeSticky = batch(Fade(), Sticky(), FadeOut(), MoveOut(-200,0));

    return (
        <div>
            <ScrollContainer>
                <div className='text-3xl font-bold p-3 m-3'>About This Web</div>
                <ScrollPage>
                    <Animator animation={FadeMoveOut}>
                        <div className='text-2xl font-bold p-3 m-3'>
                            The origin of this web came to me in 2021.
                        </div>
                        <div className='text-2xl font-bold p-3 m-3'>
                            During that year, we were still facing the threat of COVID-19, which led to bans on large gatherings. 
                        </div>
                        <div className='text-2xl font-bold p-3 m-3'>
                            This really affected our daily lives, including my church activities.
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <div className='text-2xl font-bold p-3 m-3'>
                            At that time, my pastor was looking for interactive and creative ways to read the Bible with our church community.
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={ZoomInScrollOut}>
                        <div className='text-2xl font-bold p-3 m-3'>
                            Inspired by an online game featuring true or false mini-games, I suggested to my pastor that I could create a Bible verse true or false game for our church group.
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <div className='text-2xl font-bold p-3 m-3'>
                            The early stages of development were quite challenging since I did not have any prior experience in web development.
                        </div>
                        <div className='text-2xl font-bold p-3 m-3'>
                            I learned about Google App Scripts through YouTube and tried to implement it using Google Drive and Google Sheets as a database.
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={ZoomInScrollOut}>
                        <div className='text-2xl font-bold p-3 m-3'>
                            Eventually, I was able to launch a series of Bible verse OX games, which my church group really enjoyed playing.
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>             
                        <div className='text-2xl font-bold p-3 m-3'>
                            This website is an extension of the original Bible OX game.
                            I have added two more features: a Hong Kong OX game and a Canada OX game. 
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeSticky}>
                        <div className='text-2xl font-bold p-3 m-3'>
                            Hope you Enjoy!
                        </div>                
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
            <div className="bg-neutral-800">
                <div className="flex h-48 items-center justify-center">
                    <span className="font-semibold uppercase text-neutral-500">
                        Scroll down
                    </span>
                </div>
                <HorizontalScrollCarousel />
                <div className="flex h-48 items-center justify-center">
                    <span className="font-semibold uppercase text-neutral-500">
                        Scroll up
                    </span>
                </div>
            </div>
           
            <BasicButtonPanel />
        </div>        
    );
}

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
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
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