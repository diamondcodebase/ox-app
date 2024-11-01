// For passing current lang state
import Link from "next/link"; // import the Link Tag

export default function CustomButtonA({pathname, displayText}){    
    return (
        <Link
            href={{
                pathname: pathname,
            }}   
            className="group rounded-lg border border-transparent px-5 py-4 bg-gray-400 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <div className="text-center text-3xl">
                <span className="text-gray-200">{displayText}</span>
            </div>
        </Link>
    );
}