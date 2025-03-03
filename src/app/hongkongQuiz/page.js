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
import { BackendPort } from "@/config/config";
import BasicButtonPanel from "@/components/BasicButtonPanel";
import Image from "next/image";

// For passing current lang state
import Link from "next/link"; // import the Link Tag
import translation from "@/data/translation";
import AdvancedButtonPanel from "@/components/AdvancedButtonPanel";


export default function HongKongQuiz() {
    const noOfRound = 5;
    // using useEffect to generate initial question set
    const [questions, setQuestions] = useState([]);

    // This is method to get questionSet from backend and database
    useEffect(() => {
        fetch("http://localhost:" + BackendPort + "/questionset/hongkong?len=5")
            .then((data) => data.json())
            .then((data) => {
                setQuestions(data);
            });
        },[]
    );

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
            question : "Hong Kong was a British colony until 1997.",
            answer : true,
            explanation: "Hong Kong was a British colony from 1842 until it was transferred back to China in 1997."
        },
        {
            questionId : 2,
            question : "Cantonese is the official language of Hong Kong.",
            answer : true,
            explanation: "Cantonese is the primary official language used in Hong Kong, along with English."
        },
        {
            questionId : 3,
            question : "The Hong Kong Disneyland Resort is the largest Disney theme park in the world.",
            answer : false,
            explanation: "The Walt Disney World Resort in Florida is the largest Disney theme park in the world, not the Hong Kong Disneyland Resort."
        },
        {
            questionId : 4,
            question : "The Kowloon-Canton Railway, the first railway in Hong Kong, was completed in 1998.",
            answer : false,
            explanation: "The Kowloon-Canton Railway, connecting Kowloon to mainland China, was completed in 1911 during the British colonial era."
        },
        {
            questionId : 5,
            question : "Hong Kong has the highest population density in the world.",
            answer : true,
            explanation: "Hong Kong is one of the most densely populated places in the world, with a population density of over 6,700 people per square kilometer."
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
            <header></header>
            <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-clip-border"
                style={{backgroundImage: `url(/hongkongOX_BG.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"                              
            }}>
                <div className='text-5xl font-bold p-3 m-3'>Hong Kong OX Challenge</div>
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
                        imgSrc="/Right_Transparent_BG.png" 
                        onClickFn={() => getShowAnswer(true)} 
                        visible={isGameStarted && !isConfirmed}
                    />
                    <ImageButton
                        btnLabel="Wrong"
                        imgSrc="/Wrong_Transparent_BG.png"
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
                <AdvancedButtonPanel/> 
            </main>
        </body>
    );
}