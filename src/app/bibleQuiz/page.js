"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import QuestionBox from "@/components/QuestionBox";
import PostC from "@/components/PostC";
import Image from "next/image";

export default function BibleQuiz() {
    const router = useRouter();
    const [chosenAnswer, setChosenAnswer] = useState("");

    const currentQuestion = {
        questionId : 1,
        question : "馬太福音中耶穌基督的家譜是由亞當開始",
        visible : true,
        answered : false
    }
    const chosenPhrase = "你認為這句敍述是："
    const answered = true;

    

    function selectAnswer(res){
        const answer = res ? ("正確") : ("錯誤");
        setChosenAnswer(answer);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='text-3xl font-bold'>Bible OX Challenge</div>
            <div id='loadNo' className='hide'></div>
            <button type='submit' id='startButton'>Start Game</button>
            <QuestionBox question={currentQuestion.question} visible={currentQuestion.visible} chosenPhrase={chosenPhrase} answered={answered} chosenAnswer={chosenAnswer}
            />
            <div className='flex justify-center mb-4'>
                <button 
                    className='border-gray-300 text-4xl text-green-900 border-2 rounded-md p-1.5'
                    onClick={() => selectAnswer(true)}
                >
                    <Image
                        src="/ThisIsRight.png"
                        alt="Right"
                        width={100}
                        height={100}
                        priority
                    />
                </button>
                <button 
                    className='border-gray-300 text-4xl text-green-900 border-2 rounded-md p-1.5'
                    onClick={() => selectAnswer(false)}
                >
                    <Image
                        src="/ThisIsWrong.png"
                        alt="Wrong"
                        width={100}
                        height={100}
                        priority
                    />
                </button>
            </div>
            <button onClick={ router.back }>Back</button>
            <button><a href="../">Home</a></button>
        </main>
    );
}