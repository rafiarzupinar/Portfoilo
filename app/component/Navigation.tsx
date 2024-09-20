'use client'
import { NavLinks } from '@/app/constants'
import { clear } from 'console'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Transition from './Transition'

const Navigation = () => {
      const [isRouting, setIsRouting] = useState(false)
      const path = usePathname()
      const [isActive, setIsActive] = useState(path)
      const [prevPath, setPrevPath] = useState("/")

      useEffect(() => {
            if (prevPath !== path) {
                  setIsRouting(true)
            }
      }, [path, prevPath])

      useEffect(() => {
            if (isRouting) {
                  setPrevPath(path);
                  const timeout = setTimeout(() => {
                        setIsRouting(false)
                  }, 1200);
                  return () => clearTimeout(timeout)
            }
      }, [isRouting])
      return (
            <div style={{ left: "20%" }}
                  className=
                  'absolute z-[50] -bottom-20 p-5 w-[50%] md:w-[20%] max-h-[150px] flex justify-between items-center bg-black rounded-full  border border-white'>
                       { isRouting && <Transition/>}
                  {NavLinks.map((nav) => (
                        <Link
                              key={nav.name}
                              href={nav.link}
                              className='mb-16 pl-4 min-w-[20%]'>
                              <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"}`}></nav.icon>
                        </Link>
                  ))
                  }
            </div>
      )
}

export default Navigation