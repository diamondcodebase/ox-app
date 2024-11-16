"use client";
import TextTyping from "@/components/TextTyping";
import BasicButtonPanel from "@/components/BasicButtonPanel";

export default function AboutMe() {
    const text1 = "Nice to meet you! My name is Diamond.";

    return (
        <div>
            <TextTyping textInput={text1} />
        </div>
    );
}