
import React from 'react' 
import { Projects } from '../constants' // Proje verilerinin alındığı constants dosyasından Projects dizisini içe aktarıyoruz.
import ProjectsCard from '../component/ProjectsCard' // ProjectsCard bileşenini kullanmak için içe aktarıyoruz.

const Page = () => {
  return (
    // Arka planı "Mountains.jpg" olan ve tam ekran boyutunda bir div oluşturuyoruz. 
    // flex ile içerik ortalanıyor, bg-cover ile arka plan resmi tam ekrana sığdırılıyor.
    <div style={{backgroundImage: "url(Mountains.jpg)"}} 
    className='w-screen h-screen flex items-center justify-center bg-cover bg-center'>
      
      {/* Proje kartlarının yerleştirildiği grid yapısı. 2 sütunlu bir yapı ve kartlar arasında 5 birim boşluk var. */}
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        
        {/* Projects dizisindeki her bir projeyi map fonksiyonu ile dönüyoruz ve ProjectsCard bileşeni oluşturuyoruz. */}
        {Projects.map((project, index) => (
          <ProjectsCard
            key={index} // Her bir kart için benzersiz bir key değeri veriyoruz.
            title={project.title} // Projenin başlığını kart bileşenine props olarak geçiyoruz.
            text={project.text} // Projenin açıklama metnini kart bileşenine props olarak geçiyoruz.
            image={project.src} // Projenin görsel kaynağını kart bileşenine props olarak geçiyoruz.
          />
        ))}
        
      </div>
    </div>
  )
}

export default Page

