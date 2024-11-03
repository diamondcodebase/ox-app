"use client";
import BasicButtonPanel from "@/components/BasicButtonPanel"
// For passing current lang state
//import Link from "next/link"; // import the Link Tag
//import translation from "@/data/translation";
import { useSearchParams } from "next/navigation";

export default function About() {
    const searchParams = useSearchParams();

    return (
        <body>
            <header></header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className='text-3xl font-bold'>About</div>
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    
                </div>
                <BasicButtonPanel />
            </main>
        </body>
    );
}