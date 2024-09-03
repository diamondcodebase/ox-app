"use client";
import { useState, useEffect } from "react";
import StatusBar from "@/components/StatusBar";
import QuestionBox from "@/components/QuestionBox";
import AnswerBox from "@/components/AnswerBox";
import ImageButton from "@/components/ImageButton";
import CustomButtonV from "@/components/CustomButtonV";
import ResultSummary from "@/components/ResultSummary";
import BasicButtonPanel from "@/components/BasicButtonPanel";
import Image from "next/image";

export default function BibleQuiz() {
    const noOfRound = 5;
    const [isGameStarted, setGameStarted] = useState(false);
    const [isGameOver, setGameOver] = useState(false);

    const [isQuestionVisible, setQuestionVisible] = useState(false);
    const [isAnswerVisible, setAnswerVisible] = useState(false);
    
    const [round, setRound] = useState(0);
    const [score, setScore] = useState(0);

    const [isAnswered, setAnswered] = useState(false);
    const [isConfirmed, setConfirmed] = useState(false);

    const [questionContent, setQuestionContent] = useState("");
    const [explanation, setExplanation] = useState("");
    const [userAnswer, setUserAnswer] = useState(false);
    const [modelAnswer, setModelAnswer] = useState(false);
    const [showAnswer, setShowAnswer] = useState("");

    const questionsSet = [
        {
            questionId : 1,
            question : "馬太福音中耶穌基督的家譜是由亞當開始",
            answer : false,
            explanation: "馬太福音中耶穌基督的家譜是由亞伯拉罕開始 (馬太福音 1:1)"
        },
        {
            questionId : 2,
            question : "馬太福音中耶穌家譜共出現五位女性的名字",
            answer : true,
            explanation: "(馬太福音 1:3,5,6,16)"
        },
        {
            questionId : 3,
            question : "馬太福音1:23「必有童女懷孕生子，人要稱他的名為以馬內利」出自舊約詩篇",
            answer : false,
            explanation: "出自舊約以賽亞書7章 (以賽亞書 7:14)"
        },
        {
            questionId : 4,
            question : "馬太福音3:3 「在曠野有人聲喊著說：『預備主的道，修直他的路！』」出自以賽亞書四十章",
            answer : true,
            explanation: "(馬太福音 3:3、以賽亞書 40:3)"
        },
        {
            questionId : 5,
            question : "耶穌出生於猶大的伯利恆",
            answer : true,
            explanation: "(馬太福音 2:1)"
        },
    ]
    const chosenPhrase = "你認為這句敍述是："
    const answered = true;   

    function getShowAnswer(res){
        const answer = res ? ("正確") : ("錯誤");
        setShowAnswer(answer);
        setUserAnswer(res);
        setAnswered(true);
    }

    function startGame(){
        setGameStarted(true);
        setQuestionVisible(true);
        nextRound();
    }

    function confirmAnswer(){
        updateScore()
        setConfirmed(true);
        setAnswerVisible(true);
        setAnswered(true);
    }

    function updateScore(){
        console.log(userAnswer, modelAnswer, questionContent);
        if(userAnswer == modelAnswer){
            setScore(score + 1);
         }
    }

    function resetRound(){
        var question = questionsSet[round];
        setModelAnswer(question.answer);
        setQuestionContent(question.question);
        setExplanation(question.explanation);           
        setAnswerVisible(false);
        setAnswered(false);
        setConfirmed(false);
        setUserAnswer(null);
        setShowAnswer("");     
    }

    function nextRound(){
        
        if(round >=noOfRound){
            gameOver();
        }
        else{
            setRound(round + 1);
            resetRound();
        }       
    }

    function gameOver(){
        setGameOver(true);
        setQuestionVisible(false);
        setAnswerVisible(false);        
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div className='text-5xl font-bold p-3 m-3'>Bible OX Challenge</div>
            <StatusBar 
                round = {round}
                score = {score}
                visible = {isGameStarted && !isGameOver}
            />
            <CustomButtonV 
                btnLabel="Start Game"
                visible = {!isGameStarted}
                color = "Indigo"
                onClickFn ={() => startGame() }
            />
            <QuestionBox 
                question={questionContent} 
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
                    visible={isGameStarted && !isConfirmed}
                />
                <ImageButton
                    btnLabel="Wrong"
                    imgSrc="/ThisIsWrong.png"
                    onClickFn={() => getShowAnswer(false)}
                    visible={isGameStarted && !isConfirmed}
                />
            </div>
            <AnswerBox 
                userAnswer={userAnswer}
                modelAnswer={modelAnswer}
                explanation={explanation}
                visible = {isAnswerVisible}
            />
            <CustomButtonV 
                btnLabel="Confirm Answer"
                visible = {isGameStarted && !isConfirmed && isAnswered}
                color = "Indigo"
                onClickFn ={() => confirmAnswer() }
            />
            <CustomButtonV 
                btnLabel="Next Question"
                visible = {isGameStarted && isConfirmed && !isGameOver}
                color = "Indigo"
                onClickFn ={() => nextRound() }
            />
            <ResultSummary 
                score = {score}
                round = {round}
                visible = {isGameOver}
            />
            <BasicButtonPanel /> 
        </main>
    );
}