"use client";
import React from 'react';
import { useState } from 'react';

function RandomIntegerArray() {
    const [integerArray, setIntegerArray] = useState([]);

    const noOfRound = 5;
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
    const generateRandomArray = () => {
        // Generate an array of 10 random integers between 0 and 100
        const newArray = Array.from({ length: noOfRound }, () => Math.floor(Math.random() * questionsSet.length));
        setIntegerArray(newArray);
    };

   
    return (
        <div>
        <button onClick={generateRandomArray}>Generate Random Array</button>
        {integerArray.length > 0 && (
            <div>
            <h3>Random Integer Array:</h3>
            <ul>
                {integerArray.map((num, index) => (
                <li key={index}>{num}</li>
                ))}
            </ul>
            </div>
        )}
        </div>
    );
}

export default RandomIntegerArray;