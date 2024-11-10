"use client";
import React, { useState } from 'react';
import Link from "next/link"; // import the Link Tag
import Image from "next/image";

export default function App() {
    return (
        <body>
            <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                    Save Changes
                </button>
            </div>

            <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <Link
                    href={{
                        pathname: "/canadaQuiz"
                      }}  
                      className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 transition-colors hover:-translate-y-1 hover:scale-110 hover:border-red-300 hover:bg-red-200/40 hover:dark:border-red-300 hover:dark:bg-red-200/40"
                      rel="noopener noreferrer"
                    >

                    <Image
                        src="/maple.png"
                        alt="An image"
                        width={100}
                        height={100}
                        className="rounded-md opacity-0 object-cover ease-in-out duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-40"
                    />

                    <h2 className={`mb-3 text-3xl font-bold text-red-800`}>
                        Canada OX{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-red-900`}>
                        Learn more about Canada!
                    </p>
                </Link>
          </div>
        </body>
    );
}
