import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const metadata = {
    title: "Keen Keeper | Timeline",
};

const TimelinePage = () => {
    return (
        <div className='bg-[#f8fafc]'>
            <div className='container mx-auto pt-20 space-y-6'>
                <h2 className='text-5xl font-bold'>Timeline</h2>

                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1 flex gap-25 justify-between">
                        <div className='text-lg font-normal'>Filter timeline</div>
                        <RiArrowDropDownLine className='text-2xl' />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-65 p-2 shadow-sm">
                        <li><a>Text</a></li>
                        <li><a>Call</a></li>
                        <li><a>Video</a></li>
                    </ul>
                </div>

                <div>
                    <h2>history</h2>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;