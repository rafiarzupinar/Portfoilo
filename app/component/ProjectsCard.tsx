'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion' // Gereksiz import'lar kaldırıldı

interface Props {
  image: string,
  title: string,
  text: string
}

const ProjectsCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) { // Animasyon sırasında tekrar tetiklenmesini önlüyoruz
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div onClick={handleFlip}
      className='w-[450px] h-[250px] rounded-md cursor-pointer'>
      <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        // rotateY: 0 kullanılarak kart başlangıç pozisyonuna döndürülüyor
        animate={{ rotateY: isFlipped ? 180 : 360 }} 
        transition={{ duration: 0.6 }}
        // Animasyon tamamlandıktan sonra isAnimating'i false yapıyoruz
        onAnimationComplete={() => setIsAnimating(false)} 
      >
        {/* Ön yüzü */}
        
          <div style={{ backgroundImage: `url(${image})` }} className="w-full h-full group relative flip-card-front bg-cover bg-center rounded-lg text-white p-5">
            <div className="absolute inset-0 w-full h-full rounded-md bg-black  group-hover:opacity-40">
              <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
                Learn more &gt;
              </div>
            </div>
          </div>
       
         
          <div style={{ backgroundImage: `url(${image})` }} 
          className="flip-card-back w-full h-full group relative  bg-cover bg-center rounded-lg opacity-500 text-white p-4"> 
            <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-500 z-[-1]"> 
              <div className="flex flex-col gap-20 py-3 z-[30]">
                <h1 className='text-white text-2xl font-semibold'>{title}</h1>
                <p className="text-gray-200 text-[20px]">{text}</p>
              </div>
            </div>
          </div>
        
      </motion.div>
    </div>
  )
}

export default ProjectsCard
