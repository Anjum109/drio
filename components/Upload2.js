import React, { useRef } from 'react';
import Image from 'next/image';
import info from '../assets/logo/info.svg';
import upload from '../assets/logo/upload-cloud.svg';

export default function Upload2() {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Handle the selected file, you can upload it or do further processing here
        console.log('Selected file:', file);
    };

    return (
        <div className=''>
            <div className="flex justify-between w-[360px]">
                <p className="text-[#DA3545] text-[14px] font-[500]">Profile Pic</p>
                <Image src={info} alt="info" className="w-[16px] h-[16px]" />
            </div>
            <button className='' onClick={handleUploadClick}>
                <div className='w-[120px] h-[120px] bg-[#E5E5E5] border-[1px] border-[#5a5959] rounded-[8px]'>
                    <div className='flex justify-center items-center flex-col h-full'>
                        <Image src={upload} alt='' />
                        <p className='text-[12px] font-[400]'>
                            Click to upload
                        </p>
                    </div>
                </div>
            </button>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    );
}
