"use client"
import { getActivitiesFromLocalDB } from '@/utils/localDB';
import React, { createContext, use, useEffect, useState } from 'react';

export const ActivityContext = createContext();


const ActivityContextProvider = ({ children }) => {

    const [timelineActivities, setTimelineActivities] = useState(() => getActivitiesFromLocalDB());


    // useEffect(() => {
    //     const getAllActivitiesFromLocalDB = getActivitiesFromLocalDB();
    //     console.log(getAllActivitiesFromLocalDB, "from local db");
    // }, []);

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