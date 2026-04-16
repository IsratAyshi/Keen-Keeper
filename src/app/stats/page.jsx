"use client"
import { ActivityContext } from '@/context/ActivityContext';
import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';



// export const metadata = {
//     title: "Keen Keeper | Stats",
// };

const StatsPage = () => {

    const { timelineActivities } = useContext(ActivityContext);

    const calls = timelineActivities.filter(activity => activity.type === 'call');
    const callCount = calls.length;

    const texts = timelineActivities.filter(activity => activity.type === 'text');
    const textCount = texts.length;

    const videos = timelineActivities.filter(activity => activity.type === 'video');
    const videoCount = videos.length;

    const data = [
        { name: 'Call', value: callCount, fill: '#244d3f' },
        { name: 'Text', value: textCount, fill: '#8858e8' },
        { name: 'Video', value: videoCount, fill: '#22995f' },
    ];

    return (
        <div className='bg-[#f8fafc]'>
            <div className='container mx-auto my-20'>
                <h2 className='text-5xl font-bold mb-6'>Friendship Analytics</h2>


                <div className='bg-base-100 shadow p-8 rounded-lg'>
                    <h2 className='text-xl font-medium mb-4'>By Interaction Type</h2>

                    <div className='flex justify-center'>

                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="15%"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}

                            />
                            <Legend iconType='circle' wrapperStyle={{ paddingTop: 20 }} />
                            <Tooltip />
                            {/* <RechartsDevtools /> */}
                        </PieChart>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default StatsPage;