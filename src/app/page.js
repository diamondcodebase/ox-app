"use client";
import Image from "next/image";
import LanguageSelector from "@/components/LanguageSelector";
import { Post } from "@/components/Post";
import PostC from "@/components/PostC";
import PostD from "@/components/PostDefault";
import TextS, {TextIn} from "@/components/TextS";
import React, { useState, useEffect } from 'react';

// For passing current lang state
import Link from "next/link"; // import the Link Tag

// import translation from "@/data/translation";
import contentText from "@/data/contentText";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const latestLanguage = searchParams.get('currentLanguage');
    console.log(latestLanguage);
    if(latestLanguage !== null){      
      setCurrentLanguage(latestLanguage.currentLanguage);
    }
  }, [searchParams]);

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

      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24" 
            style={{backgroundImage: `url(/plant_bg.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
      }}>

        <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href={{
              pathname: "/about",
              query: { currentLanguage: currentLanguage }
            }}   
            className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 transition-colors hover:-translate-y-1 hover:scale-110 hover:border-green-500 hover:bg-green-200/50"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-3xl font-bold text-green-800`}>
              { contentText.mainpage.about }
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-green-900`}>
            { contentText.mainpage.aboutS }
            </p>
          </Link>
          
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

          <Link
            href="/hongkongQuiz"
            className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 transition-colors hover:-translate-y-1 hover:scale-110 hover:border-purple-300 hover:bg-purple-200/40 hover:dark:border-purple-300 hover:dark:bg-purple-200/40"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-3xl font-bold text-purple-800`}>
              Hong Kong OX{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-balance text-purple-900`}>
              Learn more about Hong Kong!
            </p>
          </Link>

          <Link
            href={{
              pathname: "/bibleQuiz"
            }}           
            className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 transition-colors hover:-translate-y-1 hover:scale-110 hover:border-yellow-300 hover:bg-yellow-100/50 hover:dark:border-yellow-300 hover:dark:bg-yellow-100/50"
            rel="noopener noreferrer"
          >            
              <h2 className={`mb-3 text-3xl font-bold text-yellow-800`}>
                { contentText.mainpage.bibleOX }
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-lg font-medium opacity-50 text-yellow-900`}>
                { contentText.mainpage.bibleOXS }
              </p>
          </Link>
        
        </div>
        {/* <div>
          <TextIn content="Hello World" />
          <TextS content="My name is Diamond" strong={true} />
          <TextS content="This is my first React.js app" strong = {false} />
        </div> */}
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
