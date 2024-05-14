import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function LeftContent() {
    // const router = useRouter();
    const [selectedItem, setSelectedItem] = useState(1); // Initially select the first item


    const handleItemClick = (item) => {
        setSelectedItem(item);
        // router.push(`/${item}`, { scroll: false });
    };

    return (
        <div className='mt-5'>
            <Link href='/' scroll={false}>
                <div className={`flex gap-3 items-center cursor-pointer ${selectedItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
                    <div className={`w-[48px] h-[48px] rounded-[39px] flex justify-center items-center text-[16px] font-bold ${selectedItem === 1 ? 'bg-[#DC3545] text-white' : 'bg-white text-opacity-65'}`}>1</div>
                    <p className='font-[500] text-[16px]'>Business Information</p>
                </div>
            </Link>
            <div className={`w-[1px] h-[30px] ${selectedItem === 1 ? 'bg-[#DC3545]' : 'bg-black'} ms-6`} />
            <Link href='/ownerandmanagingdetailspage' scroll={false} >
                <div className={`flex gap-3 items-center cursor-pointer ${selectedItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
                    <div className={`w-[48px] h-[48px] rounded-[39px] flex justify-center items-center text-[16px] font-bold ${selectedItem === 2 ? 'bg-[#DC3545] text-white' : 'bg-white text-opacity-65'}`}>2</div>
                    <p className='font-[400] text-[16px]'>Owner & Manager Details</p>
                </div>
            </Link>

            <div className={`w-[1px] h-[30px] ${selectedItem === 2 ? 'bg-[#DC3545]' : 'bg-black'} ms-6`} />
            <div className={`flex gap-3 items-center cursor-pointer${selectedItem === 3 ? '' : ''}`} onClick={() => handleItemClick(3)}>
                <div className={`w-[48px] h-[48px] rounded-[39px] flex justify-center items-center text-[16px] font-bold ${selectedItem === 3 ? 'bg-[#DC3545] text-white' : 'bg-white text-opacity-65'}`}>3</div>
                <p className='font-[400] text-[16px]'>PAN/Aadhaar Details</p>
            </div>
            <div className={`w-[1px] h-[30px] ${selectedItem === 3 ? 'bg-[#DC3545]' : 'bg-black'} ms-6`} />
            <div className={`flex gap-3 items-center cursor-pointer${selectedItem === 4 ? '' : ''}`} onClick={() => handleItemClick(4)}>
                <div className={`w-[48px] h-[48px] rounded-[39px] flex justify-center items-center text-[16px] font-bold ${selectedItem === 4 ? 'bg-[#DC3545] text-white' : 'bg-white text-opacity-65'}`}>4</div>
                <p className='font-[400] text-[16px]'>Legal Documents</p>
            </div>
            <div className={`w-[1px] h-[30px] ${selectedItem === 4 ? 'bg-[#DC3545]' : 'bg-black'} ms-6`} />
            <div className={`flex gap-3 items-center cursor-pointer${selectedItem === 5 ? '' : ''}`} onClick={() => handleItemClick(5)}>
                <div className={`w-[48px] h-[48px] rounded-[39px] flex justify-center items-center text-[16px] font-bold ${selectedItem === 5 ? 'bg-[#DC3545] text-white' : 'bg-white text-opacity-65'}`}>5</div>
                <p className='font-[400] text-[16px]'>Bank Details</p>
            </div>
            <div className={`w-[1px] h-[30px] ${selectedItem === 5 ? 'bg-[#DC3545]' : 'bg-black'} ms-6`} />
            <div className={`flex gap-3 items-center cursor-pointer${selectedItem === 6 ? '' : ''}`} onClick={() => handleItemClick(6)}>
                <div className={`w-[48px] h-[48px] rounded-[39px] flex justify-center items-center text-[16px] font-bold ${selectedItem === 6 ? 'bg-[#DC3545] text-white' : 'bg-white text-opacity-65'}`}>6</div>
                <p className='font-[400] text-[16px]'>Service Info</p>
            </div>
            <div className={`w-[1px] h-[30px] ${selectedItem === 6 ? 'bg-[#DC3545]' : 'bg-black'} ms-6`} />
            <div className={`flex gap-3 items-center cursor-pointer${selectedItem === 7 ? '' : ''}`} onClick={() => handleItemClick(7)}>
                <div className={`w-[48px] h-[48px] rounded-[39px] flex justify-center items-center text-[16px] font-bold ${selectedItem === 7 ? 'bg-[#DC3545] text-white' : 'bg-white text-opacity-65'}`}>7</div>
                <p className='font-[400] text-[16px]'>Preview Document</p>
            </div>
            <div className={`w-[1px] h-[30px] ${selectedItem === 7 ? 'bg-[#DC3545]' : 'bg-black'} ms-6`} />
            <div className={`flex gap-3 items-center cursor-pointer${selectedItem === 8 ? '' : ''}`} onClick={() => handleItemClick(8)}>
                <div className={`w-[48px] h-[48px] rounded-[39px] flex justify-center items-center text-[16px] font-bold ${selectedItem === 8 ? 'bg-[#DC3545] text-white' : 'bg-white text-opacity-65'}`}>8</div>
                <p className='font-[400] text-[16px]'>Reach Increased</p>
            </div>


        </div>
    )
}
