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
                        The origin of this web came to me in 2021. During that year, we were still facing the threat of COVID-19, which led to bans on large gatherings. 
                        This really affected our daily lives, including my church activities. At that time, my pastor was looking for interactive and creative ways to read the Bible with our church community. <br/>
                        Inspired by an online game featuring true or false mini-games, I suggested to my pastor that I could create a Bible verse true or false game for our church group. 
                        The early stages of development were quite challenging since I did not have any prior experience in web development.
                        I learned about Google App Scripts through YouTube and tried to implement it using Google Drive and Google Sheets as a database. 
                        Eventually, I was able to launch a series of Bible verse OX games, which my church group really enjoyed playing. <br/>
                        This website is an extension of the original Bible OX game, and I have added two more features: a Hong Kong OX game and a Canada OX game. 
                        I hope this will be helpful for you if you want to learn more about Hong Kong and Canada.
                    </div>
                </div>
                <div className='text-3xl font-bold p-3 m-3'>About Me</div>
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <div className="row-auto text-xl bg-sky-200/50 border-sky-900 border-2 rounded-md p-3 text-gray-700 justify-center">
                        My name is Diamond, and I've been in the tech industry for over 15 years. 
                        I started my career in a scientific and engineering role after studying physics at university. 
                        As time went on, a significant shift pushed me toward coding. 
                        I was amazed by how software could automate tasks and unlock human potential. 
                        In the last few years as a software developer, I love exploring new programming languages, frameworks, and technologies to enhance my skills. 
                        My natural curiosity keeps me looking for the latest innovations and figuring out how they can solve real-world problems. 
                        I also enjoy working with teams from different areas to bring projects to life.
                    </div>
                </div>
                <BasicButtonPanel />
            </main>
        </body>
    );
}