import React from 'react'

const BalanceCard = () => {
    return (
        <div className="px-3 my-5">
            <div class="bg-white rounded-lg p-4">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Your Wallet</h1>
            </div>
            <div className='flex-col gap-8'>
                <div class="mx-4 flex justify-between items-center min-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  mb-4">
                    <div>
                        <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white"><span className="text-2xl">Total Amount : </span><span className='text-lg'>₹ </span>0.9</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Redeemable at ₹ 15</p>
                    </div>
                    <div>
                        <button class="px-16 py-3 text-sm font-medium leading-5 text-white transition-colors bg-black border  rounded-lg hover:border-black hover:bg-white hover:text-black hover:scale-110 duration-500 focus:outline-none focus:shadow-outline-blue">
                            Radeem Now
                        </button>
                    </div>
                </div>
                <div className="flex justify-between mx-4">
                    <div className="flex gap-5">
                        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Number of Ads shared : 2</h5>
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Ads Revenue : <span className='text-lg'>₹ </span>0.9</h5>
                            <button class="px-5 w-max py-3 flex items-center text-sm font-medium leading-5 text-white transition-colors bg-black border  rounded-lg hover:border-black hover:bg-white hover:text-black duration-500 focus:outline-none focus:shadow-outline-blue">
                                View Ad Perfomance
                            </button>
                        </div>
                        <div class="flex-col items-center justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Number of Referals : 0</h5>
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Referal Revenue : <span className='text-lg'>₹ </span>0</h5>
                            <button class="px-5 w-max py-3 flex items-center text-sm font-medium leading-5 text-white transition-colors bg-black border  rounded-lg hover:border-black hover:bg-white hover:text-black duration-500 focus:outline-none focus:shadow-outline-blue">
                                Invite Others
                            </button>
                        </div>
                        <div class="flex-col items-center justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Radeemed : <span className='text-lg'>₹ </span>0</h5>
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Pending : <span className='text-lg'>₹ </span>0.9</h5>
                        </div>
                    </div>
                    <button class="self-center px-12 py-3 flex items-center text-sm font-medium leading-5 text-white transition-colors bg-black border  rounded-lg hover:border-black hover:bg-white hover:text-black duration-500 focus:outline-none focus:shadow-outline-blue">
                        View detailed report
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard
