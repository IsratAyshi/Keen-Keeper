import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="text-6xl text-[#244d3f] font-bold ">
                404
            </h1>
            <p className="text-4xl">
                Page Not Found!
            </p>
            <Link href={"/"}>
                <button className="btn bg-[#244d3f] hover:bg-[#244d3f]/80 text-white text-lg mt-2">Go Home</button>
            </Link>

            {/* Decorative element */}
            <div className="mt-4 text-gray-600 text-sm">
                Error Code: 404 | Resource Missing
            </div>
        </div>
    );
};

export default NotFoundPage;