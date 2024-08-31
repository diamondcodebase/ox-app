"use client";
import { useState, useEffect } from "react";
import PostC from "@/components/PostC";

export default function Post() {
    // Implement useState to make a posting function
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [posts, setPosts] = useState([]);

    // useEffect will execute one time when loading the page
    useEffect(() => {
        console.log("run")
    }, []);

    // if including some factors inside array, useEffect will be triggered every time 
    useEffect(() => {
        console.log("trigger")
    }, [content]);

    function addPost() {
        const newPost = {
            author: author,
            content: content,
            title: title,
            following: false,
        };

        setPosts([...posts, newPost]);
        setContent("");
        setAuthor("");
        setTitle("");
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='text-3xl font-bold'>Posts</div>
            <div className="block w-5/6">
                <input 
                    type="text" 
                    value={author} 
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setAuthor(e.target.value)} 
                    placeholder="Author"
                />
                <input 
                    type="text" 
                    value={title} 
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input 
                    type="text" 
                    value={content}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    onChange={(e) => setContent(e.target.value)} 
                    placeholder="Content"
                />
                <button className="text-white-lg" onClick={addPost}>Add Post</button>
            </div>
            <div className="posts">
            { posts.map((post, idx) => 
                (<PostC {...post} key={ idx = Math.random() } />)
            )}
            </div>
        </main>


    );
}