import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import friends from '../../data/friends.json';

const friendsPromise = async () => {
    const res = await fetch('https://keen-keeper-a7-code.vercel.app/friends.json',
        {
            cache: 'no-store'
        }
    );
    // const res = await fetch('/friends.json');
    const data = await res.json();
    return data;
}


const Friends = async () => {

    const friends = await friendsPromise();
    // console.log(friends);

    return (

        <div className='container mx-auto border-t-2 border-gray-200 '>
            <h2 className='text-2xl font-semibold mt-10 mb-4'>Your Friends</h2>

            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 text-center'>
                {
                    friends.map(friend =>
                        <Link href={`/friend/${friend.id}`} key={friend.id} className='card bg-base-100 shadow p-8 flex flex-col items-center gap-2'>

                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                width={200}
                                height={200}
                                className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
                            />

                            <h2 className="text-xl font-semibold text-gray-800">
                                {friend.name}
                            </h2>

                            <p className="text-gray-500 text-xs mb-3">
                                {friend.days_since_contact}d ago
                            </p>

                            <div className="flex flex-col items-center gap-2">
                                <div className='flex flex-wrap gap-2 justify-center items-center'>
                                    {
                                        friend.tags.map((tag, index) => (
                                            <span key={index} className="bg-[#cbfadb] text-[#244d3fFF] px-3 py-1 rounded-full text-xs font-medium">
                                                {tag.toUpperCase()}
                                            </span>
                                        ))
                                    }
                                </div>

                                <span className={`text-white px-3 py-1 rounded-full text-xs font-medium ${friend.status === 'On-track' ? 'bg-[#244d3f]' : friend.status === 'Almost due' ? 'bg-[#efad44]' : 'bg-[#ef4444]'}`}>
                                    {friend.status}
                                </span>
                            </div>
                        </Link>
                    )
                }
            </div>

        </div>
    );
};

export default Friends;