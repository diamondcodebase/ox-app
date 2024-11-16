"use client";
import BasicButtonPanel from "@/components/BasicButtonPanel";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import React, { useState } from "react";
import Image from "next/image";

import HorizontalScroll from "@/components/about/HorizontalScroll";
import Clients from '@/components/about/Clients';
import Data from '@/components/about/Data';
import Service from '@/components/about/Service';
import Team from '@/components/about/Team';
import Team2 from '@/components/about/Team2';
import Team3 from '@/components/about/Team3';

import Projects from '@/components/about/Projects';


// import { useSearchParams } from "next/navigation";
// For passing current lang state
//import Link from "next/link"; // import the Link Tag
//import translation from "@/data/translation";


export default function About() {
    const FadeMoveOut = batch(Fade(), Sticky(), MoveOut(0,-500));
    const ZoomInScrollOut = batch(Sticky(), FadeIn(), ZoomIn(), MoveOut(0,-800))
    //const ZoomInScrollOut = batch(ZoomIn(), FadeIn(), Sticky(), MoveOut(0,-200));
    const MoveInOut = batch(MoveIn(-1000,0), Sticky(), Fade(), MoveOut(1000,0));
    const CastUp = batch(Fade(), Sticky(), MoveOut(0,1000));
    const FadeSticky = batch(Fade(), Sticky(), FadeOut(), MoveOut(-500,0));
    
    return (
        <div>
            <section id='about_web'>
                <ScrollContainer>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-row items-center'>
                                <div className='text-3xl font-bold p-3 m-3'>About This Web</div>
                                <Image src="/web.png" alt="About web image"
                                    width={250}
                                    height={250}/>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-row items-center'>
                                <Image src="/covid.png" alt="Covid image"
                                        width={250}
                                        height={250}/>
                                <div>
                                    <div className='text-2xl font-bold p-3 m-3'>
                                        The origin of this web came to me in 2021.
                                    </div>
                                    <div className='text-2xl font-bold p-3 m-3'>
                                        During that year, we were still facing the threat of COVID-19, which led to bans on large gatherings. 
                                    </div>
                                    <div className='text-2xl font-bold p-3 m-3'>
                                        This really affected our daily lives, including my church activities.
                                    </div>
                                </div>
                            </div>                       
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-row items-center'>
                                <div className='text-2xl font-bold p-3 m-3'>
                                    At that time, my pastor was looking for interactive and creative ways to read the Bible with our church community.
                                </div>
                                <Image src="/guide.png" alt="Guide image"
                                    width={250}
                                    height={250}/>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <div className='flex flex-row items-center'>
                            <Image src="/inspire.png" alt="Inspire image"
                                    width={250}
                                    height={250}/>
                                <div className='text-2xl font-bold p-3 m-3'>
                                    Inspired by an online game featuring true or false mini-games, I suggested to my pastor that I could create a Bible verse true or false game for our church group.
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={MoveInOut}>
                            <div className='flex flex-row items-center'>
                                <div>
                                    <div className='text-2xl font-bold p-3 m-3'>
                                        The early stages of development were quite challenging since I did not have any prior experience in web development.
                                    </div>
                                    <div className='text-2xl font-bold p-3 m-3'>
                                        I learned about Google App Scripts through YouTube and tried to implement it using Google Drive and Google Sheets as a database.
                                    </div>
                                </div>
                                <Image src="/struggle.png" alt="Struggling image"
                                        width={250}
                                        height={250}/>
                            </div>                        
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-row items-center'>
                                <Image src="/enjoy.png" alt="Enjoy image"
                                            width={250}
                                            height={250}/>
                                <div className='text-2xl font-bold p-3 m-3'>
                                    Eventually, I was able to launch a series of Bible verse OX games, which my church group really enjoyed playing.
                                </div>
                                <Image src="/trueOrFalse.png" alt="TrueFalse image"
                                            width={250}
                                            height={250}/>
                            </div>                        
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeMoveOut}>
                            <div className='flex flex-row items-center'>
                                <Image src="/bauhinia.png" alt="Bauhinia image"
                                                width={200}
                                                height={200}/>
                                <div className='text-2xl font-bold p-3 m-3'>
                                    This website is an extension of the original Bible OX game.
                                    I have added two more features: a Hong Kong OX game and a Canada OX game. 
                                </div>
                                <Image src="/mapleLeaf.png" alt="Maple image"
                                                width={200}
                                                height={200}/>
                            </div>             
                            
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={CastUp}>
                            <div className='text-4xl font-bold p-3 m-3'>
                                Hope you Enjoy!
                            </div>                
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            </section>
            <section id='about_me'>
                {/* <About />
                <Service />
                <Projects />
                <Data />
                <Clients />
                <Team />
                <Team2 />
                <Team3 /> */}
                <HorizontalScroll />
            </section>          

            <BasicButtonPanel />
        </div>        
    );
}

