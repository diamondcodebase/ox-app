import FlashCardStack from "@/components/FlashCardStack";
import ScrollRevealCard from "./ScrollRevealCard";

export default function Section7({displayText}) {
    const items = ["Real-time Parking Lot Vacancy Report", "E-Form", "Auto Payment Kiosk", "Reservation APIs", "Synchronization System"];
    return (
        <div id="section" className=''>
            <div className='text-2xl sm:text-4xl font-bold p-3 m-3'>
                { displayText }
            </div>
            <div className="ScrollCards">
                {items.map((item, i) => (
                    <ScrollRevealCard key={i} text={item} index={i} />
                ))}
            </div>           
        </div>
    );
};