"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

import { useSearchParams } from "next/navigation";
import CustomButtonA from "@/components/CustomButtonA";
import translation from "@/data/translation";

export default function AdvancedButtonPanel(currentLanguage){
    const currentLang = currentLanguage.currentLanguage;
    console.log(translation[currentLang]);
    const lang = translation[currentLang].lang;
    const displayTextHome = translation[currentLang].buttonpanel.home;

    return (
        <div className='flex justify-center mb-4 flex-row items-center'>
            {/* <CustomButtonA 
                pathname="Back"
                query = {{ currentLanguage: currentLanguage }} 
                displayText={currentLanguage}
            /> */}
            <CustomButtonA 
                pathname="../" 
                query = {{ currentLanguage: currentLanguage }}
                displayText={displayTextHome}
            />
        </div>
    );
}