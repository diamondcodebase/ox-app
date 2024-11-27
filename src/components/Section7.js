import FlashCardStack from "@/components/FlashCardStack";

export default function Section7({displayText}) {
    return (
        <div className='flex flex-col items-center justify-between'>
            <div className='text-3xl font-bold p-3 m-3'>
                { displayText }
            </div>
            <FlashCardStack />            
        </div>
    );
};