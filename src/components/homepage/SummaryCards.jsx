import { getActivitiesFromLocalDB } from '@/utils/localDB';
import React, { use } from 'react';
import ActivityCount from '../ActivityCount';
// import friends from '../../data/friends.json';


const friendsPromise = async () => {
    const res = await fetch('http://localhost:3000/friends.json');
    // const res = await fetch('/friends.json');
    const data = await res.json();
    return data;
}



const SummaryCards = async () => {
    const friends = await friendsPromise();
    // console.log(friends);

    const onTrack = friends.filter(friend => friend.status === 'On-track');
    const needAttention = friends.filter(friend => friend.status === 'Almost due' || friend.status === 'Overdue');

    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7 mb-10 text-center'>
            <div className='card bg-base-100 shadow p-8 flex flex-col items-center gap-2'>
                <h2 className='text-[32px] font-semibold'>{friends.length}</h2>
                <p className='text-[#64748b] text-lg'>Total Friends</p>
            </div>
            <div className='card bg-base-100 shadow p-8 flex flex-col items-center gap-2'>
                <h2 className='text-[32px] font-semibold'>{onTrack.length}</h2>
                <p className='text-[#64748b] text-lg'>On Track</p>
            </div>
            <div className='card bg-base-100 shadow p-8 flex flex-col items-center gap-2'>
                <h2 className='text-[32px] font-semibold'>{needAttention.length}</h2>
                <p className='text-[#64748b] text-lg'>Need Attention</p>
            </div>
            <div className='card bg-base-100 shadow p-8 flex flex-col items-center gap-2'>
                <h2 className='text-[32px] font-semibold'>
                    <ActivityCount />
                </h2>
                <p className='text-[#64748b] text-lg'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default SummaryCards;