"use client";
import ActivityContextProvider from '@/context/ActivityContext';
import React from 'react';

const Providers = ({ children }) => {
    return (
        // <div className='bg-[#f8fafc]'>
            <ActivityContextProvider>
                {children}
            </ActivityContextProvider>

        // </div>
    );
};

export default Providers;