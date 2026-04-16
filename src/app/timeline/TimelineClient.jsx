"use client";
import { ActivityContext } from '@/context/ActivityContext';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
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

    const [filterType, setFilterType] = useState("all");
    // console.log(filterType);

    const filteredActivities =
        filterType === "all" ?
            timelineActivities :
            timelineActivities.filter(
                activity => activity.type === filterType
            );


    return (
        <div>
            {/* Filter */}
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1 flex gap-25 justify-between">
                    <div className='text-lg font-normal'>Filter timeline</div>
                    <RiArrowDropDownLine className='text-2xl' />
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-65 p-2 shadow-sm">
                    <li onClick={() => setFilterType("text")}>
                        <a>Text</a>
                    </li>
                    <li onClick={() => setFilterType("call")}>
                        <a>Call</a>
                    </li>
                    <li onClick={() => setFilterType("video")}>
                        <a>Video</a>
                    </li>
                    <li onClick={() => setFilterType("all")}>
                        <a>All</a>
                    </li>
                </ul>
            </div>


            {/* Timeline Activities */}
            <div className='mt-5 mb-20'>
                <div className='space-y-6'>
                    {
                        filteredActivities.map((activity, index) => (
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
            </div>
        </div>

    );
};

export default TimelineClient;