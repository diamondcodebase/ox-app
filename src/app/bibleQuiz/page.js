"use client";
import { useRouter } from "next/navigation";
import QuestionBox from "@/components/QuestionBox";
import PostC from "@/components/PostC";

export default function BibleQuiz() {
    const router = useRouter();
    const currentQuestion = {
        questionId : 1,
        question : "馬太福音中耶穌基督的家譜是由亞當開始",
        visible : true,
        answered : false
    }
    const chosenPhrase = "你認為這句敍述是："
    const answered = true;
    const chosenAnswer = true;
    const chosen = "正確";

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='text-3xl font-bold'>Bible OX Challenge</div>
            <div id='loadNo' className='hide'></div>
            <button type='submit' id='startButton'>Start Game</button>
            <QuestionBox question={currentQuestion.question} visible={currentQuestion.visible} chosenPhrase={chosenPhrase} chosen={chosen} answered={answered}
            />
            <button onClick={ router.back }>Back</button>
            <button><a href="../">Home</a></button>
        </main>
    );
}