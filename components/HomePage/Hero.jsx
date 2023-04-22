import React from 'react'
import Image from 'next/image'
import PageLoader from '../../assets/payment_img.png'
import heroimg from '../../assets/images/heroimg.png'
import Link from 'next/link'

const Hero = () => {

  return (
    <div>
      <section className="min-h-[600px] flex justify-center">
        <div className="flex-col pt-10 gap-10 justify-center bg-[#101010] mx-2 from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
          <div className="md:w-1/2 flex justify-center">
            <Image loading="lazy" className="w-3/4 mx-auto md:mx-0" src={heroimg} alt="hero"/>
          </div>
          <div className="md:w-1/2 px-8 md:px-16 flex flex-col justify-center">
            <h1 className="text-3xl text-white font-semibold mb-4 text-center md:text-left">
              Share , Earn , Repeat
            </h1>
            <h2 className="text-white text-[1.2rem] mb-4 text-center md:text-left">
              Share Ads on Whatsapp and boost your Income!
            </h2>
            <p className="text-white text-sm mb-4 text-center md:text-left">
              Say goodbye to complicated monetization methods. MinglePay
              simplifies the process of earning money online. All you have to do
              is share ads on Whatsapp and earn money for every click you get.
              Get started now!
            </p>
            <Link href="/dashboard" className="bg-white hover:bg-[#B2DCF0] border group py-2 px-3 lg:w-3/4 md:w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-700 text-[#002D74]">
                 <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              <span className="group-hover:text-white font-bold duration-700">
                Sign in with Google
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
