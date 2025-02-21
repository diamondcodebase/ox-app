"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

import CustomButton from "@/components/CustomButton";
//import translation from "@/data/translation";
import contentText from "@/data/contentText";

export default function AdvancedButtonPanel(){
    const displayTextHome = contentText.buttonpanel.home;

    return (
        <div className='flex justify-center mb-4 flex-row items-center'>
            <CustomButton 
                btnLabel="Home" 
                hrefLink ="../"
            />
        </div>
    );
}