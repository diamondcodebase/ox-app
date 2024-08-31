"use client";
import { useRouter } from "next/navigation"

export default function Quiz() {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='text-3xl font-bold'>Quiz Start</div>
            <button onClick={ router.back }>Back</button>
            <button><a href="../">Home</a></button>
        </main>
    );
}