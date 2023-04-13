import React from 'react'
import Logo from '../assets/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import '../app/globals.css'
import { UsersIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className ="flex items-center shadow-lg justify-between px-3">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width="70" height="70" />
        <Link href="/" >
          <h1 className="text-blue-500 text-2xl font-sans">MINGLEPAY</h1>
        </Link>
      </div>
      <div className="">
        <UsersIcon class="h-6 w-6 " />
      </div>
      
    </div>
  )
}

export default Header