"use client";
import React from 'react';
import { useState, useEffect } from 'react';

function RandomIntegerArray() {
    // Sample Question Data
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
            question : "Five women's names appear in the genealogy of Jesus in the Gospel of Matthew.",
            answer : true,
            explanation: "(Matthew 1:3,5,6,16)"
        },
        {
            questionId : 3,
            question : "Matthew 1:23 'The virgin will conceive and give birth to a son, and they will call him Immanuel” comes from the Old Testament Psalms.",
            answer : false,
            explanation: "It comes from Isaiah 7 in the Old Testament (Isaiah 7:14)"
        },
        {
            questionId : 4,
            question : "Matthew 3:3 'A voice of one calling in the wilderness, 'Prepare the way for the Lord, make straight paths for him.'' comes from Isaiah chapter 40.",
            answer : true,
            explanation: "(Matthew 3:3, Isaiah 40:3)"
        },
        {
            questionId : 5,
            question : "Jesus was born in Bethlehem, Judah.",
            answer : true,
            explanation: "(Matthew 2:1)"
        },
        {
            questionId : 6,
            question : "Joseph's family fled to Persia in the east to avoid King Herod's pursuit.",
            answer : false,
            explanation: "They were fleeing to the southwest to Egypt (Matthew 2:13)"
        },
        {
            questionId : 7,
            question : "After Joseph's family returned to the land of Israel, they settled in Nazareth.",
            answer : true,
            explanation: "(Matthew 2:23)"
        },
        {
            questionId: 8,
            question: "Jesus was baptized by John the Baptist on the Sea of ​​Galilee.",
            answer: false,
            explanation: "Jesus was baptized by John the Baptist in the Jordan River (Matthew 3:13)"
        },
        {
            questionId: 9,
            question: "John the Baptist used the metaphor of a rock to exhort the Israelites to repent.",
            answer: false,
            explanation: "John the Baptist used the metaphor of fruitfulness (Matthew 3:7-10)"
        },
        {
            questionId: 10,
            question: "John the Baptist warned the Israelites not to think that they would be saved because they had Abraham as their ancestor.",
            answer: true,
            explanation: "(Matthew 3:9-10)"
        },
        {
            questionId: 21,
            question: "When Jesus heard that John was in prison, he left Nazareth and went to the region of Zebulun and Naphtali.",
            answer: true,
            explanation: "(Matthew 4:13)"
        },
        {
            questionId: 24,
            question: "When Jesus first sent out his disciples, they only gathered in the area of ​​Israel for preaching.",
            answer: true,
            explanation: "(Matthew 10:5-6)"
        },
        {
            questionId: 27,
            question: "In the Sermon on the Mount in Matthew 5, Jesus said that whoever breaks one of the commandments will be called the greatest in the kingdom of heaven.",
            answer: false,
            explanation: "Jesus said whoever breaks one of the commandments will be called the least in the kingdom of heaven (Matthew 5:19)"
        },
        {
            questionId: 30,
            question: "John and James were casting their nets for fishing when Jesus called them.",
            answer: false,
            explanation: "They are mending the net on the boat (Matthew 4:21-22)"
        },
        {
            questionId: 46,
            question: "In Matthew 12, Jesus used soil as a metaphor to tell the difference between good and evil people.",
            answer: false,
            explanation: "Jesus used the parable of the fruit of a tree to distinguish between good and evil people (Matthew 12:33-36)"
        },
    ]

    // generate and return an array of random pick questions
    function generateRandomQuestionArr() {
        const n = questionsSet.length;
        const resultSet = new Set();
        
        while (resultSet.size < noOfRound){
            const index = Math.floor(Math.random() * n);
            resultSet.add(questionsSet[index]);
        }
        const resultArr = Array.from(resultSet);
        console.log(resultArr);
        return resultArr;
    }

    // using useEffect to generate initial question set
    const [questionArr, setQuestionArr] = useState([]);
    useEffect(() => {
        const resultArray = generateRandomQuestionArr();
        setQuestionArr(resultArray);
        console.log(questionArr);
    }, []);


    const functA = () => {
        console.log(questionArr);
    }
   
    return (
        <div>
        <button onClick={functA}>Function A</button><br/>
        </div>
    );
}

export default RandomIntegerArray;