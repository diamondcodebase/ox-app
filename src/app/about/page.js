"use client";
import BasicButtonPanel from "@/components/BasicButtonPanel"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// import { useSearchParams } from "next/navigation";
// For passing current lang state
//import Link from "next/link"; // import the Link Tag
//import translation from "@/data/translation";


export default function About() {
    const FadeMoveOut = batch(Sticky(), Fade(), MoveOut(0,-200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), Zoom());
    const FadeUp = batch(Fade(), Move(), Sticky());
    const CastUp = batch(Sticky(), FadeIn(), MoveOut(-100,0));
    const FadeSticky = batch(Fade(), Sticky());

    return (
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
                    <h2>
                        Inspired by an online game featuring true or false mini-games, I suggested to my pastor that I could create a Bible verse true or false game for our church group.
                    </h2>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={FadeUp}>
                    <h2>
                        The early stages of development were quite challenging since I did not have any prior experience in web development.
                    </h2>
                    <h2>
                        I learned about Google App Scripts through YouTube and tried to implement it using Google Drive and Google Sheets as a database.
                    </h2>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <h2>
                        Eventually, I was able to launch a series of Bible verse OX games, which my church group really enjoyed playing.
                    </h2>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={FadeUp}>             
                    <div>
                        This website is an extension of the original Bible OX game.
                        I have added two more features: a Hong Kong OX game and a Canada OX game. 
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={FadeSticky}>
                Hope you Enjoy!
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={CastUp}>  
                
                    <div className='text-3xl font-bold p-3 m-3'>About Me</div>
                    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                        <div className="row-auto text-xl bg-sky-200/50 border-sky-900 border-2 rounded-md p-3 text-gray-700 justify-center">
                            My name is Diamond, and I've been in the tech industry for over 15 years. 
                            I started my career in a scientific and engineering role after studying physics at university. 
                            As time went on, a significant shift pushed me toward coding. 
                            I was amazed by how software could automate tasks and unlock human potential. 
                            In the last few years as a software developer, I love exploring new programming languages, frameworks, and technologies to enhance my skills. 
                            My natural curiosity keeps me looking for the latest innovations and figuring out how they can solve real-world problems. 
                            I also enjoy working with teams from different areas to bring projects to life.
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <BasicButtonPanel />

        </ScrollContainer>
    );
}