"use client";
import TextTyping from "@/components/TextTyping";
import TextTypingS from "@/components/TextTypingS";
import GifImageSection from "@/components/GifImageSection";
import FlashCardStack from "@/components/FlashCardStack";
import DropDownMenu from "@/components/DropdownMenu";
import Stagger from "@/components/Stagger";
import BasicButtonPanel from "@/components/BasicButtonPanel";
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

    const imageSrc5 = "./gear.gif";


    return (
        <main>
            
            <TextTyping textInput={sentence1} />
            <TextTypingS textInput={sentence2} />
            <TextTyping textInput={sentence3} />
            <GifImageSection displayText={sentence5} imageSrc={imageSrc5} alt={"rotating"} />
            <FlashCardStack />

        </main>
    );
}