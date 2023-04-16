import React from 'react'
import AdsCard from './AdsCard'
import ads from '../../assets/ads.jpeg'
import Link from 'next/link'

const RecentAds = () => {
    return (
        <div className='px-3 my-5'>
            <div class="bg-white rounded-lg p-4 flex justify-between">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">New Ads</h1>
                <Link href="/ads-available" class="text-lg font-bold text-gray-900 dark:text-white flex items-center">View more ads <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Link>
            </div>
            <div className='flex gap-16'>
                <AdsCard image={ads} title="Quantity Surveying Course" amt="20" />
                <AdsCard image={ads} title="Quantity Surveying Course" amt="20" />
                <AdsCard image={ads} title="Quantity Surveying Course" amt="20" />
            </div>
        </div>
    )
}

export default RecentAds
