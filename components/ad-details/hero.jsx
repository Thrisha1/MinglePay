import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MoreAds from '../../assets/images/moreAds.svg'
import Eidad from '../../assets/images/eid ads.svg'
import Ad_card from '../Ad_card'

const Hero = () => {

    return (
        <div>
            <section className="min-h-[500px] flex">
                <div className="flex-col gap-4 justify-center bg-[#101010] mx-2 from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
                    <div className="md:w-1/2 flex-col">
                        <h1 className="text-white text-2xl font-medium">MinglePay Eid Offer</h1>
                        <h2 className="text-white text-lg mt-1">
                            Earn upto ₹ <span className="font-bold text-3xl">44</span>
                        </h2>
                    </div>

                    <Ad_card imageSrc={Eidad} desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam" Amt="44" link="https://www.google.co.in/" />

                    <div className="md:w-1/2 px-8 md:px-16 flex flex-col justify-center">
                        <Link href="/dashboard" className="group py-2 px-3 lg:w-3/4 md:w-full rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-105 duration-700 text-[#002D74]">
                            <Image src={MoreAds} alt="New Ad" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
