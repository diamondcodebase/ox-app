import FlashCardStack from "@/components/FlashCardStack";

export default function Section7({displayText}) {
    return (
        <div className='flex flex-col items-center justify-between'>
            <div className='text-2xl sm:text-4xl font-bold p-3 m-3'>
                { displayText }
            </div>
           
        </div>
    );
};