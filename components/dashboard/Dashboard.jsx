import React from 'react'
import Image from 'next/image'
import Banner from '../../assets/banner3.gif'
import BalanceCard from './BalanceCard'
import RecentAds from './RecentAds'

const Dashboard = () => {
    return (
        <section class="bg-white">
            <div class="pt-4 px-4 max-w-2xl lg:py-5">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">👋 Hey Ameen! Welcome back.</h2>
            </div>
            <div class="px-4 w-full">
                <Image src={Banner} className="h-[12rem] rounded-xl"  alt="Ameen" />
            </div>
            <BalanceCard/>
            <RecentAds/>
        </section>
    )
}

export default Dashboard
