export default function ResultSummary({ score, round, visible }) {
    let endStatement = "謝謝你的參與";
    let endStatement2 = "繼續努力學習";
    let scoreRatio = score / round;

    if(scoreRatio == 1){
        endStatement = "好極！";
    }
    else if(scoreRatio >= 0.8){
        endStatement = "你表現得很好呀";
    }
    else if(scoreRatio >= 0.6){
        endStatement = "你表現不錯呀";
    }
    else if(scoreRatio >= 0.4){
        endStatement = "非常欣賞你的努力";
    }
    
    if(!visible){
        return (<></>);
    }
    else{

        return (
            <div className="flex flex-col items-center justify-between bg-yellow-100 border-indigo-900 border-4 rounded-md p-2">
                <div className='text-6xl font-bold p-1 m-1'>你完成了 {round} 回合</div>
                <div className='text-6xl font-bold p-1 m-1'>總分 {score} </div>
                <div className='text-5xl font-bold p-1 m-1'> { endStatement + " " + endStatement2 } </div>
            </div>
        );
    }

    

}