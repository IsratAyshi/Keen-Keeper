
import TimelineClient from './TimelineClient';

export const metadata = {
    title: "Keen Keeper | Timeline",
};

const TimelinePage = () => {

    return (
        <div className='bg-[#f8fafc]'>
            <div className='container mx-auto pt-20 space-y-6'>
                <h2 className='text-5xl font-bold'>Timeline</h2>

                <TimelineClient />

            </div>
        </div>
    );
};

export default TimelinePage;