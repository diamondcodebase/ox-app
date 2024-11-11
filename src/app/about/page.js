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
            <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-clip-border"
                style={{backgroundImage: `url(/about_BG.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"                              
            }}>
                <div className='text-3xl font-bold p-3 m-3'>About This Web</div>
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <div className="row-auto text-xl bg-green-200/50 border-green-900 border-2 rounded-md p-3 text-gray-700 justify-center">
                        The origin of this web comes from a fantastic idea in my mind in 2021. <br/>
                        As year 2021 we were still in the threat of COVID. Most of large gatherings were banned. <br/>
                        It really impacted our daily routine life, including my church life. <br/>
                        At that moment, my pastor looked for providing an interactive and creative ways of reading bible to our church fellowship. <br/>
                        An online game with true or false minigame inspired me to suggest my pastor to let me develop a bible verse true or false game for our church fellowship. <br/>
                        The early stage of development is the most difficult time as I did not know web development in the beginning.
                        I learned Google App Scripts from youtube and tried to implemented in Google drive and Google sheet as a database.
                        Eventually I deployed a series of bible verse OX games and my church fellowship enjoyed playing it.
                        This web is the extension of the original bible OX, I try including two more aspects, a Hong Kong OX and Canada OX.
                        This is good for you if you want to know more about Hong Kong and Canada. 
                    </div>
                </div>
                <div className='text-3xl font-bold p-3 m-3'>About Me</div>
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <div className="row-auto text-xl bg-sky-200/50 border-sky-900 border-2 rounded-md p-3 text-gray-700 justify-center">
                        My name is Diamond. I have been working in technical field more than 15 years. <br/>
                        In my early career, I was working in a scientific and engineering role. 
                        My journey began from studying in physics in university. <br/>
                        Over time, a dramatical change led my career go towards coding. 
                        I was impressed by the power of software to automate manual tasks and liberate human potential. <br/>
                        As a software developer in the past few years, I enjoy exploring new languages, frameworks, and technologies to expand my skills. 
                        My natural curiosity also drives me to always seek the latest innovations and evaluate how they could solve real problems. 
                        I also enjoy collaborating with cross-functional teams to bring projects to life.
                    </div>
                </div>
                <BasicButtonPanel />
            </main>
        </body>
    );
}