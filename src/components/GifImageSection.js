import React from 'react';
import { motion } from "framer-motion";

export default function GifImageSection({displayText, imageSrc, alt}) {
    const displayCoding = "Sub AutoFitRows()";
    const displayCoding2 = "Cells.Select";
    const displayCoding3 = "Cells.EntireRow.AutoFit";
    const displayCoding4 = "End Sub";
    const displayCodingSplit = displayCoding.split(" ");
    const displayCodingSplit2 = displayCoding2.split(" ");
    const displayCodingSplit3 = displayCoding3.split(" ");
    const displayCodingSplit4 = displayCoding4.split(" ");
    return (
        <div>
            {
                <div className='flex flex-row items-center'>
                    <div className='text-2xl font-bold p-3 m-3'>
                        { displayText }
                    </div>
                    <div>
                        <div className='text-lg font-bold p-3 m-3 items-start'>
                            <section id="codingDisplay">
                                <div>
                                    {displayCodingSplit.map((el, i) => (
                                        <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i / 5,
                                        }}
                                        key={i}
                                        >
                                        {el}{" "}
                                        </motion.span>
                                    ))}
                                </div>
                                <div>
                                    {displayCodingSplit2.map((el, i) => (
                                        <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i / 5 + 1,
                                        }}
                                        key={i}
                                        >
                                        {el}{" "}
                                        </motion.span>
                                    ))}
                                </div>
                                <div>
                                    {displayCodingSplit3.map((el, i) => (
                                        <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i / 5 + 2,
                                        }}
                                        key={i}
                                        >
                                        {el}{" "}
                                        </motion.span>
                                    ))}
                                </div>
                                <div>
                                    {displayCodingSplit4.map((el, i) => (
                                        <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i / 5 + 3,
                                        }}
                                        key={i}
                                        >
                                        {el}{" "}
                                        </motion.span>
                                    ))}
                                </div>
                            </section>
                        </div>
                        <img src= { imageSrc } alt= { alt } />
                    </div>
                    
                </div>
            }
        </div>
    );
};