"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import QuestionBox from "@/components/QuestionBox";
import AnswerBox from "@/components/AnswerBox";
import ImageButton from "@/components/ImageButton";
import CustomButtonV from "@/components/CustomButtonV";
import BasicButtonPanel from "@/components/BasicButtonPanel"
import Image from "next/image";

export default function BibleQuiz() {
    const router = useRouter();
    const [userAnswer, setUserAnswer] = useState();
    const [showAnswer, setShowAnswer] = useState("");
    const [isGameStarted, setGameStarted] = useState(false);
    const [isQuestionVisible, setQuestionVisible] = useState(false);
    const [isAnswerVisible, setAnswerVisible] = useState(false);
    const [isAnswered, setAnswered] = useState(false);

    const currentQuestions = [
        {
            questionId : 1,
            question : "馬太福音中耶穌基督的家譜是由亞當開始",
            answer : false,
            explanation: "馬太福音中耶穌基督的家譜是由亞伯拉罕開始 (馬太福音 1:1)",
            visible : true
        },
        {
            questionId : 2,
            question : "馬太福音中耶穌家譜共出現五位女性的名字",
            answer : true,
            explanation: "(馬太福音 1:3,5,6,16)",
            visible : true
        },
        {
            questionId : 3,
            question : "馬太福音1:23「必有童女懷孕生子，人要稱他的名為以馬內利」出自舊約詩篇",
            answer : false,
            explanation: "出自舊約以賽亞書7章 (以賽亞書 7:14)",
            visible : true
        },
    ]
    const chosenPhrase = "你認為這句敍述是："
    const answered = true;   

    function getShowAnswer(res){
        const answer = res ? ("正確") : ("錯誤");
        setShowAnswer(answer);
        setUserAnswer(res);
        setAnswerVisible(true);
        setAnswered(true);
    }

    function startGame(){
        setGameStarted(true);
        setQuestionVisible(true);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='text-3xl font-bold'>Bible OX Challenge</div>
            <div id='loadNo' className='hide'></div>
            <CustomButtonV 
                btnLabel="Start Game"
                visible = {!isGameStarted}
                onClickFn ={ startGame }
            />
            <QuestionBox 
                question={currentQuestions[0].question} 
                visible={isQuestionVisible} 
                chosenPhrase={chosenPhrase} 
                answered={answered} 
                showAnswer={showAnswer}
            />
            <div className='flex justify-center mb-4 flex-row items-center'>
                <ImageButton 
                    btnLabel="Right" 
                    imgSrc="/ThisIsRight.png" 
                    onClickFn={() => getShowAnswer(true)} 
                    visible={isGameStarted}
                />
                <ImageButton
                    btnLabel="Wrong"
                    imgSrc="/ThisIsWrong.png"
                    onClickFn={() => getShowAnswer(false)}
                    visible={isGameStarted}
                />
            </div>
            <AnswerBox 
                userAnswer={userAnswer}
                modelAnswer={currentQuestions[0].answer}
                visible = {isAnswerVisible}
            />
            <BasicButtonPanel /> 
        </main>
    );
}