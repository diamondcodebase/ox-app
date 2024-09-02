export default function AnswernBox({answer, explanation, visible }) {
    const boxContent = visible ? (
        <div className='answerBox bg-yellow-100 border-indigo-900 border-10 rounded-sm p-3'>
            <h3 className='text-4xl text-green-900'> {answer} </h3>

        </div>) : (<></>);

    return (        
        <div> {boxContent} </div>   
    );
}