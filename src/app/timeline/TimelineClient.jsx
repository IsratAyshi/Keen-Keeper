"use client";
import { ActivityContext } from '@/context/ActivityContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const getIcon = (type) => {
    if (type === "call") {
        return callImg;
    }
    else if (type === "text") {
        return textImg;
    }
    else {
        return videoImg;
    }
};

const TimelineClient = () => {
    const { timelineActivities } = useContext(ActivityContext);

    return (
        <div className='space-y-6'>
            {
                timelineActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 bg-base-100 rounded-lg shadow p-6">
                        <Image
                            src={getIcon(activity.type)}
                            alt={activity.type}
                            width={50}
                            height={50}
                            className=""
                        />

                        <div>
                            <p>
                                <span className="font-medium text-xl text-[#244d3f]">{activity.type}</span>
                                <span className='text-lg text-[#64748b]'> with {activity.friendName}</span></p>

                            <p className='font-medium text-[#64748b]'>
                                {activity.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default TimelineClient;