import React, { useState, useEffect } from 'react';

export default function LoadingExample() {

    return (
        <div>
            {/* Step 3: Conditional rendering */}
            {
                <div className="loading">
                    <img src="./gear.gif" alt="Loading..." />
                </div>
            }
        </div>
    );
};