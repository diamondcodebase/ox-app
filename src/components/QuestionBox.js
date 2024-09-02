import Image from "next/image";

export default function QuestionBox({question, visible, chosenPhrase, chosen, answered }) {
    function isEmptyOrSpace(str){
        return str === null || str.match(/^ *$/) !== null || str === "";
    }

    const chosenPart = answered ? (
        <div className='row-auto text-4xl text-green-900 justify-center'>
            {chosenPhrase}
            <span>{chosen}</span>
        </div>
    ) : (<></>);
    
    const boxContent = visible ? (
        <div className='questionBox bg-yellow-100 border-indigo-900 border-20 rounded-md p-3 flex flex-col items-center'>
            <h3 className='row-auto text-4xl text-green-900 mb-4'> {question} </h3>
            <div className='flex justify-center mb-4'>
                <button className='border-gray-300 text-4xl text-green-900 border-2 rounded-md p-1.5'>
                <Image
                    src="/ThisIsRight.png"
                    alt="Right"
                    width={100}
                    height={100}
                    priority
                />
                </button>
                <button className='border-gray-300 text-4xl text-green-900 border-2 rounded-md p-1.5'>
                <Image
                    src="/ThisIsWrong.png"
                    alt="Wrong"
                    width={100}
                    height={100}
                    priority
                />
                </button>
            </div>
            {chosenPart}
        </div>) : (<></>);

    return (        
        <div> {boxContent} </div>   
    );
}