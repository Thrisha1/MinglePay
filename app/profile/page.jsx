'use client';
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Banner from '../../components/profile/Banner_profile.jsx'
import bg from '../../assets/bg black.png'
import UserCard from '../../components/profile/UserCard.jsx'
import Details from '../../components/profile/Details.jsx'

const page = () => {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="p-5 w-100 bg-[#101010]" style={{backgroundImage:`url(${bg})`,
    backgroundRepeat: 'no-repeat',
                                      }} >
      <div className="flex flex-col h-[38rem] justify-between">
        <div className="">
          <p className="text-xl tracking-wider text-white">User Profile</p>
          <p className="text-white text-xs font-light" >Help us to get to know you better!</p>
        </div>
        <UserCard/>
        <Details/>
        
      </div>
      <Banner/>
      <hr />
      <div className="my-2 flex flex-col h-72 justify-between">
          <h1 className="text-green-500">MORE LINKS</h1>
          <div className="">
          <Link href="/profile" className="text-white text-md">How does it work?</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-white text-md">Chat with us</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-white text-md">Join Unizone Community on Telegram</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-white text-md">Frequently Asked Questions</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-white text-md">Terms of Service</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-white text-md">Privacy Policy</Link>
          </div>
      </div>
      <hr />
      <h1 className="text-red-500 my-5 text-lg">Logout</h1>
    </div>
  )
}

export default page