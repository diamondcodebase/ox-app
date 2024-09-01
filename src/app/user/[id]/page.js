"use client";
import { useRouter } from "next/navigation"

// to access domain/user/[id], it will shows id on the screen
export default function User( {params} ) {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='text-3xl font-bold'>{ params.id }</div>
            <button onClick={ router.back }>Back</button>
            <button><a href="../">Home</a></button>
        </main>
    );
}