"use client";
import React, { useState } from 'react';

export default function LanguageSelector({FnChangeEng, FnChangeChi, FnChangeJap, currentLang}) {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 flex space-x-2">
        <button className={`px-3 py-1 rounded-md ${
            currentLang === 'en'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'}`} onClick={ FnChangeEng }>English</button>
        <button className={`px-3 py-1 rounded-md ${
            currentLang === 'zh'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'}`} onClick={ FnChangeChi }>中文</button>
        <button className={`px-3 py-1 rounded-md ${
            currentLang === 'ja'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'}`} onClick={ FnChangeJap }>日本語</button>
      </div>
    </div>
  );
}
