import TextTyping from "@/components/TextTyping";

export default function OpenBanner({displayText}){
    return (
        <main>            
            <TextTyping textInput={displayText} />
        </main>
    )
}