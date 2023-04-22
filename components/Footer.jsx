import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.jpg'
import Link from 'next/link'
import {ChatIcon} from "@heroicons/react/outline";
import Insta from "../assets/insta.png";
import Fb from "../assets/Facebook.png";
import Youtube from "../assets/Youtube.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#101010] h-72 rounded-t-3xl flex flex-col items-center justify-between py-3">
      <div className="">
        <h1 className="text-white text-center text-2xl tracking-wider">Got any Doubts?</h1>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#E5F358] p-2 rounded-xl flex"><ChatIcon className="h-6 w-6 mx-2"/>Drop Us a Message</button>
      </div>
    <div className="text-white text-center">Terms
      <div className="text-white text-center">Privacy Policy</div>
    </div>
    <div className="flex w-full justify-between px-10">
      <Image src={Insta} alt="insta" width={20} height={20}/>
      <Image src={Fb} alt="fb" width={20} height={20}/>
      <Image src={Youtube} alt="youtube" width={20} height={20}/>
      <Image src={Twitter} alt="twitter" width={20} height={20}/>
    </div>
    <div className="">
      <h1 className="text-gray-500 text-xs py-1">© Copyright 2023 MinglePay - All Rights Reserved</h1>
    </div>
          
        
    </div>
  )
}

export default Footer