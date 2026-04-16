import AppDetailsButtons from '@/components/appDetailsButtons/AppDetailsButtons';
import Image from 'next/image';
import React from 'react';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCamera } from 'react-icons/pi';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
// import friends from '@/data/friends.json';


const friendsPromise = async () => {
    const res = await fetch('http://localhost:3000/friends.json');
    // const res = await fetch('/friends.json');
    const data = await res.json();
    return data;
}

export const generateMetadata = async ({ params }) => {
    const friends = await friendsPromise();
    const { friendId } = await params;

    const friend = friends.find(frnd => frnd.id == friendId);

    return {
        title: `${friend.name} Details | Keen Keeper`,
    }
}


const FriendDetailsPage = async ({ params }) => {

    const friends = await friendsPromise();


    const { friendId } = await params;
    // console.log(friendId);

    const friend = friends.find(frnd => frnd.id == friendId);
    // console.log(friend);



    return (
        <div className="bg-[#f8fafc]">
            <div className="container mx-auto px-15 lg:px-4 max-w-7xl my-20 grid grid-cols-1 md:grid-cols-[350px_1fr] gap-6">

                {/* Left */}
                <div className="flex flex-col gap-4">

                    <div className="bg-base-100 rounded-lg shadow p-6 flex flex-col items-center text-center">
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={200}
                            height={200}
                            className="w-20 h-20 rounded-full object-cover mb-4"
                        />

                        <h2 className="text-lg font-semibold text-[#1f2937] mb-2">
                            {friend.name}
                        </h2>

                        <div className="mb-3 space-y-2">
                            <div
                                className={`badge text-xs font-semibold text-white px-3 py-1 rounded-full ${friend.status === 'On-track' ? 'bg-[#244d3f]' : friend.status === 'Almost due' ? 'bg-[#efad44]' : 'bg-[#ef4444]'
                                    }`}
                            >
                                {friend.status}
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {
                                    friend.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium text-[#244d3f]  px-3 py-1 rounded-full bg-[#cbfadb] ">
                                            {tag.toUpperCase()}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        <p className="italic font-medium text-[#64748b] mb-1">"{friend.bio}"</p>

                        <p className="text-sm text-gray-400">Preferred: email ({friend.email})</p>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 p-4 font-medium text-[#1f2937]  bg-base-100 hover:bg-base-300 rounded-lg shadow">
                        <RiNotificationSnoozeLine />
                        Snooze 2 Weeks
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 p-4 font-medium text-[#1f2937]  bg-base-100 hover:bg-base-300 rounded-lg shadow">
                        <FiArchive />
                        Archive
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 p-4 font-medium text-red-500 hover:bg-red-50 bg-base-100 rounded-lg shadow">
                        <RiDeleteBin6Line />
                        Delete
                    </button>

                </div>

                {/* Right */}
                <div className="flex flex-col gap-7">

                    {/* Row-1 */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow px-4 py-8 flex flex-col items-center text-center">
                            <h3 className="text-3xl font-semibold text-[#244d3fFF]">
                                {friend.days_since_contact}
                            </h3>
                            <p className="text-lgg text-gray-500 mt-1">Days Since Contact</p>
                        </div>

                        <div className="bg-white rounded-lg shadow px-4 py-8 flex flex-col items-center text-center">
                            <h3 className="text-3xl font-semibold text-[#244d3fFF]">
                                {friend.goal}
                            </h3>
                            <p className="text-lg text-gray-500 mt-1">Goal (Days)</p>
                        </div>

                        <div className="bg-white rounded-lg shadow px-4 py-8 flex flex-col items-center text-center">
                            <h3 className="text-3xl font-bold text-[#244d3fFF]">
                                {new Date(friend.next_due_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </h3>
                            <p className="text-lg text-gray-500 mt-1">Next Due</p>
                        </div>
                    </div>

                    {/* Row-2 */}
                    <div className="bg-white rounded-xl shadow-sm p-7">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-medium text-[#1f2937]">
                                Relationship Goal
                            </h3>
                            <button className="btn text-sm text-[#1f2937] ">
                                Edit
                            </button>
                        </div>
                        <p className="text-lg text-[#64748b]">
                            Connect every <span className="text-[#1f2937] font-bold">{friend.goal} days</span>
                        </p>
                    </div>

                    {/* Row-3 */}
                    <div className="bg-white rounded-xl shadow-sm p-7">
                        <h3 className="text-xl font-medium text-[#1f2937] mb-4">
                            Quick Check-In
                        </h3>

                        <AppDetailsButtons friendName={friend.name} />

                    </div>


                </div>


            </div>
        </div>
    );
};

export default FriendDetailsPage;