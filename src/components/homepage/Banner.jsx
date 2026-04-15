import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className=" py-20">
            <div className="max-w-5xl mx-auto px-4 text-center">

                <h1 className="text-[#1f2937] text-5xl md:text-5xl font-bold  mb-4">
                    Friends to keep close in your life
                </h1>

                <p className="text-[#64748b] mx-auto mb-8">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture
                    the<br /> relationships that matter most.
                </p>

                <button className="btn bg-[#285943] p-6 rounded-md font-semibold text-white">
                    <FaPlus />
                    Add a Friend
                </button>

            </div>
        </div>
    );
};

export default Banner;