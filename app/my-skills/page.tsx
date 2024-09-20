'use clint'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { SkillData } from '../constants'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'
import { url } from 'inspector'

const Pag = () => {
  return (
    <div style={{backgroundImage:"url(/bg-2.jpg)"}} className='h-screen w-screen items-center justify-center bg-cover bg-center'>
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="felex flex-col  items-center gap-4">
          <h1 className='font-semibold text-white text-[50px]'>Skills</h1>
          </div> </div>
    </div>
  )
}

export default Pag