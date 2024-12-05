"use client";
import TextTyping from "@/components/TextTyping";

export default function Section1({displayText}) {
    return (
        <TextTyping 
            textInput={displayText} />
    );
  }