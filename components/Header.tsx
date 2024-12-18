import React, { useEffect, useState } from "react";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import useAuth from "@/Hooks/useAuth";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const {logout} = useAuth()

    useEffect(() => {
        const handelScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handelScroll)

        return () => {
            window.removeEventListener("scroll", handelScroll)
        }
    }, [])
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Show</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex item-center space-x-4 md:flex">
        <SearchIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href={'/login'}> */}
          <img
          onClick={logout}
            src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
