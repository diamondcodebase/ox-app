import React, { useState } from 'react';

export default function StationMap({displayText, displayText2}) {
    const [circles, setCircles] = useState([
        { text: 'Research Scholar', color: 'yellow', borderWidth: '8px', borderColor: 'brown' },
    ]);
    const [round, setRound] = useState(0);

    const roles = ["R&D Engineer","QA Engineer","Analyst Programmer","Software Analyst"];

    const handleClick = (index) => {
        if(round < roles.length){
            setCircles((prevCircles) => [
                ...prevCircles,
                {
                    text: roles[prevCircles.length-1],
                    color: 'yellow',
                    borderWidth: '8px',
                    borderColor: 'brown',
                },
            ]);
            setRound(round+1);
        }
    };

    

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='text-2xl sm:text-4xl font-bold p-20 mt-20'>
                { displayText }
            </div>
            <div className='text-2xl sm:text-4xl font-bold p-20'>
                { displayText2 }
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >

                {circles.map((circle, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '20px',
                        }}
                    >
                        {circle.text && (
                            <div
                                className={'text-base sm:text-xl font-bold p-2'}
                                style={{
                                    marginBottom: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {circle.text}
                            </div>
                        )}
                    <div
                        style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            backgroundColor: circle.color,
                            border: `${circle.borderWidth} solid ${circle.borderColor}`,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onClick={() => handleClick(index)}
                    >
                        {index === 0}
                    </div>

                </div>
            ))}
            </div>
        </div>  
    );
}