"use client";
import { useRouter } from "next/navigation"

export default function About() {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='text-3xl font-bold'>About</div>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                
            </div>
            <button onClick={ router.back }>Back</button>
            <button><a href="../">Home</a></button>
        </main>

    );
}