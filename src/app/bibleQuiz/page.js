"use client";
import { useState, useEffect } from "react";
import React from "react";
import CountDownTimer from "@/components/CountDownTimer";
import StatusBar from "@/components/StatusBar";
import QuestionBox from "@/components/QuestionBox";
import AnswerBox from "@/components/AnswerBox";
import ImageButton from "@/components/ImageButton";
import CustomButtonV from "@/components/CustomButtonV";
import ResultSummary from "@/components/ResultSummary";
import BasicButtonPanel from "@/components/BasicButtonPanel";
import Image from "next/image";

// For passing current lang state
import Link from "next/link"; // import the Link Tag
import translation from "@/data/translation";
import { useSearchParams } from "next/navigation";
import AdvancedButtonPanel from "@/components/AdvancedButtonPanel";


export default function BibleQuiz() {
    const searchParams = useSearchParams();
    const currentLanguage = searchParams.get('currentLanguage');

    const noOfRound = 5;
    const [isGameStarted, setGameStarted] = useState(false);
    const [isGameOver, setGameOver] = useState(false);

    const [isTimerVisible, setTimerVisible] = useState(false);
    const [isTimerRunning, setTimerRunning] = useState(false);
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
            question : "The genealogy of Jesus Christ in the Gospel of Matthew begins with Adam.",
            answer : false,
            explanation: "The genealogy of Jesus Christ in Matthew begins with Abraham (Matthew 1:1)"
        },
        {
            questionId : 2,
            question : "Five women's names appear in the genealogy of Jesus in the Gospel of Matthew",
            answer : true,
            explanation: "(Matthew 1:3,5,6,16)"
        },
        {
            questionId : 3,
            question : "Matthew 1:23 'The virgin will conceive and give birth to a son, and they will call him Immanuel” comes from the Old Testament Psalms",
            answer : false,
            explanation: "It comes from Isaiah 7 in the Old Testament (Isaiah 7:14)"
        },
        {
            questionId : 4,
            question : "Matthew 3:3 'A voice of one calling in the wilderness, 'Prepare the way for the Lord, make straight paths for him.'' comes from Isaiah chapter 40",
            answer : true,
            explanation: "(Matthew 3:3, Isaiah 40:3)"
        },
        {
            questionId : 5,
            question : "Jesus was born in Bethlehem, Judah",
            answer : true,
            explanation: "(Matthew 2:1)"
        },
    ]
    const chosenPhrase = "You think this statement is "
    const answered = true;   

    function getShowAnswer(res){
        const answer = res ? ("Right") : ("Wrong");
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
        setTimerVisible(false);
        setTimerRunning(false);
        updateScore()
        setConfirmed(true);
        setAnswerVisible(true);
    }

    function updateScore(){
        //console.log(userAnswer, modelAnswer, questionContent);
        if(userAnswer == modelAnswer && isAnswered){
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
        setTimerRunning(true);
        setTimerVisible(true);     
    }

    function randomQuestion(questionsSet, resultSize){
        const n = questionsSet.length;
        const randomArray = [];
        for (let i = 0; i < resultSize; i++) {
            randomArray.push(Math.floor(Math.random() * n));
        }
        return randomArray;
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
        <body>
            <header>{currentLanguage}</header>
            <main className="flex min-h-screen flex-col items-center justify-between p-10">
                <div className='text-5xl font-bold p-3 m-3'>Bible OX Challenge</div>
                <CountDownTimer 
                    secLimit = {15} 
                    visible = {isTimerVisible} 
                    running = {isTimerRunning} 
                    timeoutFn = {() => confirmAnswer() }
                />
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
                    isAnswered = {isAnswered} 
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
                <AdvancedButtonPanel currentLanguage={currentLanguage}/> 
            </main>
        </body>
    );
}