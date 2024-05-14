import React from 'react';
import Image from 'next/image';
// import banner from '../../assets/banner/banner.svg';
import logo from '../../assets/logo/logo.svg';
import { inter } from '@/pages/font';

export default function Banner() {
    return (
        <div className='background-image w-full'>
            <div className='flex justify-end items-start text-red-200'>
                <Image src={logo} alt='logo' className='w-[117px] h-[77px] m-5' />
            </div>
            <div className='grid grid-cols-2'>
                <div></div>
                <div className='flex justify-center'>
                    <div>
                        <h1 className='text-[48px] font-[700] text-[#CA2531]'> <span className={inter.className}>Partner With Us</span> </h1>
                        <p className='text-[16px] font-[600]'>Be our partner in just few steps and start Increasing your reach by gaining <br></br> new customers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
