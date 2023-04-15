import React from 'react'
import AdsCard from './AdsCard'
import ads from '../../assets/ads.jpeg'

const RecentAds = () => {
    return (
        <div className='px-3 my-5'>
            <div class="bg-white rounded-lg p-4">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">New Ads</h1>
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
