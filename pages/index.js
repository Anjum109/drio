import Banner from "@/components/home/Banner";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { inter } from "./font";
import Image from "next/image";
import info from '../assets/logo/info.svg'
import map from '../assets/logo/map-pin.svg'
import clock from '../assets/logo/clock.svg'
import Upload from "@/components/home/Upload";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const countries = ["India", "Bangladesh", "United Kingdom"];
const states = ["Delhi", "Up"];
const city = ["Delhi", "Up"];


export default function Home() {
  return (
    <main className={inter.className}>
      <Head>
        <title>ODRIYO</title>
        <link rel="icon" href="favicon.png" sizes="any" />
      </Head>
      <Layout>
        <div className="mx-5">
          <div>
            <h1 className="text-[34px] font-[600] text-[#90212C]">Business Information</h1>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              {/* 1 */}
              <div className="w-[360px]">
                <div className="flex justify-between">
                  <p className="text-[#DA3545] text-[14px] font-[500]">Business name *</p>
                  <Image src={info} alt="info" className="w-[16px] h-[16px]" />
                </div>
                <input type="text" className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px] border-[#8f8e8e] border-[1px] outline-none px-5" />
              </div>
              {/* 2 */}
              <div className="w-[360px]">
                <div className="flex justify-between">
                  <p className="text-[#DA3545] text-[14px] font-[500]">Country  *</p>
                  <Image src={info} alt="info" className="w-[16px] h-[16px]" />
                </div>
                <select className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px] border-[#8f8e8e] border-[1px] outline-none px-5">
                  {countries.map((country, index) => (
                    <option key={index} value={country} >{country}</option>
                  ))}
                </select>
              </div>
              {/* 3 */}
              <div className="w-[360px]">
                <div className="flex justify-between">
                  <p className="text-[#DA3545] text-[14px] font-[500]">State  *</p>
                  <Image src={info} alt="info" className="w-[16px] h-[16px]" />
                </div>
                <select className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px] border-[#8f8e8e] border-[1px] outline-none px-5">
                  {states.map((state, index) => (
                    <option key={index} value={state} >{state}</option>
                  ))}
                </select>
              </div>
              {/* 4 */}
              <div className="w-[360px]">
                <div className="flex justify-between">
                  <p className="text-[#DA3545] text-[14px] font-[500]">City  *</p>
                  <Image src={info} alt="info" className="w-[16px] h-[16px]" />
                </div>
                <select className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px] border-[#8f8e8e] border-[1px] outline-none px-5">
                  {city.map((citys, index) => (
                    <option key={index} value={citys} >{citys}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-[885px] mt-5">
              <div className="flex justify-between">
                <p className="text-[#DA3545] text-[14px] font-[500]">Address *</p>
                <Image src={info} alt="info" className="w-[16px] h-[16px]" />
              </div>
              <div className="border-[#8f8e8e] border-[1px] rounded-[8px] flex bg-[#E5E5E5]">
                <input type="text" className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px]   outline-none px-5" />
                <Image src={map} alt="" className="mx-3" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              {/* 1 */}
              <div className="w-[360px]">
                <div className="flex justify-between">
                  <p className="text-[#DA3545] text-[14px] font-[500]">Opening time *</p>
                  <Image src={info} alt="info" className="w-[16px] h-[16px]" />
                </div>
                <div className="border-[#8f8e8e] border-[1px] rounded-[8px] flex bg-[#E5E5E5]">
                  <input type="text" className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px]   outline-none px-5" />
                  <div className="flex justify-center items-center"> <span className="text-[16px] font-[400]">Am</span> <Image src={clock} alt="" className="mx-3" /></div>
                </div>
              </div>
              {/* 2 */}
              <div className="w-[360px]">
                <div className="flex justify-between">
                  <p className="text-[#DA3545] text-[14px] font-[500]">Closing time *</p>
                  <Image src={info} alt="info" className="w-[16px] h-[16px]" />
                </div>
                <div className="border-[#8f8e8e] border-[1px] rounded-[8px] flex bg-[#E5E5E5]">
                  <input type="text" className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px]   outline-none px-5" />
                  <div className="flex justify-center items-center"> <span className="text-[16px] font-[400]">Pm</span> <Image src={clock} alt="" className="mx-3" /></div>
                </div>
              </div>
              {/* 3 */}
              <div className="w-[360px]">
                <div className="flex justify-between">
                  <p className="text-[#DA3545] text-[14px] font-[500]">E-mail *</p>
                  <Image src={info} alt="info" className="w-[16px] h-[16px]" />
                </div>
                <div className="border-[#8f8e8e] border-[1px] rounded-[8px] flex bg-[#E5E5E5]">
                  <input type="text" className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px]   outline-none px-5" />
                  <button className="flex justify-center items-center bg-[#DC3545] w-[100px] rounded-[8px] text-[14px] m-1 px-1 text-white">Send OTP</button>
                </div>
              </div>
              {/* 4 */}
              <div className="w-[360px]">
                <div className="flex justify-between">
                  <p className="text-[#DA3545] text-[14px] font-[500]">Mobile Number *</p>
                  <Image src={info} alt="info" className="w-[16px] h-[16px]" />
                </div>
                <div className="border-[#8f8e8e] border-[1px] rounded-[8px] flex bg-[#E5E5E5]">
                  <input type="text" className="h-[50px] bg-[#E5E5E5] w-full rounded-[8px]   outline-none px-5" />
                  <button className="flex justify-center items-center bg-[#DC3545] w-[100px] rounded-[8px] text-[14px] m-1 px-1 text-white">Send OTP</button>
                </div>
              </div>
            </div>
            {/* upload  */}
            <Upload />
            <div className="mt-5 flex justify-end">
              <Link href='/ownerandmanagingdetailspage'>
                <button className="w-[464px] h-[50px] bg-[#DC3545] rounded-[8px] text-white flex items-center justify-center gap-2">
                  <span>  Proceed to Owner & Manager Details </span><FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
