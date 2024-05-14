import { inter } from '@/pages/font'
import React from 'react'
import LeftContent from './LeftContent'
import Banner from '../home/Banner'

export default function Layout({ children }) {
    return (
        <div>
            <Banner />
            <div className='m-12'>
                <div className='flex w-[100%] h-[976px]'>
                    {/* left side */}
                    <div className='w-[25%] bg-[#FFD098] border-[1px] rounded-[20px] p-5'>
                        <h1 className='text-[36px] text-start font-[600]'><span className={inter.className}>Partner with us</span></h1>
                        <p className='text-[16px] font-[400] text-[#121212] text-opacity-65'>
                            <span className={inter.className}>Be our partner in just few steps and start Increasing your reach by gaining new customers.</span> </p>
                        <LeftContent />
                    </div>
                    {/* left side */}
                    {/* right side  */}
                    <div className='w-[75%]'>
                        {children}
                    </div>
                    {/* right side  */}
                </div>
            </div>
        </div>
    )
}
