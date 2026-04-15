import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-[#285943] text-white pt-20 pb-7">
            <div className="container mx-auto text-center">

                <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

                <p className="text-gray-300 mb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <h3 className="text-xl font-semibold mb-4">Social Links</h3>

                <div className="flex justify-center gap-4 mb-10">
                    <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                        <RiInstagramFill className='text-2xl' />
                    </div>
                    <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                        <FaFacebookF className='text-2xl' />
                    </div>
                    <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                        <FaXTwitter className='text-2xl' />
                    </div>
                </div>


                <div className="border-t border-[#fafafa]/20 mb-4"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#fafafa]/60">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6 mt-2 md:mt-0">
                        <a href="" className="hover:text-white">Privacy Policy</a>
                        <a href="" className="hover:text-white">Terms of Service</a>
                        <a href="" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;