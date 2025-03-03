"use client";
import { useState } from "react"; // when the state changes, the web will be rendering again
import { useRouter } from "next/navigation";

export default function User() {
    // user state
    const [userId, setUserId] = useState("");
    const router = useRouter()

    function navigate(){
        router.push("/user/" + userId);
    }

    return (
        <div>
            <h1>User input</h1>
            <input 
                type="text" 
                placeholder="user id" 
                value={userId} 
                onChange={ (e) => setUserId(e.target.value)}
            />
            <button onClick={ router.back }>Back</button>
            <button><a href="../">Home</a></button>
        </div>
    );
}