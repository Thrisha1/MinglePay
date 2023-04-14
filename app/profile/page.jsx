'use client';
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Banner from '../../components/Banner_profile.jsx'


const page = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="p-5 w-100">
      <div className="flex flex-col h-[30rem] justify-between">
        <div className="">
          <p className="text-xl">THRISHA K</p>
          <p className="text-md text-gray-600">thrishakannan25@gmail.com</p>
        </div>
        <div className="">
          <p className="flex tracking-wider text-sm my-1  text-gray-500"> <p className="text-red-600 pr-2">*</p>DATE OF BIRTH </p>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="pt-1"/>
        </div>
        <div className="">
          <p className="flex tracking-wider text-sm my-1  text-gray-500"> <p className="text-red-600 pr-2">*</p>HOW MANY CONTACTS DO YOU HAVE ?</p>
          <p>1200</p>
        </div>
        <div className="">
          <p className="flex tracking-wider text-sm my-1  text-gray-500">MOBILE NUMBER</p>
          <p>9995467901</p>
        </div>
        <div className="">
          <p className="flex tracking-wider text-sm my-1  text-gray-500">PINCODE</p>
          <p>678102</p>
        </div>
        <div className="">
          <p className="flex tracking-wider text-sm my-1  text-gray-500">GENDER</p>
          <div className="flex">
            <button className="p-2 mt-2 mr-2 border-2 hover:text-white px-4 hover:bg-blue-500 rounded-xl">Male</button>
            <button className="p-2 mt-2 px-4 border-2 hover:text-white hover:bg-blue-500 rounded-xl">Female</button>
            <button className="p-2 mt-2 mx-2 border-2 hover:text-white px-4 hover:bg-blue-500 rounded-xl">Other</button>
          </div>
        </div>
      </div>
      <Banner/>
      <hr />
      <div className="my-2 flex flex-col h-72 justify-between">
          <h1 className="text-gray-500">LINKS</h1>
          <div className="">
          <Link href="/profile" className="text-blue-500 text-md">How does it work?</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-blue-500 text-md">Chat with us</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-blue-500 text-md">Join Unizone Community on Telegram</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-blue-500 text-md">Frequently Asked Questions</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-blue-500 text-md">Terms of Service</Link>
          </div>
          <div className="">
          <Link href="/profile" className="text-blue-500 text-md">Privacy Policy</Link>
          </div>
      </div>
      <hr />
      <h1 className="text-red-500 my-5 text-lg">Logout</h1>
    </div>
  )
}

export default page