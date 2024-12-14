import React from 'react';
import { motion } from "framer-motion";

export default function Section8({displayText, imageSrc, alt}) {
    return (
        <div>
            {
                <div className='flex flex-row items-center justify-between'>
                    <div className='text-2xl sm:text-4xl font-bold p-3 m-3'>
                        { displayText }
                    </div>
                    <div>
                        <img src= { imageSrc } alt= { alt } />
                    </div>
                    
                </div>
            }
        </div>
    );
};