"use client";
import { useEffect } from "react";
import { useState } from "react";

export default function Home(){
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/questionset?len=5")
            .then((data) => data.json())
            .then((data) => {
                setQuestions(data);
            });
    }, []);

    return (
        <div>
            <h2>Questions from API</h2>
            { questions.map((question) => (
                <div>
                    <p>QuestionID: {question.questionId}</p>
                    <p>QuestionText: {question.questionText}</p>
                </div>
            ))}
        </div>
    );
}
    