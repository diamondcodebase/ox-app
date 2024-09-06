"use client";
import Image from "next/image";
import LanguageSelector from "@/components/LanguageSelector";
import { Post } from "@/components/Post";
import PostC from "@/components/PostC";
import PostD from "@/components/PostDefault";
import TextS, {TextIn} from "@/components/TextS";
import React, { useState } from 'react';

// For passing current lang state
import Link from "next/link"; // import the Link Tag
import translation from "@/data/translation";
import { useSearchParams } from "next/navigation";

export default function Home() {
  // Dynamic content rendering
  const posts = [
    {
      title:"My Dynamic Post", 
      author:"Diamond Dai", 
      content:"This is an example of dynamic rendering", 
      following:true
    },
    {
      title:"My Dynamic Post 2", 
      author:"Diamond Dai", 
      content:"This is the second dynamic rendering", 
      following:false
    },
    {
      title:"My Dynamic Post 3", 
      author:"Diamond Dai", 
      content:"This is the third dynamic rendering", 
      following:false
    }
  ];
  
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <body>
      <header>
        <LanguageSelector 
          FnChangeEng={ () => setCurrentLanguage('en') }
          FnChangeChi={ () => setCurrentLanguage('zh') }
          FnChangeJap={ () => setCurrentLanguage('ja') } 
          currentLang={currentLanguage}
        />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-white before:dark:opacity-10 after:dark:from-white after:dark:via-[#FFFFFF] after:dark:opacity-300 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/plant_bg.jpg"
            alt="Growth Logo"
            width={280}
            height={100}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href={{
              pathname: "/about",
              query: { currentLanguage: currentLanguage }
            }}   
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {translation[currentLanguage]["mainpage"].about } {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            { translation[currentLanguage].mainpage.aboutS }
            </p>
          </Link>
          
          <Link
            href={{
              pathname: "/bibleQuiz",
              query: { currentLanguage: currentLanguage }
            }}           
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >            
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Bible OX{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Take a challenge to know more about the Bible!
              </p>
          </Link>

          <Link
            href="/comingSoon"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Canada History OX{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about the History of Canada!
            </p>
          </Link>          

          <Link
            href="/comingSoon"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Post{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Go to post to leave your comment
            </p>
          </Link>
        </div>
        <div>
          <TextIn content="Hello World" />
          <TextS content="My name is Diamond" strong={true} />
          <TextS content="This is my first React.js app" strong = {false} />
        </div>
        <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          { posts.map((content, idx) => {
            return <PostC {...content} key={idx} />
          }) }
        </div>
      </main>
    </body>

  );
}

// Using posts.map allows us to do is essentially iterate through every single element
