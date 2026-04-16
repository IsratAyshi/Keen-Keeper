"use client"
import React, { createContext, useState } from 'react';

export const ActivityContext = createContext();


const ActivityContextProvider = ({ children }) => {

    const [timelineActivities, setTimelineActivities] = useState([]);

    const data = {
        timelineActivities,
        setTimelineActivities,
    };

    return (

        <ActivityContext.Provider value={data}>
            {children}
        </ActivityContext.Provider>

    );
};

export default ActivityContextProvider;