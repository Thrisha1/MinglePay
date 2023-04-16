import Image from 'next/image'
import React from 'react'

const AdsCard = ({ image, title, amt }) => {
    return (
        <div class="max-w-[17rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col justify-center items-center">
            <a href="/">
                <Image class="rounded-t-lg w-full" src={image} alt="" />
            </a>
            <div class="p-5 flex-col justify-center items-center w-full text-center">
                <a href="/">
                    <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <button class="self-end px-12 py-3 flex items-center text-sm font-medium leading-5 text-white transition-colors bg-black border  rounded-lg hover:border-black hover:bg-white hover:text-black duration-500 focus:outline-none focus:shadow-outline-blue">
                    EARN UPTO ₹ {amt}
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default AdsCard
