"use client";
import React, { useState, useEffect } from 'react';
import data from './data.json';

function App() {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    function LanguageDisplay({ currentLanguage }) {
        return (
          <div>
            <h2>{data[currentLanguage].lang}</h2>
            <p>{data[currentLanguage].english}</p>
            <p>{data[currentLanguage].chinese}</p>
            <p>{data[currentLanguage].japanese}</p>
          </div>
        );
    }
  
    // Function to change the current language
    const handleLanguageChange = (currentLanguage) => {
      setCurrentLanguage(currentLanguage);
    };
  
    return (
      <div>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('zh')}>中文</button>
        <button onClick={() => handleLanguageChange('ja')}>日本語</button>
  
        <LanguageDisplay currentLanguage={currentLanguage} />
      </div>
    );
}
  
  export default App;