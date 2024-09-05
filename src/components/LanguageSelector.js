"use client";
import React, { useState } from 'react';

export default function LanguageSelector({FnChangeEng, FnChangeChi, FnChangeJap}) {
  return (
    <div>
      <button onClick={ FnChangeEng }>English</button>
      <button onClick={ FnChangeChi }>中文</button>
      <button onClick={ FnChangeJap }>日本語</button>
    </div>
  );
}
