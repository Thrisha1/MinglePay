import React from 'react'
import AdsCard from './AdsCard'
import ads from '../../assets/ads.jpeg'
import Link from 'next/link'

const RecentAds = () => {
    return (
        <div className='px-3 my-5 bg-black py-8 flex-col justify-center items-center'>
            <div class="rounded-lg mb-4 flex justify-center">
                <h1 class="text-2xl font-bold text-white text-center">NEW ADS</h1>
            </div>
            <div className='flex gap-10 overflow-x-scroll'>
                <AdsCard image={ads} title="Quantity Surveying Course" amt="20" />
                <AdsCard image={ads} title="Quantity Surveying Course" amt="20" />
                <AdsCard image={ads} title="Quantity Surveying Course" amt="20" />
            </div>
            <Link href="/ads-available" class="block w-full mt-6 text-center text-lg font-bold text-yellow-200">View All Ads</Link>
            <h1 className="text-gray-400 text-md mt-4 text-center flex justify-center">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </h1>
        </div>
    )
}

export default RecentAds
