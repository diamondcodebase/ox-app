import React from 'react';
import { motion } from "framer-motion";

export default function Section4({displayText, imageSrc, alt, imageSrc2, alt2}) {
    return (
        <div>
            {
                <div className='flex flex-col items-center justify-between'
                    style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                }}>
                    <div className='text-2xl sm:text-4xl font-bold p-3 m-3'>
                        { displayText }
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <img src= { imageSrc } alt= { alt } />
                        </div>
                        <div>
                            <img src= { imageSrc2 } alt= { alt2 } />
                        </div>
                    </div>
                    
                </div>
            }
        </div>
    );
};