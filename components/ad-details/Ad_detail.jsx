"use client"

import React from 'react'
import Hero from './hero'
import More_Ads from './More_ads'

// ads image
import Ad1 from '../../assets/images/eid ads.svg'
import Ad2 from '../../assets/images/ad2.svg'
import Ad3 from '../../assets/images/ad3.svg';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation';

const Ad_detail = () => {

    const searchParams = useSearchParams();

    useEffect(() => {
        console.log(searchParams.id);
    })

    const ads = [
        {
            id: 1,
            image: Ad1,
            title: 'Eid',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        },
        {
            id: 2,
            image: Ad2,
            title: 'Sale',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        },
        {
            id: 3,
            image: Ad3,
            title: 'Dress',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        }
    ]

    return (
        <section class="bg-gray-200 flex-col w-full">
            <Hero/>
            <More_Ads />
        </section>
    )
}

export default Ad_detail
