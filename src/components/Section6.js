import ExploringTextButton from "@/components/ExploringTextButton";

export default function Section6({ displayText }) {
    return (
        <div className="relative">
            <div className='text-5xl font-bold p-3 m-3'>
                { displayText }
            </div>
            <div className=''>
                <ExploringTextButton />
            </div>
        </div>
    );
};