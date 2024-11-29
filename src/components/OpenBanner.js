import TextTypingS from "@/components/TextTypingS";

export default function OpenBanner({displayText}){
    return (
        <main>            
            <TextTypingS textInput={displayText} />
        </main>
    )
}