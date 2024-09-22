'use client' // Bu komut Next.js'in yeni App Router yapısında, dosyanın client-side rendering (CSR) için kullanılacağını belirtiyor. 

import React, { useState } from 'react' // React'ten useState hook'unu alıyoruz, bileşende durumu yönetmek için kullanıyoruz.
import { motion } from 'framer-motion' // Framer Motion kütüphanesini, animasyonları yönetmek için kullanıyoruz.

// Bileşenin Props arayüzü belirleniyor. image, title ve text olarak üç özellik bekleniyor.
interface Props {
  image: string,
  title: string,
  text: string
}

// ProjectsCard bileşeni oluşturuluyor. image, title ve text, destructuring ile Props'tan alınıyor.
const ProjectsCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false) // Kartın çevrilmiş olup olmadığını takip eden state.
  const [isAnimating, setIsAnimating] = useState(false) // Animasyon sırasında bileşenin tekrar tetiklenmesini engelleyen state.

  // Kartın ters dönmesini yöneten fonksiyon. Animasyon sırasında tekrar tetiklenmemesi için isAnimating kontrol ediliyor.
  function handleFlip() {
    if (!isAnimating) { 
      setIsFlipped(!isFlipped) // Kartın ters dönüp dönmeyeceği isFlipped state'i ile kontrol ediliyor.
      setIsAnimating(true) // Animasyon başladığında isAnimating true yapılıyor.
    }
  }

  return (
    <div onClick={handleFlip} className='w-[450px] h-[250px] rounded-md cursor-pointer'>
     <motion.div
  className='flip-card-inner w-full h-full'
  initial={false}
  animate={{ rotateY: isFlipped ? 180 : 0 }} /* Kart ters dönerken 180 derece döndür */
  transition={{ duration: 0.6 }}
  onAnimationComplete={() => setIsAnimating(false)} /* Animasyon bittiğinde tetiklenir */
>
  <div 
    className="flip-card-front bg-cover bg-center rounded-lg" 
    style={{ backgroundImage: `url(${image})` }}>
    {/* Kartın ön yüzü */}
    <div className="w-full h-full flex items-center justify-center text-white p-5">
      <div>Learn more &gt;</div>
    </div>
  </div>

  <div 
    className="flip-card-back bg-cover bg-center rounded-lg" 
    style={{ backgroundImage: `url(${image})` }}>
    {/* Kartın arka yüzü */}
    <div className="w-full h-full flex flex-col items-center justify-between text-white p-5">
      <h1 className='text-2xl font-semibold top-0 backdrop-blur-sm bg-orange/30 rounded-lg px-4'>{title}</h1>
      <p className="text-lg  backdrop-blur-sm bg-orange/30 rounded-lg p-4">{text}</p>
    </div>
  </div>
</motion.div>
    </div>
  )
}

export default ProjectsCard
