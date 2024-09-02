"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import QuestionBox from "@/components/QuestionBox";
import AnswerBox from "@/components/AnswerBox";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function BibleQuiz() {
    const router = useRouter();
    const [userAnswer, setUserAnswer] = useState();
    const [showAnswer, setShowAnswer] = useState("");
    const [isAnswerVisible, setAnswerVisible] = useState(false);

    const currentQuestion = {
        questionId : 1,
        question : "馬太福音中耶穌基督的家譜是由亞當開始",
        answer : false,
        explanation: "馬太福音中耶穌基督的家譜是由亞伯拉罕開始",
        visible : true
    }
    const chosenPhrase = "你認為這句敍述是："
    const answered = true;   

    function getShowAnswer(res){
        const answer = res ? ("正確") : ("錯誤");
        setShowAnswer(answer);
        setUserAnswer(res);
        setAnswerVisible(true);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='text-3xl font-bold'>Bible OX Challenge</div>
            <div id='loadNo' className='hide'></div>
            <button type='submit' id='startButton'>Start Game</button>
            <QuestionBox 
                question={currentQuestion.question} 
                visible={currentQuestion.visible} 
                chosenPhrase={chosenPhrase} 
                answered={answered} 
                showAnswer={showAnswer}
            />
            <div className='flex justify-center mb-4 flex-row items-center'>
                <button 
                    className='text-4xl text-green-900 p-1.5'
                    onClick={() => getShowAnswer(true)}
                >
                    <Image
                        src="/ThisIsRight.png"
                        alt="Right"
                        width={120}
                        height={120}
                        priority
                    />
                </button>
                <button 
                    className='text-4xl text-green-900 p-1.5'
                    onClick={() => getShowAnswer(false)}
                >
                    <Image
                        src="/ThisIsWrong.png"
                        alt="Wrong"
                        width={120}
                        height={120}
                        priority
                    />
                </button>
            </div>
            <AnswerBox 
                userAnswer={userAnswer}
                modelAnswer={currentQuestion.answer}
                visible = {isAnswerVisible}
            />
            <CustomButton 
                btnLabel="Back"
                hrefLink = "" 
                onClickFn ={ router.back } 
            />
            <CustomButton 
                btnLabel="Home" 
                hrefLink ="../"
            />
        </main>
    );
}