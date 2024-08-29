"use client";
import { useRouter } from "next/navigation"

// to access domain/user/[id], it will shows id on the screen
export default function User( {params} ) {
    const router = useRouter();

    return (
        <div>
            <h1>{ params.id }</h1>
            <button onClick={ router.back }>Go Back</button>
        </div>
    );
}