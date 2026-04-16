"use client";
import { ActivityContext } from '@/context/ActivityContext';
import { addActivityToLocalDB } from '@/utils/localDB';
import { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCamera } from 'react-icons/pi';
import { toast } from 'react-toastify';


const AppDetailsButtons = ({ friendName }) => {

    const addActivityContext = useContext(ActivityContext);
    // console.log("CONTEXT", addActivityContext);

    const handleAddActivity = (type, friendName) => {
        const activity = {
            type: type,
            friendName: friendName,
            date: new Date(),
        }
        // console.log(activity);

        addActivityContext.setTimelineActivities(
            [...addActivityContext.timelineActivities, activity]
        );
        toast.success(`${activity.type} with ${activity.friendName}`);

        addActivityToLocalDB(activity);
        // console.log(addActivityContext.timelineActivities);
    };

    return (
        <div className="grid grid-cols-3 gap-3 ">
            <button
                onClick={() => handleAddActivity('call', friendName)}
                className="border border-gray-200 bg-[#f8fafc] rounded-lg flex flex-col items-center gap-2 py-4 font-normal hover:border-success hover:bg-green-50">
                <FiPhoneCall className="text-2xl text-[#1f2937]" />
                <span className="text-lg text-[#1f2937]">Call</span>
            </button>

            <button
                onClick={() => handleAddActivity('text', friendName)}
                className="border border-gray-200 bg-[#f8fafc] rounded-lg flex flex-col items-center gap-2 py-4 font-normal hover:border-info hover:bg-blue-50">
                <MdOutlineTextsms className="text-2xl text-[#1f2937]" />
                <span className="text-lg text-[#1f2937]">Text</span>
            </button>

            <button
                onClick={() => handleAddActivity('video', friendName)}
                className="border border-gray-200 bg-[#f8fafc] rounded-lg flex flex-col items-center gap-2 py-4 font-normal hover:border-primary hover:bg-purple-50">
                <PiVideoCamera className='text-2xl text-[#1f2937]' />
                <span className="text-lg text-[#1f2937]">Video</span>
            </button>

        </div>
    );
};

export default AppDetailsButtons;