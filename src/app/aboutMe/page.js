"use client";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import React, { useState, useEffect } from 'react';

export default function AboutMe() {
    const sentence1 = "Hello! My name is Diamond.";
    const sentence2 = "I've been in the tech industry for over 15 years.";
    const sentence3 = "I started my career in a scientific and engineering role.";
    const sentence4 = "As time went on, a significant shift pushed me toward coding.";
    const sentence5 = "I was amazed by how software could automate tasks.";
    const sentence6 = "Being a software developer, I am happy to explore this new tech field.";
    const sentence7 = "My curiosity keeps me seeking how the latest innovations can solve real-world problems.";
    const sentence8 = "Working with teams with different talents, bringing projects to life drive my motivation.";
    const sentence9 = "I would be excited if one day I could work with you, fork~";

    const imageSrc4_1 = "./automatic.gif";
    const imageSrc4_2 = "./robot.png";
    const imageSrc8 = "./work_together.png";


    return (
        <main>
            
            <Section1 displayText={sentence1} />
            <Section2 displayText={sentence2} displayText2={sentence3} />
            <Section3 displayText={sentence4} />
            <Section4 displayText={sentence5} imageSrc={imageSrc4_1} alt={"automatic"} imageSrc2={imageSrc4_2} alt2={"robot"}/>
            <Section5 displayText={sentence6} />
            <Section6 displayText={sentence7} />
            <Section7 displayText={sentence8} imageSrc={imageSrc8} alt={"work_together"} />
            <Section8 />

        </main>
    );
}