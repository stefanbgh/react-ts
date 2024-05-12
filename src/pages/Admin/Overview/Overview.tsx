

import { BsBag } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";
import { LiaUsersSolid } from "react-icons/lia";

import "./Overview.scss";
import { MixedChart, PolarAreaChart } from '../../../components';

const Overview = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='w-full flex justify-between gap-4'>
                <div className='w-3/12 h-[150px] border border-gray-400 p-4 flex hover:-translate-y-1 hover:shadow-md transition-all overview__card'>
                    <div className='w-9/12 h-full pl-4 flex flex-col justify-between relative after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-green-400 after:rounded-xl'>
                        <h3 className='uppercase'>Total Earnings</h3>
                        <p className='font-bold'>$98,851.35</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <div className='bg-green-100 py-0.5 px-1.5 text-green-500 font-bold'>+18.30 %</div>
                            <p>than last week</p>
                        </div>
                    </div>
                    <div className='w-3/12 h-full'>
                        <div className='h-1/2 w-full bg-green-200 flex justify-center items-center'>
                            <TfiWallet size={24} className='text-green-500'/>
                        </div>
                    </div>
                </div>
                <div className='w-3/12 h-[150px] border border-gray-400 p-4 flex hover:-translate-y-1 hover:shadow-md transition-all overview__card'>
                    <div className='w-9/12 h-full pl-4 flex flex-col justify-between relative after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-blue-400 after:rounded-xl'>
                        <h3 className='uppercase'>Orders</h3>
                        <p className='font-bold'>65,802</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <div className='bg-red-100 py-0.5 px-1.5 text-red-500 font-bold'>-2.74 %</div>
                            <p>than last week</p>
                        </div>
                    </div>
                    <div className='w-3/12 h-full'>
                        <div className='h-1/2 w-full bg-blue-200 flex justify-center items-center'>
                            <BsBag size={24} className='text-blue-500'/>
                        </div>
                    </div>
                </div>
                <div className='w-3/12 h-[150px] border border-gray-400 p-4 flex hover:-translate-y-1 hover:shadow-md transition-all overview__card'>
                    <div className='w-9/12 h-full pl-4 flex flex-col justify-between relative after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-yellow-400 after:rounded-xl'>
                        <h3 className='uppercase'>Customers</h3>
                        <p className='font-bold'>79,958</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <div className='bg-green-100 py-0.5 px-1.5 text-green-500 font-bold'>+29.08 %</div>
                            <p>than last week</p>
                        </div>
                    </div>
                    <div className='w-3/12 h-full'>
                        <div className='h-1/2 w-full bg-yellow-200 flex justify-center items-center'>
                            <LiaUsersSolid size={24} className='text-yellow-500'/>
                        </div>
                    </div>
                </div>
                <div className='w-3/12 h-[150px] border border-gray-400 p-4 flex hover:-translate-y-1 hover:shadow-md transition-all overview__card'>
                    <div className='w-9/12 h-full pl-4 flex flex-col justify-between relative after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-red-400 after:rounded-xl'>
                        <h3 className='uppercase'>Products</h3>
                        <p className='font-bold'>36,758</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <div className='bg-green-100 py-0.5 px-1.5 text-green-500 font-bold'>+1.67 %</div>
                            <p>than last week</p>
                        </div>
                    </div>
                    <div className='w-3/12 h-full'>
                        <div className='h-1/2 w-full bg-red-200 flex justify-center items-center'>
                            <LiaUsersSolid size={24} className='text-red-500'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-between gap-4'>
                <div className='w-8/12 border border-gray-400 flex items-center'>
                    <MixedChart/>
                </div>
                <div className='w-4/12 border border-gray-400 flex items-center'>
                    <PolarAreaChart/>
                </div>
            </div>
        </div>
    )
}

export default Overview