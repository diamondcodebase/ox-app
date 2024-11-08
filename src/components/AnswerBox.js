export default function AnswernBox({isAnswered, userAnswer, modelAnswer, explanation, visible }) {
    const isCorrect = userAnswer === modelAnswer;
    const responsePart = 
        (<div className='row-auto text-4xl text-green-900 justify-center'>
            <span> {isAnswered ? (isCorrect ? ("Owesome！") : ("Oop...")) : ("Time's up!")}</span>
        </div>
        );

    const boxContent = visible ? (
        <div className='flex flex-col items-center justify-between bg-yellow-100 border-indigo-900 border-10 rounded-sm p-3'>
            <div className='text-3xl text-green-900'> {responsePart} </div>
            <div className='text-3xl text-green-900'> {explanation} </div>
        </div>) : (<></>);

    return (        
        <div> {boxContent} </div>   
    );
}